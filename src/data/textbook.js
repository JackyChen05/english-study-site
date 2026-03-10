// 沪教版五年级下册英语课本数据
// 4个Module，12个Unit

export const textbook = {
  title: "沪教版五年级下册英语",
  subtitle: "义务教育教科书（三年级起点）",
  publisher: "上海教育出版社",
  modules: [
    {
      id: "m1",
      title: "Module 1",
      titleZh: "变化与差异",
      subtitle: "Changes and differences",
      color: "#FF6B6B",
      bgClass: "rainbow-gradient-1",
      units: ["u1", "u2", "u3"]
    },
    {
      id: "m2",
      title: "Module 2",
      titleZh: "工作与娱乐",
      subtitle: "Work and play",
      color: "#4D96FF",
      bgClass: "rainbow-gradient-2",
      units: ["u4", "u5", "u6"]
    },
    {
      id: "m3",
      title: "Module 3",
      titleZh: "我们所做的事情",
      subtitle: "Things we do",
      color: "#6DD55A",
      bgClass: "rainbow-gradient-3",
      units: ["u7", "u8", "u9"]
    },
    {
      id: "m4",
      title: "Module 4",
      titleZh: "我们所享受的",
      subtitle: "Things we enjoy",
      color: "#FF69B4",
      bgClass: "rainbow-gradient-4",
      units: ["u10", "u11", "u12"]
    }
  ]
};

