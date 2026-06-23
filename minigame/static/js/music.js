const Music = {
    ctx: null,
    isPlaying: false,
    isMuted: true,
    mode: 'normal',
    nextNoteTime: 0,
    beatIndex: 0,
    tempo: 72,
    lookahead: 0.1,
    schedulerTimer: null,

    // C major pentatonic
    normalScale: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25],
    // A minor pentatonic (lower, moodier)
    creepyScale: [220.00, 261.63, 293.66, 329.63, 392.00, 440.00, 523.25],

    // 16-step melody patterns (indices into scale, -1 = rest)
    normalPattern: [
        [0, -1, 2, -1, 4, -1, 2, -1, 5, -1, 4, -1, 2, -1, 0, -1],
        [2, -1, 4, -1, 5, -1, 7, -1, 5, -1, 4, -1, 2, -1, 0, -1],
        [4, -1, 5, -1, 4, -1, 2, -1, 0, -1, 2, -1, 4, -1, 5, -1]
    ],
    creepyPattern: [
        [0, -1, 0, -1, 3, -1, 0, -1, 4, -1, 3, -1, 0, -1, -1, -1],
        [3, -1, 0, -1, 3, -1, 5, -1, 4, -1, 3, -1, 0, -1, -1, -1]
    ],

    currentPhrase: 0,

    init() {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        this.ctx = new AudioContext();

        const toggle = document.getElementById('music-toggle');
        if (toggle) {
            toggle.classList.remove('hidden');
            toggle.addEventListener('click', () => this.toggleMute());
        }
    },

    start() {
        if (!this.ctx) this.init();
        if (!this.ctx || this.isPlaying) return;

        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        this.isPlaying = true;
        this.isMuted = false;
        this.nextNoteTime = this.ctx.currentTime + 0.1;
        this.beatIndex = 0;
        this.currentPhrase = Math.floor(Math.random() * this.normalPattern.length);
        this.updateToggleLabel();
        this.scheduler();
    },

    stop() {
        this.isPlaying = false;
        if (this.schedulerTimer) {
            clearTimeout(this.schedulerTimer);
            this.schedulerTimer = null;
        }
    },

    toggleMute() {
        if (!this.ctx) this.init();
        if (!this.ctx) return;

        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            if (this.ctx.state === 'running') {
                this.ctx.suspend();
            }
        } else {
            if (!this.isPlaying) {
                this.start();
            } else if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }
        this.updateToggleLabel();
    },

    updateToggleLabel() {
        const toggle = document.getElementById('music-toggle');
        if (!toggle) return;
        toggle.textContent = this.isMuted ? '🔇 Music' : '🔊 Music';
    },

    setMode(mode) {
        this.mode = mode;
    },

    scheduler() {
        if (!this.isPlaying || this.isMuted) return;

        const secondsPerBeat = 60.0 / this.tempo;
        const secondsPerStep = secondsPerBeat / 2; // 8th notes

        while (this.nextNoteTime < this.ctx.currentTime + this.lookahead) {
            this.scheduleNote(this.nextNoteTime);
            this.nextNoteTime += secondsPerStep;
            this.beatIndex++;
            if (this.beatIndex >= 16) {
                this.beatIndex = 0;
                this.currentPhrase = (this.currentPhrase + 1) % this.normalPattern.length;
            }
        }

        this.schedulerTimer = setTimeout(() => this.scheduler(), 100);
    },

    scheduleNote(time) {
        const isCreepy = this.mode === 'creepy';
        const patternSet = isCreepy ? this.creepyPattern : this.normalPattern;
        const phrase = patternSet[this.currentPhrase % patternSet.length];
        const step = this.beatIndex % 16;
        const noteIndex = phrase[step];

        if (noteIndex === -1) return;

        const scale = isCreepy ? this.creepyScale : this.normalScale;
        const freq = scale[noteIndex % scale.length];

        // Main pluck (triangle, guzheng-like)
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = isCreepy ? 900 : 1600;
        filter.Q.value = 1.5;

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        const attack = 0.005;
        const decay = isCreepy ? 1.4 : 0.9;
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(isCreepy ? 0.16 : 0.13, time + attack);
        gain.gain.exponentialRampToValueAtTime(0.001, time + decay);

        osc.start(time);
        osc.stop(time + decay + 0.05);

        // Soft harmonic layer (sine)
        const sineOsc = this.ctx.createOscillator();
        const sineGain = this.ctx.createGain();
        sineOsc.type = 'sine';
        sineOsc.frequency.value = freq * 2;
        sineOsc.connect(sineGain);
        sineGain.connect(this.ctx.destination);

        sineGain.gain.setValueAtTime(0, time);
        sineGain.gain.linearRampToValueAtTime(isCreepy ? 0.05 : 0.04, time + attack);
        sineGain.gain.exponentialRampToValueAtTime(0.001, time + decay * 0.8);

        sineOsc.start(time);
        sineOsc.stop(time + decay + 0.05);
    }
};
