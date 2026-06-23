const STORY = {
    backgrounds: {
        palace: 'linear-gradient(180deg, #4a1c1c 0%, #1a0f0f 60%, #0a0505 100%)',
        garden: 'linear-gradient(180deg, #2d5a3d 0%, #1a3322 60%, #0d1a12 100%)',
        hall: 'linear-gradient(180deg, #5c2e2e 0%, #241414 60%, #110909 100%)',
        corridor: 'linear-gradient(90deg, #3d2525 0%, #1f1212 50%, #0f0808 100%)',
        library: 'linear-gradient(180deg, #3d3020 0%, #1f1810 60%, #0f0c08 100%)',
        courtyard: 'linear-gradient(180deg, #4a3b2a 0%, #241c14 60%, #120e0a 100%)',
        tower: 'linear-gradient(180deg, #2a2a3d 0%, #12121a 60%, #08080f 100%)',
        mirror: 'linear-gradient(180deg, #1a1a2e 0%, #0d0d17 60%, #05050a 100%)',
        kitchen: 'linear-gradient(180deg, #4a3a2a 0%, #241c14 60%, #120e0a 100%)',
        moon: 'linear-gradient(180deg, #0f1a2e 0%, #080d17 60%, #020205 100%)',
        ending: 'linear-gradient(180deg, #5a2e4a 0%, #2a1522 60%, #120910 100%)'
    },
    characters: {
        yunxi: { name: 'Princess Yunxi', emoji: '👸', class: 'yunxi' },
        jingheng: { name: 'Crown Prince Jingheng', emoji: '👑', class: 'jingheng' },
        murong: { name: 'General Murong Tie', emoji: '⚔️', class: 'murong' },
        shen: { name: 'Scholar Shen Yao', emoji: '📜', class: 'shen' },
        jingyuan: { name: 'Prince Jingyuan', emoji: '🏮', class: 'jingyuan' },
        guyue: { name: 'Physician Gu Yue', emoji: '🌙', class: 'guyue' },
        emperor: { name: 'Emperor', emoji: '🐉', class: 'jingheng' },
        maid: { name: 'Maid Xiaocai', emoji: '🧹', class: 'yunxi' },
        ghost: { name: '???', emoji: '👤', class: 'ghost' }
    },
    start: 'prologue_1',
    nodes: {
        // Prologue
        prologue_1: {
            bg: 'palace',
            chars: ['yunxi'],
            speaker: 'yunxi',
            text: 'Ugh. Sixteen years of being a princess, and today Father finally decides I need a husband.',
            next: 'prologue_2'
        },
        prologue_2: {
            bg: 'palace',
            chars: ['yunxi'],
            speaker: 'yunxi',
            text: '"A lady of the imperial family must marry with dignity," he said. Then he presented five candidates like a dinner menu.',
            next: 'prologue_3'
        },
        prologue_3: {
            bg: 'hall',
            chars: ['yunxi', 'emperor'],
            speaker: 'emperor',
            text: 'Yunxi, my precious pearl. You will meet each suitor this week. Choose wisely, or I shall choose for you.',
            next: 'prologue_4'
        },
        prologue_4: {
            bg: 'hall',
            chars: ['yunxi', 'emperor'],
            speaker: 'yunxi',
            text: 'Father, one of them is my own brother. The other is fourteen.',
            next: 'prologue_5'
        },
        prologue_5: {
            bg: 'hall',
            chars: ['yunxi', 'emperor'],
            speaker: 'emperor',
            text: 'Imperial family trees are more... horizontal than vertical. Anyway, Jingyuan matures fast. Now go!',
            next: 'prologue_6'
        },
        prologue_6: {
            bg: 'corridor',
            chars: ['yunxi'],
            speaker: 'yunxi',
            text: 'Well then. Who should I bother first?',
            choices: [
                { text: 'Crown Prince Jingheng — the responsible older brother type', next: 'jingheng_1' },
                { text: 'General Murong Tie — the gruff warrior with soft eyes', next: 'murong_1' },
                { text: 'Scholar Shen Yao — sharp tongue, sharper cheekbones', next: 'shen_1' },
                { text: 'Prince Jingyuan — chaos gremlin, technically a prince', next: 'jingyuan_1' },
                { text: 'Physician Gu Yue — beautiful, mysterious, probably owns a cursed flute', next: 'guyue_1' }
            ]
        },

        // Crown Prince Jingheng route
        jingheng_1: {
            bg: 'hall',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'Yunxi. You are late. I have scheduled your courtship in the eastern study from the hour of the snake to the hour of the monkey.',
            next: 'jingheng_2'
        },
        jingheng_2: {
            bg: 'hall',
            chars: ['yunxi', 'jingheng'],
            speaker: 'yunxi',
            text: 'You scheduled my courtship? Brother, this is supposed to be romantic.',
            next: 'jingheng_3'
        },
        jingheng_3: {
            bg: 'library',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'Romance is inefficient. Here. I wrote you a poem. It has exactly forty syllables and three approved metaphors.',
            next: 'jingheng_4'
        },
        jingheng_4: {
            bg: 'library',
            chars: ['yunxi', 'jingheng'],
            speaker: 'yunxi',
            text: 'It compares my eyes to pickled radishes.',
            next: 'jingheng_5'
        },
        jingheng_5: {
            bg: 'library',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'It was a compliment. Pickled radishes are... dependable.',
            choices: [
                { text: 'Tell him the poem is beautiful', next: 'jingheng_good_1' },
                { text: 'Ask if he has ever spoken to a woman before', next: 'jingheng_funny_1' }
            ]
        },
        jingheng_good_1: {
            bg: 'library',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'Truly? I have... seventeen more. They are all about root vegetables.',
            next: 'shared_creepy_1'
        },
        jingheng_funny_1: {
            bg: 'library',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'I spoke to Mother once. She told me to stop treating emotions like tax reports.',
            next: 'shared_creepy_1'
        },
        jingheng_end_1: {
            bg: 'garden',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'Yunxi, I have restructured my feelings into a single statement: I would like to marry you. No spreadsheets attached.',
            next: 'jingheng_end_2'
        },
        jingheng_end_2: {
            bg: 'garden',
            chars: ['yunxi', 'jingheng'],
            speaker: 'yunxi',
            text: 'That might be the most romantic thing you have ever said.',
            next: 'jingheng_end_3'
        },
        jingheng_end_3: {
            bg: 'ending',
            chars: ['yunxi', 'jingheng'],
            speaker: 'jingheng',
            text: 'Wait, I did prepare a spreadsheet. It lists one hundred reasons I love you. Number one: you laugh at my poems.',
            ending: {
                title: 'Ending: The Emperor and His Pearl',
                text: 'Yunxi married the Crown Prince and became Empress. His poetry never improved, but his love was meticulous. They ruled for fifty years, during which pickled radishes became a symbol of royal affection.'
            }
        },

        // General Murong Tie route
        murong_1: {
            bg: 'courtyard',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'Princess. I have captured a bandit, trained six horses, and sharpened my sword before breakfast. What shall we do?',
            next: 'murong_2'
        },
        murong_2: {
            bg: 'courtyard',
            chars: ['yunxi', 'murong'],
            speaker: 'yunxi',
            text: 'Perhaps something less... murderous? Tea? A walk?',
            next: 'murong_3'
        },
        murong_3: {
            bg: 'garden',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'I do not understand leisure. But I will guard you while you leisure.',
            next: 'murong_4'
        },
        murong_4: {
            bg: 'garden',
            chars: ['yunxi', 'murong'],
            speaker: 'yunxi',
            text: 'A tiny dog runs past us. Murong freezes and clutches my sleeve.',
            next: 'murong_5'
        },
        murong_5: {
            bg: 'garden',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'It is... so small. Its eyes are too large. It knows my secrets.',
            choices: [
                { text: 'Laugh and tease him', next: 'murong_good_1' },
                { text: 'Protect him from the dog', next: 'murong_funny_1' }
            ]
        },
        murong_good_1: {
            bg: 'garden',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'You may laugh. I have slain wolves, but those beasts at least have the decency to be large.',
            next: 'shared_creepy_1'
        },
        murong_funny_1: {
            bg: 'garden',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'You stepped between me and the dog. I have never been more humiliated. Or more in love.',
            next: 'shared_creepy_1'
        },
        murong_end_1: {
            bg: 'courtyard',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'Princess. I have faced armies, but asking you this is the bravest thing I have done. Will you marry me?',
            next: 'murong_end_2'
        },
        murong_end_2: {
            bg: 'courtyard',
            chars: ['yunxi', 'murong'],
            speaker: 'yunxi',
            text: 'Only if you promise not to fight our wedding guests.',
            next: 'murong_end_3'
        },
        murong_end_3: {
            bg: 'ending',
            chars: ['yunxi', 'murong'],
            speaker: 'murong',
            text: 'I cannot promise that. The dog will not be invited, will it?',
            ending: {
                title: 'Ending: The General and His Princess',
                text: 'Yunxi married the General. He guarded her fiercely, cooked terrible porridge, and never learned to tolerate small dogs. They had many adventures and one very large guard dog that he pretended not to fear.'
            }
        },

        // Scholar Shen Yao route
        shen_1: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: 'Ah, the princess graces me with her presence. I was just ranking the palace teas from "drinkable" to "liquid betrayal."',
            next: 'shen_2'
        },
        shen_2: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'yunxi',
            text: 'And which one am I?',
            next: 'shen_3'
        },
        shen_3: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: 'You, Princess, are the tea that scalds the tongue and yet the cup is empty before one notices.',
            next: 'shen_4'
        },
        shen_4: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'yunxi',
            text: 'Was that a compliment or a burn?',
            next: 'shen_5'
        },
        shen_5: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: 'In my language, they are the same thing. Here. I made you tea. Do not insult it.',
            choices: [
                { text: 'Praise the tea genuinely', next: 'shen_good_1' },
                { text: 'Pretend it is terrible to see him flustered', next: 'shen_funny_1' }
            ]
        },
        shen_good_1: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: 'Good. You have taste. A rare quality in this palace of barbarians.',
            next: 'shared_creepy_1'
        },
        shen_funny_1: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: 'You—! I spent three minutes brewing that! Three minutes of my life I will never reclaim!',
            next: 'shared_creepy_1'
        },
        shen_end_1: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: 'I have written you into a poem. Do not worry, it is much better than Jingheng\'s radish disaster.',
            next: 'shen_end_2'
        },
        shen_end_2: {
            bg: 'library',
            chars: ['yunxi', 'shen'],
            speaker: 'yunxi',
            text: 'Read it to me.',
            next: 'shen_end_3'
        },
        shen_end_3: {
            bg: 'ending',
            chars: ['yunxi', 'shen'],
            speaker: 'shen',
            text: '"She is a storm in silk, a footnote I would spend my life annotating."',
            ending: {
                title: 'Ending: The Scholar and His Storm',
                text: 'Yunxi married Shen Yao. They spent their days arguing about tea, literature, and whether the moon looked better from the east or west tower. He never stopped being sarcastic, and she never stopped winning their debates.'
            }
        },

        // Prince Jingyuan route
        jingyuan_1: {
            bg: 'courtyard',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Sister! I have a plan. We run away, open a noodle shop, and never marry anyone.',
            next: 'jingyuan_2'
        },
        jingyuan_2: {
            bg: 'courtyard',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'yunxi',
            text: 'Jingyuan, you are fourteen. Also you are one of my suitors.',
            next: 'jingyuan_3'
        },
        jingyuan_3: {
            bg: 'kitchen',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Technicality! Look, I made you rice balls shaped like little ministers. This one is Father.',
            next: 'jingyuan_4'
        },
        jingyuan_4: {
            bg: 'kitchen',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'yunxi',
            text: 'Why is Father smiling like that?',
            next: 'jingyuan_5'
        },
        jingyuan_5: {
            bg: 'kitchen',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Because I filled him with spicy mustard. Try the Grand Tutor one, it is sweet.',
            choices: [
                { text: 'Eat the Father rice ball anyway', next: 'jingyuan_good_1' },
                { text: 'Help him prank the real ministers', next: 'jingyuan_funny_1' }
            ]
        },
        jingyuan_good_1: {
            bg: 'kitchen',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Your eyes are watering. You are the best sister. Maybe the only brave one in the family.',
            next: 'shared_creepy_1'
        },
        jingyuan_funny_1: {
            bg: 'kitchen',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Really?! Okay, we replace the ink in the Chancellor\'s brush with squid ink. He will never notice until sunset!',
            next: 'shared_creepy_1'
        },
        jingyuan_end_1: {
            bg: 'garden',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Sister... I know I am young. But I will grow taller, I promise. And smarter. And I will make you laugh every day.',
            next: 'jingyuan_end_2'
        },
        jingyuan_end_2: {
            bg: 'garden',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'yunxi',
            text: 'You already make me laugh. That is the problem.',
            next: 'jingyuan_end_3'
        },
        jingyuan_end_3: {
            bg: 'ending',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'Then marry the problem! Wait, that came out wrong.',
            ending: {
                title: 'Ending: The Prince and His Partner in Crime',
                text: 'Yunxi chose Jingyuan, and after a long engagement full of palace pranks, they married. Their reign was famous for being chaotic, joyful, and full of rice balls. The ministers learned to check their ink.'
            }
        },

        // Gu Yue route
        guyue_1: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'The princess walks where the moonlight fears to follow. How... delicious.',
            next: 'guyue_2'
        },
        guyue_2: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'yunxi',
            text: 'Are you flirting or threatening me? It is hard to tell.',
            next: 'guyue_3'
        },
        guyue_3: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'Both? Neither? Words are such fragile things. Like butterfly wings. Or promises.',
            next: 'guyue_4'
        },
        guyue_4: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'Here. A tincture for your dreams. It will make them sweeter. Or stranger. I forget which.',
            next: 'guyue_5'
        },
        guyue_5: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'yunxi',
            text: 'You are definitely not a normal physician.',
            choices: [
                { text: 'Drink the tincture', next: 'guyue_good_1' },
                { text: 'Ask how old he really is', next: 'guyue_funny_1' }
            ]
        },
        guyue_good_1: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'Brave girl. Most people flinch. You drink the moon and smile. I find that... concerning. And captivating.',
            next: 'shared_creepy_1'
        },
        guyue_funny_1: {
            bg: 'tower',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'Old enough to know better, young enough to pretend otherwise. You ask dangerous questions, Princess.',
            next: 'shared_creepy_1'
        },
        guyue_end_1: {
            bg: 'moon',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'I have lived many lives, Yunxi. I have forgotten most names. But yours I would carve into my bones if I could.',
            next: 'guyue_end_2'
        },
        guyue_end_2: {
            bg: 'moon',
            chars: ['yunxi', 'guyue'],
            speaker: 'yunxi',
            text: 'That is either the creepiest or most romantic thing anyone has said to me.',
            next: 'guyue_end_3'
        },
        guyue_end_3: {
            bg: 'ending',
            chars: ['yunxi', 'guyue'],
            speaker: 'guyue',
            text: 'Why not both? Marry me, and I promise to keep you entertained until the stars go cold.',
            ending: {
                title: 'Ending: The Physician and His Immortal Heart',
                text: 'Yunxi married Gu Yue. Their life was strange and beautiful, filled with midnight experiments, ethereal teas, and a library of forbidden books. He never aged, but he never stopped looking at her like she was the only wonder in the world.'
            }
        },

        // Shared creepy interlude
        shared_creepy_1: {
            bg: 'corridor',
            chars: ['yunxi'],
            speaker: 'yunxi',
            text: 'The palace feels different tonight. The lanterns flicker even when there is no wind.',
            next: 'shared_creepy_2'
        },
        shared_creepy_2: {
            bg: 'corridor',
            chars: ['yunxi', 'maid'],
            speaker: 'maid',
            text: 'Princess! Do not go to the East Wing! The servants say the face-stealer walks again!',
            next: 'shared_creepy_3'
        },
        shared_creepy_3: {
            bg: 'corridor',
            chars: ['yunxi', 'maid'],
            speaker: 'yunxi',
            text: 'The face-stealer? That is just a story to scare kitchen boys.',
            next: 'shared_creepy_4'
        },
        shared_creepy_4: {
            bg: 'mirror',
            chars: ['yunxi'],
            speaker: 'yunxi',
            text: 'But when I pass the old bronze mirror, my reflection smiles three seconds after I do.',
            next: 'shared_creepy_5'
        },
        shared_creepy_5: {
            bg: 'mirror',
            chars: ['yunxi', 'ghost'],
            speaker: 'ghost',
            text: 'Princess... come closer... I have been waiting...',
            next: 'shared_creepy_6'
        },
        shared_creepy_6: {
            bg: 'mirror',
            chars: ['yunxi', 'ghost'],
            speaker: 'yunxi',
            text: 'My heart pounds. The room grows cold. I should run. But something in the voice sounds familiar.',
            choices: [
                { text: 'Step closer to the mirror', next: 'shared_creepy_closer' },
                { text: 'Throw a shoe at the mirror', next: 'shared_creepy_shoe' }
            ]
        },
        shared_creepy_closer: {
            bg: 'mirror',
            chars: ['yunxi', 'ghost'],
            speaker: 'ghost',
            text: 'Yes... closer... let me show you the truth behind the palace walls...',
            next: 'shared_creepy_reveal'
        },
        shared_creepy_shoe: {
            bg: 'mirror',
            chars: ['yunxi', 'ghost'],
            speaker: 'ghost',
            text: 'OW! Why does everyone throw things at me?!',
            next: 'shared_creepy_reveal'
        },
        shared_creepy_reveal: {
            bg: 'mirror',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'It was Jingyuan the whole time! He rigged the mirror with fishing wire and a voice funnel!',
            next: 'shared_creepy_7'
        },
        shared_creepy_7: {
            bg: 'mirror',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'yunxi',
            text: 'You scared me half to death!',
            next: 'shared_creepy_8'
        },
        shared_creepy_8: {
            bg: 'mirror',
            chars: ['yunxi', 'jingyuan'],
            speaker: 'jingyuan',
            text: 'But it worked! I was testing which of your suitors would rush to save you. Look, here they come!',
            next: 'shared_creepy_9'
        },
        shared_creepy_9: {
            bg: 'mirror',
            chars: ['yunxi', 'jingheng', 'murong', 'shen', 'guyue'],
            speaker: 'murong',
            text: 'Stand aside! I shall slay the ghost! ...Why is everyone staring at Jingyuan?',
            next: 'shared_creepy_10'
        },
        shared_creepy_10: {
            bg: 'mirror',
            chars: ['yunxi', 'jingheng', 'murong', 'shen', 'guyue'],
            speaker: 'shen',
            text: 'Because the "ghost" is a fourteen-year-old with too much time and wire.',
            next: 'shared_creepy_11'
        },
        shared_creepy_11: {
            bg: 'mirror',
            chars: ['yunxi', 'jingheng', 'murong', 'shen', 'guyue'],
            speaker: 'guyue',
            text: 'Pity. For a moment I thought the palace had finally become interesting.',
            next: 'shared_creepy_12'
        },
        shared_creepy_12: {
            bg: 'mirror',
            chars: ['yunxi', 'jingheng', 'murong', 'shen', 'guyue'],
            speaker: 'jingheng',
            text: 'Yunxi. After this... debacle... have you decided who you wish to continue courting?',
            next: 'route_decision'
        },

        // Route decision after creepy interlude
        route_decision: {
            bg: 'hall',
            chars: ['yunxi'],
            speaker: 'yunxi',
            text: 'Yes. I have made my choice.',
            choices: [
                { text: 'Jingheng — his terrible poetry and all', next: 'jingheng_end_1' },
                { text: 'Murong — warrior of my heart', next: 'murong_end_1' },
                { text: 'Shen — my favorite sarcastic tea snob', next: 'shen_end_1' },
                { text: 'Jingyuan — let us cause chaos together', next: 'jingyuan_end_1' },
                { text: 'Gu Yue — beautiful mystery, come closer', next: 'guyue_end_1' }
            ]
        }
    }
};