// Unit详细数据
export const units = {
  // ==================== Module 1 ====================
  u1: {
    id: "u1",
    title: "Unit 1",
    titleZh: "Tidy up!",
    subtitle: "整理房间！",
    moduleId: "m1",
    preview: {
      introduction: "本单元学习如何询问和回答物品归属，掌握名词性物主代词的用法。通过Sally帮助Peter整理房间的故事，学习用Whose...?句型询问物品是谁的。",
      goals: [
        "能听懂并运用Whose...?询问物品归属",
        "掌握名词性物主代词：mine, yours, his, hers, theirs",
        "能运用Let's...提出建议",
        "能听懂并朗读课文对话"
      ],
      questions: [
        { q: "Whose socks are those?", a: "They're Paul's." },
        { q: "Is this cap yours?", a: "Yes, it's mine." },
        { q: "How to use 'tidy up'?", a: "Let's tidy up the room." }
      ]
    },
    vocabulary: [
      { word: "tidy", phonetic: "/ˈtaɪdi/", meaning: "整理；整洁的", type: "v./adj.", example: "Let's tidy up the room." },
      { word: "mess", phonetic: "/mes/", meaning: "脏乱；不整洁", type: "n.", example: "What a mess!" },
      { word: "let", phonetic: "/let/", meaning: "让", type: "v.", example: "Let me help you." },
      { word: "sock", phonetic: "/sɒk/", meaning: "短袜", type: "n.", example: "Whose socks are those?" },
      { word: "yours", phonetic: "/jɔːz/", meaning: "你的；你们的", type: "pron.", example: "Are they yours?" },
      { word: "cap", phonetic: "/kæp/", meaning: "帽子", type: "n.", example: "Whose cap is this?" },
      { word: "mine", phonetic: "/maɪn/", meaning: "我的", type: "pron.", example: "It's mine." },
      { word: "crayon", phonetic: "/ˈkreɪən/", meaning: "彩色蜡笔", type: "n.", example: "I have a box of crayons." },
      { word: "umbrella", phonetic: "/ʌmˈbrelə/", meaning: "伞", type: "n.", example: "Take an umbrella with you." },
      { word: "nail", phonetic: "/neɪl/", meaning: "钉子", type: "n.", example: "A box of nails" },
      { word: "drop", phonetic: "/drɒp/", meaning: "使落下；掉落", type: "v.", example: "The box drops on the floor." },
      { word: "stick", phonetic: "/stɪk/", meaning: "粘贴；粘住", type: "v.", example: "The nails stick to the stone." },
      { word: "second", phonetic: "/ˈsekənd/", meaning: "秒", type: "n.", example: "Wait a second." },
      { word: "hers", phonetic: "/hɜːz/", meaning: "她的", type: "pron.", example: "The book is hers." },
      { word: "theirs", phonetic: "/ðeəz/", meaning: "他们的；她们的；它们的", type: "pron.", example: "The toys are theirs." }
    ],
    phrases: [
      { phrase: "tidy up", meaning: "把……整理好" },
      { phrase: "(be) full of", meaning: "装满……；充满……" },
      { phrase: "a few", meaning: "几个；一些" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Sally", "Peter"],
        content: [
          { speaker: "Sally", en: "Look at your bedroom. What a mess! Let's tidy it up.", zh: "看看你的卧室。真乱啊！让我们把它整理一下。", highlight: true },
          { speaker: "Peter", en: "Sure, Sally.", zh: "好的，萨莉。" },
          { speaker: "Sally", en: "Whose socks are those? Are they yours, Peter?", zh: "那些是谁的袜子？它们是你的吗，彼得？" },
          { speaker: "Peter", en: "No, they aren't. They're Paul's.", zh: "不，不是。它们是保罗的。" },
          { speaker: "Sally", en: "Can you put them on his bed?", zh: "你能把它们放在他的床上吗？" },
          { speaker: "Peter", en: "Sure.", zh: "好的。" },
          { speaker: "Sally", en: "Whose cap is this?", zh: "这是谁的帽子？" },
          { speaker: "Peter", en: "It's mine.", zh: "它是我的。" },
          { speaker: "Sally", en: "There's a T-shirt. Is this yours too, Peter?", zh: "有一件T恤。这也是你的吗，彼得？" },
          { speaker: "Peter", en: "No. It's Paul's.", zh: "不是。是保罗的。" },
          { speaker: "Sally", en: "Can you put it on his bed?", zh: "你能把它放在他的床上吗？" },
          { speaker: "Peter", en: "Sure.", zh: "好的。" },
          { speaker: "Peter", en: "The room is now clean and tidy. Thank you for your help, Sally.", zh: "房间现在干净整洁了。谢谢你的帮助，萨莉。" },
          { speaker: "Sally", en: "You're welcome, Peter.", zh: "不客气，彼得。" }
        ]
      },
      {
        type: "reading",
        title: "Read: A magic stone",
        content: "Jimmy sees a box of nails on the table. He wants to make a toy plane. He takes the box to his bedroom. Oh! The box drops on the floor. The nails are all over the floor.\n\nDad gives Jimmy a black stone. It is a magic stone. Jimmy puts it on the floor. All the nails stick to it. The floor is clean again. How nice!",
        translation: "吉米看到桌上有一盒钉子。他想做一个玩具飞机。他把盒子带到卧室。哦！盒子掉在地上。钉子散落一地。\n\n爸爸给了吉米一块黑色的石头。这是一块魔法石。吉米把它放在地板上。所有的钉子都粘在了上面。地板又干净了。多好啊！",
        questions: [
          { q: "What does Jimmy see on the table?", a: "A box of nails." },
          { q: "What does Jimmy want to make?", a: "A toy plane." },
          { q: "What does Dad give Jimmy?", a: "A black magic stone." }
        ]
      }
    ],
    sounds: {
      title: "Learn the sounds",
      groups: [
        { letters: "ar", example: "car", word: "car" },
        { letters: "ue", example: "blue", word: "blue" },
        { letters: "oo", example: "school", word: "school" }
      ],
      tongueTwister: "Mark has a little car. The car is yellow and blue."
    },
    grammar: {
      title: "物主代词",
      explanation: "物主代词分为形容词性物主代词和名词性物主代词。名词性物主代词相当于'形容词性物主代词 + 名词'。",
      points: [
        { rule: "mine = my + 名词", example: "The cap is mine. = The cap is my cap." },
        { rule: "yours = your + 名词", example: "Are they yours? = Are they your socks?" },
        { rule: "his = his + 名词（不变）", example: "The book is his. = The book is his book." },
        { rule: "hers = her + 名词", example: "The dress is hers. = The dress is her dress." },
        { rule: "theirs = their + 名词", example: "The toys are theirs. = The toys are their toys." }
      ],
      notes: [
        "yours 可以指单数或复数",
        "mine, yours, his, hers, theirs 后面不需要加名词",
        "问句用 Whose...? 来询问归属"
      ]
    },
    sentencePatterns: [
      {
        pattern: "Whose + 名词 + is this/are those?",
        meaning: "这个/那些是谁的...?",
        examples: [
          { en: "Whose socks are those?", zh: "那些是谁的袜子？" },
          { en: "Whose cap is this?", zh: "这是谁的帽子？" },
          { en: "Whose T-shirt is this?", zh: "这是谁的T恤？" }
        ],
        practice: [
          { template: "Whose ______ is this?", words: ["book", "pen", "bag", "ruler"] },
          { template: "Whose ______ are those?", words: ["socks", "shoes", "gloves", "crayons"] }
        ]
      },
      {
        pattern: "It's/They're + 名词性物主代词",
        meaning: "它是/它们是...的",
        examples: [
          { en: "It's mine.", zh: "它是我的。" },
          { en: "They're Paul's.", zh: "它们是保罗的。" },
          { en: "It's hers.", zh: "它是她的。" }
        ],
        practice: [
          { template: "It's ______.", words: ["mine", "yours", "his", "hers", "theirs"] }
        ]
      },
      {
        pattern: "Let's + 动词原形",
        meaning: "让我们...",
        examples: [
          { en: "Let's tidy it up.", zh: "让我们把它整理一下。" },
          { en: "Let's go to school.", zh: "让我们去上学吧。" }
        ],
        practice: [
          { template: "Let's ______.", words: ["play", "study", "read", "clean"] }
        ]
      }
    ]
  },

  u2: {
    id: "u2",
    title: "Unit 2",
    titleZh: "Our new home",
    subtitle: "我们的新家",
    moduleId: "m1",
    preview: {
      introduction: "本单元学习描述房间和表达喜好，掌握Why...? Because...句型。通过Sally一家讨论新家的对话，学习用Why询问原因，用Because回答。",
      goals: [
        "能用Why...?询问原因，用Because...回答",
        "掌握房间名称：study, dining room, living room等",
        "能描述自己喜欢的房间及原因",
        "了解大雁迁徙的科普知识"
      ],
      questions: [
        { q: "Why do you like the living room?", a: "Because it's so big!" },
        { q: "Where can Dad read and write?", a: "In the study." },
        { q: "Why do Peter and Paul like the new home?", a: "Because they can play in the garden all day." }
      ]
    },
    vocabulary: [
      { word: "why", phonetic: "/waɪ/", meaning: "为什么", type: "adv.", example: "Why do you like it?" },
      { word: "because", phonetic: "/bɪˈkɒz/", meaning: "因为", type: "conj.", example: "Because it's so big!" },
      { word: "study", phonetic: "/ˈstʌdi/", meaning: "书房；学习", type: "n./v.", example: "I like the study." },
      { word: "dining room", phonetic: "/ˈdaɪnɪŋ ruːm/", meaning: "餐厅", type: "n.", example: "We eat in the dining room." },
      { word: "change", phonetic: "/tʃeɪndʒ/", meaning: "改变；变化", type: "v./n.", example: "Wild geese change homes." },
      { word: "place", phonetic: "/pleɪs/", meaning: "地方", type: "n.", example: "A wonderful place" },
      { word: "twice", phonetic: "/twaɪs/", meaning: "两次", type: "adv.", example: "Twice a year" },
      { word: "every", phonetic: "/ˈevri/", meaning: "每；每个", type: "adj.", example: "Every year" },
      { word: "north", phonetic: "/nɔːθ/", meaning: "北方；向北", type: "n./adv.", example: "Fly north" },
      { word: "south", phonetic: "/saʊθ/", meaning: "南方；向南", type: "n./adv.", example: "Fly south" },
      { word: "enough", phonetic: "/ɪˈnʌf/", meaning: "足够的", type: "adj./adv.", example: "Not enough food" },
      { word: "then", phonetic: "/ðen/", meaning: "然后", type: "adv.", example: "Then they fly back." },
      { word: "all day", phonetic: "/ɔːl deɪ/", meaning: "一天到晚", type: "phrase", example: "Play in the garden all day" }
    ],
    phrases: [
      { phrase: "all day", meaning: "一天到晚" },
      { phrase: "fly north/south", meaning: "向北/南飞" },
      { phrase: "not enough", meaning: "不够" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Sally", "Dad"],
        content: [
          { speaker: "Dad", en: "Do you like our new home, Sally?", zh: "你喜欢我们的新家吗，萨莉？" },
          { speaker: "Sally", en: "Yes. It's nice. I like the living room.", zh: "是的。它很好。我喜欢客厅。" },
          { speaker: "Dad", en: "Why do you like it?", zh: "你为什么喜欢它？" },
          { speaker: "Sally", en: "Because it's so big! What about you, Dad?", zh: "因为它很大！你呢，爸爸？" },
          { speaker: "Dad", en: "I like the study.", zh: "我喜欢书房。" },
          { speaker: "Sally", en: "Why do you like it?", zh: "你为什么喜欢它？" },
          { speaker: "Dad", en: "Because it's quiet. I can read and write there.", zh: "因为它安静。我可以在那里读书写字。" },
          { speaker: "Sally", en: "They're in the garden. They like our new home too.", zh: "他们在花园里。他们也喜欢我们的新家。" },
          { speaker: "Dad", en: "Why, Sally?", zh: "为什么，萨莉？" },
          { speaker: "Sally", en: "Because they can play in the garden all day!", zh: "因为他们可以整天在花园里玩！" }
        ]
      },
      {
        type: "reading",
        title: "Read: Wild geese",
        content: "Wild geese change homes twice every year. In spring, they fly north. In autumn, they fly south.\n\nIn winter, it is cold in the north. There is not enough food for the wild geese. So they fly to the south. It is warm there.\n\nIn spring, it is warm in the north again. The wild geese fly back. They are happy to go home.",
        translation: "大雁每年两次变换住所。春天，它们向北飞。秋天，它们向南飞。\n\n冬天，北方很冷。大雁没有足够的食物。所以它们飞到南方。那里很温暖。\n\n春天，北方又变暖了。大雁飞回来。它们很高兴回家。",
        questions: [
          { q: "How many times do wild geese change homes every year?", a: "Twice." },
          { q: "Where do they fly in spring?", a: "North." },
          { q: "Why do they fly to the south in winter?", a: "Because there is not enough food in the north." }
        ]
      }
    ],
    sounds: {
      title: "Learn the sounds",
      groups: [
        { letters: "ur", example: "purse", word: "purse" },
        { letters: "oor", example: "floor", word: "floor" },
        { letters: "ir", example: "skirt", word: "skirt" },
        { letters: "au", example: "Laura", word: "Laura" }
      ]
    },
    culture: {
      title: "Culture corner",
      content: "In the UK, this is the ground floor. In the US, this is the first floor.",
      translation: "在英国，这是一楼。在美国，这是一楼。"
    },
    grammar: {
      title: "Why...? Because...",
      explanation: "用Why...?来询问原因，用Because...来回答原因。",
      points: [
        { rule: "Why + 助动词 + 主语 + 动词...?", example: "Why do you like it?" },
        { rule: "Because + 句子", example: "Because it's so big!" },
        { rule: "Why...? 也可以用名词或代词回答", example: "Why? Because of the rain." }
      ],
      notes: [
        "Why 询问原因",
        "Because 引导原因状语从句",
        "回答时 Because 不能省略"
      ]
    },
    sentencePatterns: [
      {
        pattern: "Why do you like...?",
        meaning: "你为什么喜欢...?",
        examples: [
          { en: "Why do you like the living room?", zh: "你为什么喜欢客厅？" },
          { en: "Why do you like the study?", zh: "你为什么喜欢书房？" }
        ],
        practice: [
          { template: "Why do you like ______?", words: ["English", "music", "sports", "art"] }
        ]
      },
      {
        pattern: "Because + 句子",
        meaning: "因为...",
        examples: [
          { en: "Because it's so big!", zh: "因为它很大！" },
          { en: "Because it's quiet.", zh: "因为它安静。" }
        ],
        practice: [
          { template: "Because it's ______.", words: ["big", "quiet", "nice", "beautiful"] }
        ]
      }
    ]
  },

  u3: {
    id: "u3",
    title: "Unit 3",
    titleZh: "In the future",
    subtitle: "在将来",
    moduleId: "m1",
    preview: {
      introduction: "本单元学习一般将来时，用will表示将来要发生的事情。通过Kitty站在魔法机器前看未来自己的故事，学习用will/won't描述未来。",
      goals: [
        "能听懂并运用will/won't表示将来",
        "掌握一般将来时的肯定和否定形式",
        "能描述自己未来的变化和计划",
        "了解职业规划相关表达"
      ],
      questions: [
        { q: "Will you wear glasses in the future?", a: "No, I won't." },
        { q: "What will you be?", a: "I'll be a teacher." },
        { q: "Where will you live?", a: "I'll live in Beijing." }
      ]
    },
    vocabulary: [
      { word: "future", phonetic: "/ˈfjuːtʃə/", meaning: "将来；未来", type: "n.", example: "In the future" },
      { word: "stand", phonetic: "/stænd/", meaning: "站；站住", type: "v.", example: "Stand in front of" },
      { word: "machine", phonetic: "/məˈʃiːn/", meaning: "机器", type: "n.", example: "A magic machine" },
      { word: "will", phonetic: "/wɪl/", meaning: "将；将会", type: "modal v.", example: "I will be a teacher." },
      { word: "exercise", phonetic: "/ˈeksəsaɪz/", meaning: "运动；锻炼", type: "n./v.", example: "Do exercise" },
      { word: "early", phonetic: "/ˈɜːli/", meaning: "早；提早", type: "adv./adj.", example: "Get up early" },
      { word: "easily", phonetic: "/ˈiːzəli/", meaning: "容易地", type: "adv.", example: "Get tired easily" },
      { word: "hard", phonetic: "/hɑːd/", meaning: "努力地", type: "adv.", example: "Study hard" },
      { word: "more", phonetic: "/mɔː/", meaning: "更多的", type: "adj./adv.", example: "Read more books" },
      { word: "in the future", phonetic: "/ɪn ðə ˈfjuːtʃə/", meaning: "将来", type: "phrase", example: "What will you do in the future?" },
      { word: "in front of", phonetic: "/ɪn frʌnt ɒv/", meaning: "在……前面", type: "phrase", example: "Stand in front of the machine" },
      { word: "take a photo", phonetic: "/teɪk ə ˈfəʊtəʊ/", meaning: "拍照", type: "phrase", example: "Take a photo of me" },
      { word: "wear glasses", phonetic: "/weə ˈɡlɑːsɪz/", meaning: "戴眼镜", type: "phrase", example: "I won't wear glasses." },
      { word: "do exercise", phonetic: "/duː ˈeksəsaɪz/", meaning: "做运动", type: "phrase", example: "Do exercise every day" },
      { word: "(be) weak in", phonetic: "/biː wiːk ɪn/", meaning: "不擅长", type: "phrase", example: "I'm weak in English." },
      { word: "not...any more", phonetic: "/nɒt ˈeni mɔː/", meaning: "不再", type: "phrase", example: "I won't be late any more." }
    ],
    phrases: [
      { phrase: "in front of", meaning: "在……前面" },
      { phrase: "take a photo", meaning: "拍照" },
      { phrase: "wear glasses", meaning: "戴眼镜" },
      { phrase: "do exercise", meaning: "做运动" },
      { phrase: "(be) weak in", meaning: "不擅长" },
      { phrase: "not...any more", meaning: "不再" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Kitty"],
        content: [
          { speaker: "Narrator", en: "Kitty stands in front of a magic machine. She takes a photo. The machine shows Kitty in 15 years.", zh: "凯蒂站在一台魔法机器前。她拍了张照片。机器显示了15年后的凯蒂。", highlight: true },
          { speaker: "Machine", en: "In 15 years, you will not wear glasses. You will have big and beautiful eyes.", zh: "15年后，你将不戴眼镜。你将有美丽的大眼睛。" },
          { speaker: "Machine", en: "You will live in Beijing. You will be a teacher.", zh: "你将住在北京。你将成为一名教师。" },
          { speaker: "Machine", en: "You will love your job.", zh: "你会热爱你的工作。" },
          { speaker: "Kitty", en: "This is me in the future! I won't wear glasses. I'll have big and beautiful eyes. I'll live in Beijing and I'll be a teacher.", zh: "这就是未来的我！我不会戴眼镜。我将有美丽的大眼睛。我将住在北京，成为一名教师。" }
        ]
      },
      {
        type: "reading",
        title: "Read: Now and future",
        content: "Bobby is good at Maths, but he is weak in English. He does not like getting up early. He does not have breakfast. He is often late for school. He does not like doing exercise. He gets tired easily. He likes watching TV.\n\nIn the future, Bobby will study hard. He will read more English books. He will get up early and have breakfast. He will not be late for school any more. He will do exercise every day. He will not watch TV too much.",
        translation: "鲍比数学很好，但英语很差。他不喜欢早起。他不吃早餐。他经常上学迟到。他不喜欢运动。他很容易累。他喜欢看电视。\n\n将来，鲍比会努力学习。他会读更多英语书。他会早起吃早餐。他不会再上学迟到了。他会每天做运动。他不会看太多电视。",
        questions: [
          { q: "What is Bobby good at?", a: "Maths." },
          { q: "What is he weak in?", a: "English." },
          { q: "What will he do in the future?", a: "Study hard, read more English books, get up early..." }
        ]
      }
    ],
    sounds: {
      title: "Learn the sounds",
      groups: [
        { letters: "ee", example: "bee", word: "bee" },
        { letters: "ea", example: "tea", word: "tea" },
        { letters: "eer", example: "deer", word: "deer" },
        { letters: "ear", example: "tear", word: "tear" }
      ]
    },
    grammar: {
      title: "一般将来时 will/won't",
      explanation: "用will + 动词原形表示将来要发生的事情，will not = won't 表示将来不会发生的事情。",
      points: [
        { rule: "肯定句：主语 + will + 动词原形", example: "I will be a teacher." },
        { rule: "否定句：主语 + will not/won't + 动词原形", example: "I won't wear glasses." },
        { rule: "疑问句：Will + 主语 + 动词原形?", example: "Will she have beautiful eyes?" },
        { rule: "缩写：I'll = I will", example: "I'll have big eyes." }
      ],
      notes: [
        "will 表示将来的预测或计划",
        "will not = won't",
        "所有人称都使用 will"
      ]
    },
    sentencePatterns: [
      {
        pattern: "主语 + will + 动词原形",
        meaning: "...将...",
        examples: [
          { en: "I'll be a teacher.", zh: "我将成为一名教师。" },
          { en: "I'll have big and beautiful eyes.", zh: "我将有美丽的大眼睛。" },
          { en: "I'll live in Beijing.", zh: "我将住在北京。" }
        ],
        practice: [
          { template: "I'll ______.", words: ["be a doctor", "live in Shanghai", "study hard", "read more"] }
        ]
      },
      {
        pattern: "主语 + won't + 动词原形",
        meaning: "...将不...",
        examples: [
          { en: "I won't wear glasses.", zh: "我不会戴眼镜。" },
          { en: "I won't be late.", zh: "我不会迟到。" }
        ],
        practice: [
          { template: "I won't ______.", words: ["watch TV", "be late", "give up", "forget"] }
        ]
      },
      {
        pattern: "Will + 主语 + 动词原形?",
        meaning: "...会...吗？",
        examples: [
          { en: "Will she have beautiful eyes?", zh: "她会有美丽的眼睛吗？" },
          { en: "Will she live in Shanghai?", zh: "她会住在上海吗？" }
        ],
        practice: [
          { template: "Will you ______?", words: ["help me", "come tomorrow", "be happy", "study hard"] }
        ]
      }
    ]
  },

  // ==================== Module 2 ====================
  u4: {
    id: "u4",
    title: "Unit 4",
    titleZh: "Reading is fun",
    subtitle: "阅读很有趣",
    moduleId: "m2",
    preview: {
      introduction: "本单元学习用be going to表示将来的计划和打算。通过Kitty和Alice在书店买书的故事，学习如何表达将来的阅读计划。",
      goals: [
        "能听懂并运用be going to表示将来计划",
        "掌握书籍类型词汇：storybook, magazine, newspaper等",
        "能表达自己的阅读计划",
        "了解图书周活动"
      ],
      questions: [
        { q: "What are you going to buy?", a: "I'm going to buy a storybook." },
        { q: "What is Kitty going to do every day?", a: "She's going to read a story every day." },
        { q: "What book is Alice reading?", a: "Picture Stories of China." }
      ]
    },
    vocabulary: [
      { word: "storybook", phonetic: "/ˈstɔːribʊk/", meaning: "故事书", type: "n.", example: "I'm going to buy a storybook." },
      { word: "buy", phonetic: "/baɪ/", meaning: "买", type: "v.", example: "I'm going to buy one." },
      { word: "story", phonetic: "/ˈstɔːri/", meaning: "故事", type: "n.", example: "Read a story every day" },
      { word: "dictionary", phonetic: "/ˈdɪkʃənri/", meaning: "字典；词典", type: "n.", example: "An English dictionary" },
      { word: "magazine", phonetic: "/ˌmæɡəˈziːn/", meaning: "杂志", type: "n.", example: "A fashion magazine" },
      { word: "newspaper", phonetic: "/ˈnjuːzpeɪpə/", meaning: "报纸", type: "n.", example: "Read a newspaper" },
      { word: "week", phonetic: "/wiːk/", meaning: "周；星期", type: "n.", example: "Book Week" },
      { word: "student", phonetic: "/ˈstjuːdənt/", meaning: "学生", type: "n.", example: "Class 5A students" },
      { word: "poster", phonetic: "/ˈpəʊstə/", meaning: "海报", type: "n.", example: "Make a poster" },
      { word: "best", phonetic: "/best/", meaning: "最好的", type: "adj.", example: "The best story" },
      { word: "writer", phonetic: "/ˈraɪtə/", meaning: "作家", type: "n.", example: "The writer of the story" },
      { word: "over there", phonetic: "/ˌəʊvə ˈðeə/", meaning: "在那边", type: "phrase", example: "Look at the books over there." },
      { word: "do a survey", phonetic: "/duː ə ˈsɜːveɪ/", meaning: "做调查", type: "phrase", example: "Do a survey about books" },
      { word: "act out", phonetic: "/ækt aʊt/", meaning: "表演", type: "phrase", example: "Act out a story" }
    ],
    phrases: [
      { phrase: "over there", meaning: "在那边" },
      { phrase: "do a survey", meaning: "做调查" },
      { phrase: "act...out", meaning: "表演" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Kitty", "Alice"],
        content: [
          { speaker: "Kitty", en: "Look, Alice. There are many storybooks. I'm going to buy one.", zh: "看，爱丽丝。有很多故事书。我打算买一本。" },
          { speaker: "Alice", en: "I'm going to look at the picture books over there.", zh: "我打算看那边的图画书。" },
          { speaker: "Kitty", en: "OK.", zh: "好的。" },
          { speaker: "Kitty", en: "Do you like this picture book?", zh: "你喜欢这本图画书吗？" },
          { speaker: "Alice", en: "Yes. It's fun. There are many beautiful pictures in it.", zh: "是的。它很有趣。里面有很多美丽的图片。" },
          { speaker: "Kitty", en: "What are the pictures about?", zh: "这些图片是关于什么的？" },
          { speaker: "Alice", en: "They're pictures of different places in China. I'm going to visit these places in the future.", zh: "它们是中国不同地方的图片。我将来要去参观这些地方。" },
          { speaker: "Kitty", en: "What are you reading? Is it a storybook?", zh: "你在读什么？是故事书吗？" },
          { speaker: "Alice", en: "Yes. It's 'Picture Stories of China'. I'm going to read a story every day.", zh: "是的。是《中国图画故事》。我打算每天读一个故事。" }
        ]
      },
      {
        type: "reading",
        title: "Read: Book Week",
        content: "Next week is Book Week. The students of Class 5A are going to make a poster about the best story for children. They are going to write about the writer and the story. They are going to take some photos of the books too.\n\nThe boys are going to do a survey about children's favourite books. The girls are going to read a play and act it out.",
        translation: "下周是图书周。5A班的学生要制作一张关于最佳儿童故事的海报。他们要写关于作者和故事的内容。他们还要拍一些书的照片。\n\n男生要做关于儿童最喜爱书籍的调查。女生要读剧本并表演出来。",
        questions: [
          { q: "What are Class 5A students going to make?", a: "A poster about the best story for children." },
          { q: "What are the boys going to do?", a: "Do a survey about children's favourite books." },
          { q: "What are the girls going to do?", a: "Read a play and act it out." }
        ]
      }
    ],
    sounds: {
      title: "Learn the sounds",
      groups: [
        { letters: "i", example: "five", word: "five" },
        { letters: "ie", example: "pie", word: "pie" }
      ]
    },
    culture: {
      title: "Culture corner",
      content: "In the UK, this is the ground floor. In the US, this is the first floor.",
      translation: "在英国，这是一楼。在美国，这也是一楼。"
    },
    grammar: {
      title: "be going to 表示将来计划",
      explanation: "用be going to + 动词原形表示已经计划或打算要做的事情。",
      points: [
        { rule: "肯定句：主语 + be + going to + 动词原形", example: "I'm going to buy one." },
        { rule: "否定句：主语 + be + not + going to + 动词原形", example: "I'm not going to buy it." },
        { rule: "疑问句：Be + 主语 + going to + 动词原形?", example: "Are you going to buy it?" }
      ],
      notes: [
        "be going to 表示已经计划好的事情",
        "will 表示临时决定或预测",
        "两者都表示将来，但用法有区别"
      ]
    },
    sentencePatterns: [
      {
        pattern: "主语 + be going to + 动词原形",
        meaning: "...打算...",
        examples: [
          { en: "I'm going to buy one.", zh: "我打算买一个。" },
          { en: "I'm going to read a story every day.", zh: "我打算每天读一个故事。" }
        ],
        practice: [
          { template: "I'm going to ______.", words: ["read books", "study English", "play games", "watch TV"] }
        ]
      }
    ]
  },

  // 继续添加u5-u12
  u5: {
    id: "u5",
    title: "Unit 5",
    titleZh: "At the weekend",
    subtitle: "在周末",
    moduleId: "m2",
    preview: {
      introduction: "本单元继续学习be going to表示周末计划。通过学生们讨论周末活动的故事，学习各种娱乐活动的表达。",
      goals: [
        "能用be going to描述周末计划",
        "掌握周末活动词汇",
        "能询问和回答周末安排",
        "理解'明日复明日'的道理"
      ],
      questions: [
        { q: "What are you going to do this weekend?", a: "I'm going to play football." },
        { q: "What is Jill going to do?", a: "She's going to see a film." },
        { q: "Does Alice have any plans?", a: "No, she doesn't." }
      ]
    },
    vocabulary: [
      { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "周末", type: "n.", example: "At the weekend" },
      { word: "stay", phonetic: "/steɪ/", meaning: "待；暂住", type: "v.", example: "Stay at home" },
      { word: "film", phonetic: "/fɪlm/", meaning: "电影", type: "n.", example: "See a film" },
      { word: "boat", phonetic: "/bəʊt/", meaning: "小船；舟", type: "n.", example: "Row a boat" },
      { word: "plan", phonetic: "/plæn/", meaning: "安排；计划", type: "n./v.", example: "Weekend plan" },
      { word: "tomorrow", phonetic: "/təˈmɒrəʊ/", meaning: "明天", type: "adv./n.", example: "Don't wait until tomorrow." },
      { word: "build", phonetic: "/bɪld/", meaning: "建筑；建造", type: "v.", example: "Build a house" },
      { word: "next", phonetic: "/nekst/", meaning: "紧接着；随后", type: "adj./adv.", example: "Next week" },
      { word: "swing", phonetic: "/swɪŋ/", meaning: "秋千", type: "n./v.", example: "Play on the swing" },
      { word: "cry", phonetic: "/kraɪ/", meaning: "哭；喊叫", type: "v./n.", example: "Cry for help" },
      { word: "until", phonetic: "/ənˈtɪl/", meaning: "直到", type: "prep./conj.", example: "Wait until tomorrow" },
      { word: "see a film", phonetic: "/siː ə fɪlm/", meaning: "看电影", type: "phrase", example: "I'm going to see a film." },
      { word: "row a boat", phonetic: "/rəʊ ə bəʊt/", meaning: "划船", type: "phrase", example: "Row a boat in the park" }
    ],
    phrases: [
      { phrase: "see a film", meaning: "看电影" },
      { phrase: "row a boat", meaning: "划船" },
      { phrase: "fly a kite", meaning: "放风筝" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Ms Guo", "Joe", "Peter", "Jill", "Kitty", "Alice"],
        content: [
          { speaker: "Ms Guo", en: "Children, what are you going to do this weekend?", zh: "孩子们，这个周末你们打算做什么？" },
          { speaker: "Joe", en: "I'm going to stay at home and watch TV with my grandparents.", zh: "我打算在家和祖父母看电视。" },
          { speaker: "Peter", en: "I'm going to play football on Sunday. It's my favourite sport.", zh: "我打算周日踢足球。这是我最喜欢的运动。" },
          { speaker: "Jill", en: "I'm going to see a film with my parents on Saturday afternoon.", zh: "我打算周六下午和父母看电影。" },
          { speaker: "Kitty", en: "I'm going to row a boat and fly a kite in the park on Sunday.", zh: "我打算周日去公园划船放风筝。" },
          { speaker: "Alice", en: "I don't have any plans for the weekend.", zh: "我周末没有计划。" },
          { speaker: "Kitty", en: "Do you want to come with me, Alice?", zh: "你想和我一起去吗，爱丽丝？" },
          { speaker: "Alice", en: "Sure. Thank you, Kitty.", zh: "当然。谢谢你，凯蒂。" }
        ]
      },
      {
        type: "reading",
        title: "Read: Tomorrow",
        content: "Little Monkey does not have a house. He sleeps in a tree. He is going to build a house tomorrow.\n\nThe next day, it rains. He is going to build a house tomorrow. He plays and sleeps.\n\nOn the sixth day, it rains again. Little Monkey is wet and sad. Little Rabbit says, \"You should build your house now. Do not wait until tomorrow.\"",
        translation: "小猴子没有房子。他睡在树上。他打算明天建房子。\n\n第二天，下雨了。他打算明天建房子。他玩耍睡觉。\n\n第六天，又下雨了。小猴子又湿又难过。小兔子说：\"你应该现在就建房子。不要等到明天。\"",
        questions: [
          { q: "Where does Little Monkey sleep?", a: "In a tree." },
          { q: "Why doesn't he build a house?", a: "Because he always says tomorrow." },
          { q: "What does Little Rabbit tell him?", a: "Do not wait until tomorrow." }
        ]
      }
    ],
    sounds: {
      title: "Learn the sounds",
      groups: [
        { letters: "o", example: "Flo", word: "Flo" },
        { letters: "oa", example: "goat", word: "goat" },
        { letters: "oe", example: "Joe", word: "Joe" }
      ]
    },
    grammar: {
      title: "be going to 表示将来计划",
      explanation: "继续学习be going to，表达周末计划和打算。",
      points: [
        { rule: "What are you going to do...?", example: "What are you going to do this weekend?" },
        { rule: "时间状语：this weekend, on Sunday", example: "I'm going to play football on Sunday." }
      ],
      notes: [
        "可以用具体时间状语修饰be going to",
        "否定句：I don't have any plans."
      ]
    },
    sentencePatterns: [
      {
        pattern: "What are you going to do...?",
        meaning: "你打算做什么...?",
        examples: [
          { en: "What are you going to do this weekend?", zh: "这个周末你打算做什么？" },
          { en: "I'm going to see a film.", zh: "我打算看电影。" }
        ],
        practice: [
          { template: "I'm going to ______.", words: ["play football", "watch TV", "read books", "visit friends"] }
        ]
      }
    ]
  },

  // 简化数据，添加u6-u12的核心信息
  u6: {
    id: "u6",
    title: "Unit 6",
    titleZh: "Holidays",
    subtitle: "假期",
    moduleId: "m2",
    preview: {
      introduction: "本单元学习假期计划，用will表示将来。通过李家计划去三亚度假的故事，学习旅行相关词汇和表达。",
      goals: ["能用will描述假期计划", "掌握旅行相关词汇", "能询问和回答旅行安排"]
    },
    vocabulary: [
      { word: "holiday", phonetic: "/ˈhɒlədeɪ/", meaning: "假日；假期", type: "n.", example: "Summer holiday" },
      { word: "clear", phonetic: "/klɪə/", meaning: "清澈的", type: "adj.", example: "Clear water" },
      { word: "seafood", phonetic: "/ˈsiːfuːd/", meaning: "海鲜", type: "n.", example: "Have seafood" },
      { word: "hotel", phonetic: "/həʊˈtel/", meaning: "旅馆", type: "n.", example: "Stay in a hotel" },
      { word: "island", phonetic: "/ˈaɪlənd/", meaning: "岛", type: "n.", example: "Hainan Island" },
      { word: "butterfly", phonetic: "/ˈbʌtəflaɪ/", meaning: "蝴蝶", type: "n.", example: "Butterfly park" },
      { word: "how long", phonetic: "/haʊ lɒŋ/", meaning: "多久", type: "phrase", example: "How long will we stay?" },
      { word: "go swimming", phonetic: "/ɡəʊ ˈswɪmɪŋ/", meaning: "去游泳", type: "phrase", example: "We'll go swimming." },
      { word: "in the south of", phonetic: "/ɪn ðə saʊθ ɒv/", meaning: "在……的南部", type: "phrase", example: "In the south of China" },
      { word: "all year round", phonetic: "/ɔːl jɪə raʊnd/", meaning: "一年到头", type: "phrase", example: "Good weather all year round" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Kitty", "Dad", "Mum", "Ben"],
        content: [
          { speaker: "Kitty", en: "Mum and Dad, what are we going to do this summer?", zh: "爸爸妈妈，这个夏天我们要做什么？" },
          { speaker: "Dad", en: "Let's go to Sanya. It's a wonderful place for a holiday.", zh: "我们去三亚吧。那是个度假的好地方。" },
          { speaker: "Kitty", en: "Great! How do we get there?", zh: "太好了！我们怎么去那里？" },
          { speaker: "Dad", en: "We get there by plane.", zh: "我们乘飞机去。" },
          { speaker: "Ben", en: "Where will we stay?", zh: "我们将住在哪里？" },
          { speaker: "Mum", en: "We'll stay in a hotel by the sea.", zh: "我们将住在海边的酒店。" },
          { speaker: "Kitty", en: "How long will we stay in Sanya?", zh: "我们将在三亚待多久？" },
          { speaker: "Dad", en: "We'll stay there for five days.", zh: "我们将在那里待五天。" }
        ]
      }
    ],
    grammar: {
      title: "will 表示将来（假期计划）",
      explanation: "用will表示将来的假期安排。",
      points: [
        { rule: "Where will we stay?", example: "We'll stay in a hotel." },
        { rule: "How long will we stay?", example: "We'll stay for five days." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "Where/How long will...?",
        meaning: "...将在哪里/多久...?",
        examples: [
          { en: "Where will we stay?", zh: "我们将住在哪里？" },
          { en: "How long will we stay?", zh: "我们将待多久？" }
        ]
      }
    ]
  },

  // Module 3
  u7: {
    id: "u7",
    title: "Unit 7",
    titleZh: "Open Day",
    subtitle: "开放日",
    moduleId: "m3",
    preview: {
      introduction: "本单元学习表示顺序的副词，描述学校开放日的活动安排。",
      goals: ["能用first, next, then等表示顺序", "掌握学校场所词汇", "能描述活动流程"]
    },
    vocabulary: [
      { word: "meet", phonetic: "/miːt/", meaning: "迎接；会见", type: "v.", example: "Meet parents" },
      { word: "school gate", phonetic: "/skuːl ɡeɪt/", meaning: "校门", type: "n.", example: "At the school gate" },
      { word: "art room", phonetic: "/ɑːt ruːm/", meaning: "美术室", type: "n.", example: "Visit the art room" },
      { word: "hall", phonetic: "/hɔːl/", meaning: "礼堂", type: "n.", example: "Go to the hall" },
      { word: "finally", phonetic: "/ˈfaɪnəli/", meaning: "最后", type: "adv.", example: "Finally, meet the teachers" },
      { word: "meeting room", phonetic: "/ˈmiːtɪŋ ruːm/", meaning: "会议室", type: "n.", example: "In the meeting room" },
      { word: "show", phonetic: "/ʃəʊ/", meaning: "给……看", type: "v.", example: "Show beautiful pictures" },
      { word: "project", phonetic: "/ˈprɒdʒekt/", meaning: "课题", type: "n.", example: "Projects on the board" },
      { word: "board", phonetic: "/bɔːd/", meaning: "布告牌", type: "n.", example: "On the board" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Ms Guo", "Kitty", "Joe", "Alice", "Peter"],
        content: [
          { speaker: "Ms Guo", en: "Children, your parents will come to our school at two o'clock. I'll meet them at the school gate.", zh: "孩子们，你们的父母两点会来学校。我将在校门口迎接他们。" },
          { speaker: "Ms Guo", en: "What will they do first?", zh: "他们首先会做什么？" },
          { speaker: "Kitty", en: "First, they'll visit our classroom.", zh: "首先，他们将参观我们的教室。" },
          { speaker: "Ms Guo", en: "That's right. What will they do next?", zh: "对的。接下来他们会做什么？" },
          { speaker: "Joe", en: "Next, they'll visit the art room.", zh: "接下来，他们将参观美术室。" },
          { speaker: "Alice", en: "Then they'll go to the hall.", zh: "然后他们将去礼堂。" },
          { speaker: "Peter", en: "After that, they'll go to the library.", zh: "之后他们将去图书馆。" },
          { speaker: "Ms Guo", en: "Finally, they'll meet the teachers in the meeting room.", zh: "最后他们将在会议室见老师。" }
        ]
      }
    ],
    grammar: {
      title: "表示顺序的副词",
      explanation: "用first, next, then, after that, finally表示事情发生的顺序。",
      points: [
        { rule: "First - 首先", example: "First, they'll visit our classroom." },
        { rule: "Next - 接下来", example: "Next, they'll visit the art room." },
        { rule: "Then - 然后", example: "Then they'll go to the hall." },
        { rule: "After that - 之后", example: "After that, they'll go to the library." },
        { rule: "Finally - 最后", example: "Finally, they'll meet the teachers." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "First/Next/Then/Finally...",
        meaning: "首先/接下来/然后/最后...",
        examples: [
          { en: "First, they'll visit our classroom.", zh: "首先，他们将参观我们的教室。" },
          { en: "Finally, they'll meet the teachers.", zh: "最后他们将见老师。" }
        ]
      }
    ]
  },

  u8: {
    id: "u8",
    title: "Unit 8",
    titleZh: "Buying clothes",
    subtitle: "买衣服",
    moduleId: "m3",
    preview: {
      introduction: "本单元学习选择疑问句Which...?，通过购物场景学习衣物词汇和购物用语。",
      goals: ["能用Which...?询问选择", "掌握衣物词汇", "能进行简单的购物对话"]
    },
    vocabulary: [
      { word: "which", phonetic: "/wɪtʃ/", meaning: "哪一个；哪一些", type: "pron./adj.", example: "Which dress do you like?" },
      { word: "trousers", phonetic: "/ˈtraʊzəz/", meaning: "裤子", type: "n.", example: "A pair of trousers" },
      { word: "sweater", phonetic: "/ˈswetə/", meaning: "毛衣", type: "n.", example: "A warm sweater" },
      { word: "coat", phonetic: "/kəʊt/", meaning: "外套", type: "n.", example: "A winter coat" },
      { word: "shoe", phonetic: "/ʃuː/", meaning: "鞋", type: "n.", example: "A pair of shoes" },
      { word: "emperor", phonetic: "/ˈempərə/", meaning: "皇帝", type: "n.", example: "The emperor's new clothes" },
      { word: "try on", phonetic: "/traɪ ɒn/", meaning: "试穿", type: "phrase", example: "Try on the trousers" },
      { word: "put on", phonetic: "/pʊt ɒn/", meaning: "穿；戴", type: "phrase", example: "Put on your coat" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Mrs Li", "Kitty", "Ben"],
        content: [
          { speaker: "Mrs Li", en: "Which dress do you like, the blue one or the pink one?", zh: "你喜欢哪条裙子，蓝色的还是粉色的？" },
          { speaker: "Kitty", en: "I like the pink one. Pink is my favourite colour.", zh: "我喜欢粉色的。粉色是我最喜欢的颜色。" },
          { speaker: "Mrs Li", en: "You can try both on.", zh: "你可以两件都试穿。" },
          { speaker: "Mrs Li", en: "Which pair of trousers do you like, the white one or the brown one?", zh: "你喜欢哪条裤子，白色的还是棕色的？" },
          { speaker: "Ben", en: "I like the brown one.", zh: "我喜欢棕色的。" }
        ]
      }
    ],
    grammar: {
      title: "Which...? 选择疑问句",
      explanation: "用Which...?来询问在有限范围内的选择。",
      points: [
        { rule: "Which + 名词 + do you like, A or B?", example: "Which dress do you like, the blue one or the pink one?" },
        { rule: "回答：I like + 选项", example: "I like the pink one." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "Which + 名词 + do you like, A or B?",
        meaning: "你喜欢哪一个...，A还是B？",
        examples: [
          { en: "Which dress do you like, the blue one or the pink one?", zh: "你喜欢哪条裙子，蓝色的还是粉色的？" },
          { en: "I like the pink one.", zh: "我喜欢粉色的。" }
        ]
      }
    ]
  },

  u9: {
    id: "u9",
    title: "Unit 9",
    titleZh: "Seeing the doctor",
    subtitle: "看医生",
    moduleId: "m3",
    preview: {
      introduction: "本单元学习用should/shouldn't给出建议，通过看医生的场景学习健康相关表达。",
      goals: ["能用should/shouldn't给出建议", "掌握疾病和健康词汇", "能描述身体不适"]
    },
    vocabulary: [
      { word: "ill", phonetic: "/ɪl/", meaning: "生病的；不舒服的", type: "adj.", example: "feel ill" },
      { word: "headache", phonetic: "/ˈhedeɪk/", meaning: "头痛", type: "n.", example: "have a headache" },
      { word: "fever", phonetic: "/ˈfiːvə/", meaning: "发烧", type: "n.", example: "have a fever" },
      { word: "should", phonetic: "/ʃʊd/", meaning: "应该", type: "modal v.", example: "You should rest." },
      { word: "medicine", phonetic: "/ˈmedsn/", meaning: "药", type: "n.", example: "take some medicine" },
      { word: "rest", phonetic: "/rest/", meaning: "休息", type: "n./v.", example: "have a rest" },
      { word: "toothache", phonetic: "/ˈtuːθeɪk/", meaning: "牙痛", type: "n.", example: "have a toothache" },
      { word: "dentist", phonetic: "/ˈdentɪst/", meaning: "牙医", type: "n.", example: "see a dentist" },
      { word: "have a headache", phonetic: "/hæv ə ˈhedeɪk/", meaning: "头疼", type: "phrase", example: "I have a headache." },
      { word: "have a rest", phonetic: "/hæv ə rest/", meaning: "休息一下", type: "phrase", example: "You should have a rest." }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Doctor", "Kitty", "Mrs Li"],
        content: [
          { speaker: "Doctor", en: "How can I help you?", zh: "我能帮你什么？" },
          { speaker: "Kitty", en: "I have a headache.", zh: "我头疼。" },
          { speaker: "Mrs Li", en: "She has a fever too.", zh: "她也发烧了。" },
          { speaker: "Doctor", en: "Let me have a look. Open your mouth and say 'Ah...'", zh: "让我看看。张开嘴说'啊...'" },
          { speaker: "Doctor", en: "You have a cold. You should take some medicine. You should also drink a lot of water.", zh: "你感冒了。你应该吃些药。你也应该多喝水。" },
          { speaker: "Doctor", en: "You shouldn't go to bed late. Have a good rest and you'll get well soon.", zh: "你不应该晚睡。好好休息，你很快就会好的。" }
        ]
      }
    ],
    grammar: {
      title: "should/shouldn't 给出建议",
      explanation: "用should表示应该做的事情，shouldn't表示不应该做的事情。",
      points: [
        { rule: "should + 动词原形", example: "You should take some medicine." },
        { rule: "shouldn't + 动词原形", example: "You shouldn't go to bed late." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "You should/shouldn't...",
        meaning: "你应该/不应该...",
        examples: [
          { en: "You should take some medicine.", zh: "你应该吃些药。" },
          { en: "You shouldn't go to bed late.", zh: "你不应该晚睡。" }
        ]
      }
    ]
  },

  // Module 4
  u10: {
    id: "u10",
    title: "Unit 10",
    titleZh: "Great inventions",
    subtitle: "伟大的发明",
    moduleId: "m4",
    preview: {
      introduction: "本单元学习描述发明和创造，了解世界和中国古代的伟大发明。",
      goals: ["能描述发明的用途", "掌握发明相关词汇", "能表达自己的发明想法"]
    },
    vocabulary: [
      { word: "invention", phonetic: "/ɪnˈvenʃn/", meaning: "发明；创造", type: "n.", example: "great inventions" },
      { word: "watch", phonetic: "/wɒtʃ/", meaning: "手表", type: "n.", example: "a digital watch" },
      { word: "anywhere", phonetic: "/ˈeniweə/", meaning: "任何地方", type: "adv.", example: "tell the time anywhere" },
      { word: "travel", phonetic: "/ˈtrævl/", meaning: "旅行", type: "v./n.", example: "travel fast" },
      { word: "myself", phonetic: "/maɪˈself/", meaning: "我自己", type: "pron.", example: "I do it myself." },
      { word: "camera", phonetic: "/ˈkæmərə/", meaning: "相机", type: "n.", example: "take photos with a camera" },
      { word: "invent", phonetic: "/ɪnˈvent/", meaning: "发明", type: "v.", example: "invent something new" },
      { word: "something", phonetic: "/ˈsʌmθɪŋ/", meaning: "某事；某物", type: "pron.", example: "invent something" }
    ],
    lessons: [
      {
        type: "dialogue",
        title: "Look and say",
        characters: ["Ms Guo", "Kitty", "Alice", "Peter", "Joe"],
        content: [
          { speaker: "Ms Guo", en: "Do you know any great inventions in the world?", zh: "你知道世界上有哪些伟大的发明吗？" },
          { speaker: "Kitty", en: "I think paper is a great invention. People can write on it.", zh: "我认为纸是一项伟大的发明。人们可以在上面写字。" },
          { speaker: "Alice", en: "I think the watch is a great invention. People can tell the time anywhere.", zh: "我认为手表是一项伟大的发明。人们可以在任何地方看时间。" },
          { speaker: "Peter", en: "I think the car is a great invention. People can travel from one place to another very fast.", zh: "我认为汽车是一项伟大的发明。人们可以快速从一个地方到另一个地方。" },
          { speaker: "Joe", en: "I think... Well, I'm going to invent something myself.", zh: "我认为...嗯，我要自己发明一些东西。" },
          { speaker: "Ms Guo", en: "Great! What are you going to invent?", zh: "太棒了！你打算发明什么？" },
          { speaker: "Joe", en: "I'm going to invent a flying bike!", zh: "我打算发明一辆飞行自行车！" }
        ]
      }
    ],
    grammar: {
      title: "描述发明",
      explanation: "用People can...来描述发明的用途。",
      points: [
        { rule: "People can + 动词原形", example: "People can write on it." },
        { rule: "be going to invent", example: "I'm going to invent something." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "People can + 动词...",
        meaning: "人们可以...",
        examples: [
          { en: "People can write on it.", zh: "人们可以在上面写字。" },
          { en: "People can tell the time anywhere.", zh: "人们可以在任何地方看时间。" }
        ]
      }
    ]
  },

  u11: {
    id: "u11",
    title: "Unit 11",
    titleZh: "Chinese festivals",
    subtitle: "中国节日",
    moduleId: "m4",
    preview: {
      introduction: "本单元学习中国传统节日，了解春节、中秋节、重阳节的习俗。",
      goals: ["能描述中国传统节日", "掌握节日相关词汇", "能询问和回答节日时间"]
    },
    vocabulary: [
      { word: "festival", phonetic: "/ˈfestɪvl/", meaning: "节日", type: "n.", example: "Chinese festival" },
      { word: "important", phonetic: "/ɪmˈpɔːtnt/", meaning: "重要的", type: "adj.", example: "an important festival" },
      { word: "call", phonetic: "/kɔːl/", meaning: "把……叫做", type: "v.", example: "call it Chinese New Year" },
      { word: "dumpling", phonetic: "/ˈdʌmplɪŋ/", meaning: "饺子", type: "n.", example: "eat dumplings" },
      { word: "relative", phonetic: "/ˈrelətɪv/", meaning: "亲戚", type: "n.", example: "visit relatives" },
      { word: "red packet", phonetic: "/red ˈpækɪt/", meaning: "红包", type: "n.", example: "get red packets" },
      { word: "firework", phonetic: "/ˈfaɪəwɜːk/", meaning: "烟火", type: "n.", example: "watch fireworks" },
      { word: "monster", phonetic: "/ˈmɒnstə/", meaning: "怪物", type: "n.", example: "the monster Nian" },
      { word: "mooncake", phonetic: "/ˈmuːnkeɪk/", meaning: "月饼", type: "n.", example: "eat mooncakes" },
      { word: "at the end of", phonetic: "/æt ði end ɒv/", meaning: "在……的最后", type: "phrase", example: "at the end of the year" }
    ],
    lessons: [
      {
        type: "reading",
        title: "Read: Chinese festivals",
        content: "The Spring Festival comes in January or February every year. It is an important Chinese festival. People also call it Chinese New Year.\n\nOn Chinese New Year's Eve, families have a big dinner together. They often eat fish and dumplings. People visit their friends and relatives. Children often get red packets with some money in them. People also watch fireworks at night.\n\nThe Mid-Autumn Festival comes in September or October. The weather is cool. People enjoy the bright full moon and eat mooncakes.",
        translation: "春节每年在一月或二月到来。它是中国重要的节日。人们也叫它中国新年。\n\n除夕夜，全家人一起吃大餐。他们常吃鱼和饺子。人们拜访亲戚朋友。孩子们经常得到装有钱的红包。人们晚上也看烟花。\n\n中秋节在九月或十月。天气凉爽。人们赏明月、吃月饼。",
        questions: [
          { q: "When does the Spring Festival come?", a: "In January or February." },
          { q: "What do people eat at the Spring Festival?", a: "Fish and dumplings." },
          { q: "What do children get?", a: "Red packets." }
        ]
      }
    ],
    grammar: {
      title: "节日表达",
      explanation: "用一般现在时描述节日的时间和习俗。",
      points: [
        { rule: "节日 + comes in + 月份", example: "The Spring Festival comes in January or February." },
        { rule: "People + 动词原形", example: "People visit their friends." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "When's...? What do you do at...?",
        meaning: "...在什么时候？你在...做什么？",
        examples: [
          { en: "When's the Spring Festival?", zh: "春节在什么时候？" },
          { en: "What do you do at the Spring Festival?", zh: "你在春节做什么？" }
        ]
      }
    ]
  },

  u12: {
    id: "u12",
    title: "Unit 12",
    titleZh: "The giant's garden",
    subtitle: "巨人的花园",
    moduleId: "m4",
    preview: {
      introduction: "本单元学习童话故事《巨人的花园》，理解分享的快乐。",
      goals: ["能理解童话故事内容", "掌握故事相关词汇", "能理解分享的重要性"]
    },
    vocabulary: [
      { word: "giant", phonetic: "/ˈdʒaɪənt/", meaning: "巨人", type: "n./adj.", example: "a giant man" },
      { word: "wall", phonetic: "/wɔːl/", meaning: "墙；围墙", type: "n.", example: "a tall wall" },
      { word: "kind", phonetic: "/kaɪnd/", meaning: "友好的；体贴的", type: "adj.", example: "be kind to others" },
      { word: "through", phonetic: "/θruː/", meaning: "穿过", type: "prep./adv.", example: "come through a hole" },
      { word: "no entry", phonetic: "/nəʊ ˈentri/", meaning: "禁止进入", type: "phrase", example: "No entry!" },
      { word: "be kind to", phonetic: "/biː kaɪnd tuː/", meaning: "对……友好", type: "phrase", example: "be kind to children" },
      { word: "knock down", phonetic: "/nɒk daʊn/", meaning: "推倒；拆掉", type: "phrase", example: "knock down the wall" }
    ],
    lessons: [
      {
        type: "reading",
        title: "Read: The giant's garden",
        content: "A giant lives in a big house with a beautiful garden. Children like to play in the garden. They have a lot of fun.\n\nOne day, the giant finds the children in his garden. He is very angry. \"No entry!\" The giant builds a tall wall around his garden. The children cannot come in and play.\n\nSpring comes. It brings beautiful flowers and birds. But it does not bring any flowers to the giant's garden. Miss Spring, Miss Summer and Miss Autumn do not visit the giant. It is always winter in the garden.\n\nThe giant knocks down the wall around his garden. \"Children, you can play in my garden any time.\" Miss Spring comes again. She is not late any more.",
        translation: "一个巨人住在一座带美丽花园的大房子里。孩子们喜欢在花园里玩。他们玩得很开心。\n\n一天，巨人发现孩子们在花园里。他非常生气。\"禁止进入！\"巨人在花园周围建了高墙。孩子们不能进来玩了。\n\n春天来了。它带来美丽的花和鸟。但它没有给巨人的花园带来任何花。春天小姐、夏天小姐和秋天小姐都不来看巨人。花园里永远是冬天。\n\n巨人推倒了花园周围的墙。\"孩子们，你们可以随时在我的花园里玩。\"春天小姐又来了。她不再迟到了。",
        questions: [
          { q: "Where does the giant live?", a: "In a big house with a beautiful garden." },
          { q: "Why does the giant build a wall?", a: "Because he doesn't want children to play in his garden." },
          { q: "What does the giant do at last?", a: "He knocks down the wall." }
        ]
      }
    ],
    grammar: {
      title: "童话故事叙述",
      explanation: "用一般现在时叙述童话故事。",
      points: [
        { rule: "一般现在时叙述故事", example: "A giant lives in a big house." },
        { rule: "be kind to...", example: "Be kind to children." }
      ]
    },
    sentencePatterns: [
      {
        pattern: "be kind to...",
        meaning: "对...友好",
        examples: [
          { en: "The giant is kind to the children.", zh: "巨人对孩子们很友好。" },
          { en: "We should be kind to others.", zh: "我们应该对他人友好。" }
        ]
      }
    ]
  }
};

// 获取所有Unit列表
export const getAllUnits = () => Object.values(units);

// 获取指定Unit
export const getUnit = (id) => units[id];

// 获取指定Module的所有Unit
export const getModuleUnits = (moduleId) => {
  const module = textbook.modules.find(m => m.id === moduleId);
  return module ? module.units.map(id => units[id]) : [];
};

// 获取所有单词
export const getAllVocabulary = () => {
  return Object.values(units).flatMap(unit =>
    unit.vocabulary.map(v => ({ ...v, unitId: unit.id, unitTitle: unit.titleZh }))
  );
};

// 获取所有句型
export const getAllSentencePatterns = () => {
  return Object.values(units).flatMap(unit =>
    unit.sentencePatterns.map(s => ({ ...s, unitId: unit.id, unitTitle: unit.titleZh }))
  );
};

export default textbook;
