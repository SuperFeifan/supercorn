const Game = {
    currentNodeId: null,
    isTyping: false,
    skipTyping: false,

    init() {
        this.currentNodeId = STORY.start;
        this.bindEvents();
    },

    bindEvents() {
        document.getElementById('start-btn').addEventListener('click', () => {
            document.getElementById('title-screen').classList.add('hidden');
            this.renderNode();
        });

        document.getElementById('text-box').addEventListener('click', () => {
            if (this.isTyping) {
                this.skipTyping = true;
            } else {
                this.advance();
            }
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            location.reload();
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                if (this.isTyping) {
                    this.skipTyping = true;
                } else {
                    this.advance();
                }
            }
        });
    },

    renderNode() {
        const node = STORY.nodes[this.currentNodeId];
        if (!node) {
            console.error('Missing node:', this.currentNodeId);
            return;
        }

        this.setBackground(node.bg);
        this.setCharacters(node.chars || []);
        this.setSpeaker(node.speaker);
        this.typeText(node.text);
        this.renderChoices(node.choices || []);
    },

    setBackground(bgName) {
        const bgEl = document.getElementById('scene-bg');
        const bgValue = STORY.backgrounds[bgName] || STORY.backgrounds.palace;
        bgEl.style.background = bgValue;
        bgEl.classList.toggle('creepy', bgName === 'mirror');
    },

    setCharacters(charKeys) {
        const container = document.getElementById('characters');
        container.innerHTML = '';

        if (!charKeys || charKeys.length === 0) return;

        const positions = charKeys.length === 1
            ? ['center']
            : charKeys.length === 2
                ? ['left', 'right']
                : ['left', 'center', 'right', 'left', 'right'];

        charKeys.forEach((key, index) => {
            const charData = STORY.characters[key];
            if (!charData) return;

            const el = document.createElement('div');
            el.className = `character ${positions[index] || 'center'} visible`;
            el.innerHTML = `
                <div class="silhouette ${charData.class}">${charData.emoji}</div>
            `;
            container.appendChild(el);
        });
    },

    setSpeaker(speakerKey) {
        const nameBox = document.getElementById('name-box');
        if (!speakerKey || !STORY.characters[speakerKey]) {
            nameBox.classList.remove('visible');
            nameBox.textContent = '';
            return;
        }
        nameBox.textContent = STORY.characters[speakerKey].name;
        nameBox.classList.add('visible');
    },

    typeText(text) {
        const dialogue = document.getElementById('dialogue');
        dialogue.textContent = '';
        this.isTyping = true;
        this.skipTyping = false;

        let i = 0;
        const speed = 18;

        const type = () => {
            if (this.skipTyping) {
                dialogue.textContent = text;
                this.isTyping = false;
                return;
            }

            if (i < text.length) {
                dialogue.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                this.isTyping = false;
            }
        };

        type();
    },

    renderChoices(choices) {
        const container = document.getElementById('choices');
        container.innerHTML = '';

        if (choices.length === 0) {
            container.style.display = 'none';
            document.getElementById('text-box').style.pointerEvents = 'auto';
            return;
        }

        container.style.display = 'flex';
        document.getElementById('text-box').style.pointerEvents = 'none';

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => {
                this.currentNodeId = choice.next;
                this.renderNode();
            });
            container.appendChild(btn);
        });
    },

    advance() {
        const node = STORY.nodes[this.currentNodeId];
        if (!node || node.choices?.length > 0) return;

        if (node.ending) {
            this.showEnding(node.ending);
            return;
        }

        if (node.next) {
            this.currentNodeId = node.next;
            this.renderNode();
        }
    },

    showEnding(ending) {
        document.getElementById('ending-title').textContent = ending.title;
        document.getElementById('ending-text').textContent = ending.text;
        document.getElementById('ending-screen').classList.remove('hidden');
        document.getElementById('choices').style.display = 'none';
        document.getElementById('text-box').style.pointerEvents = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Game.init();
});
