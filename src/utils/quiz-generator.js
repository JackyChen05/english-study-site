// 测验生成器 - 根据Unit数据自动生成测验题目

import { units } from '../data/textbook';

/**
   * 随机打乱数组
   */
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
   * 从数组中随机选择n个元素
   */
function sample(array, n) {
  return shuffle(array).slice(0, Math.min(n, array.length));
}

/**
   * 生成干扰项
   */
function generateDistractors(correctAnswer, allOptions, count = 3) {
  const wrongOptions = allOptions.filter(opt => opt !== correctAnswer);
  return sample(wrongOptions, count);
}

/**
   * 生成单词测验题
   */
function generateVocabularyQuestions(unit, count = 5) {
  const vocabList = unit.vocabulary || [];
  if (vocabList.length === 0) return [];

  const selectedVocab = sample(vocabList, Math.min(count, vocabList.length));
  const allMeanings = vocabList.map(v => v.meaning);

  return selectedVocab.map((vocab, index) => {
    const distractors = generateDistractors(vocab.meaning, allMeanings);
    const options = shuffle([vocab.meaning, ...distractors]);

    return {
      id: `${unit.id}_vocab_${index}`,
      type: 'vocabulary',
      question: vocab.word,
      phonetic: vocab.phonetic,
      options: options,
      answer: vocab.meaning,
      word: vocab.word,
      example: vocab.example
    };
  });
}

/**
   * 生成语法测验题
   */
function generateGrammarQuestions(unit, count = 5) {
  const patterns = unit.sentencePatterns || [];
  if (patterns.length === 0) return [];

  const questions = [];

  patterns.forEach((pattern, pIndex) => {
    if (pattern.examples && pattern.examples.length > 0) {
      pattern.examples.forEach((example, eIndex) => {
        if (questions.length < count) {
          // 填空题：隐藏关键词
          const en = example.en;
          const words = en.split(' ');
          const keyWordIndex = Math.floor(Math.random() * words.length);
          const keyWord = words[keyWordIndex];

          // 生成干扰项（其他单词）
          const otherWords = words.filter((_, i) => i !== keyWordIndex);
          const distractors = sample(otherWords, 3).map(w => w.replace(/[.,!?]$/, ''));

          questions.push({
            id: `${unit.id}_grammar_${pIndex}_${eIndex}`,
            type: 'grammar',
            question: en.replace(keyWord, '______'),
            translation: example.zh,
            options: shuffle([keyWord.replace(/[.,!?]$/, ''), ...distractors]),
            answer: keyWord.replace(/[.,!?]$/, ''),
            fullSentence: en
          });
        }
      });
    }
  });

  return questions.slice(0, count);
}

/**
   * 生成句型测验题
   */
function generateSentenceQuestions(unit, count = 5) {
  const patterns = unit.sentencePatterns || [];
  if (patterns.length === 0) return [];

  const questions = [];

  patterns.forEach((pattern, pIndex) => {
    if (pattern.examples && pattern.examples.length > 0) {
      pattern.examples.forEach((example, eIndex) => {
        if (questions.length < count) {
          // 句子排序题
          const words = example.en.split(' ');
          if (words.length > 3) {
            questions.push({
              id: `${unit.id}_sentence_${pIndex}_${eIndex}`,
              type: 'sentence',
              question: '将单词组成正确的句子',
              translation: example.zh,
              scrambled: shuffle(words),
              answer: example.en,
              words: words
            });
          }
        }
      });
    }
  });

  return questions.slice(0, count);
}

/**
   * 生成完整的单元测验
   */
export function generateQuiz(unitId) {
  const unit = units[unitId];
  if (!unit) {
    throw new Error(`Unit not found: ${unitId}`);
  }

  return {
    unitId,
    unitTitle: unit.titleZh,
    vocabulary: generateVocabularyQuestions(unit, 5),
    grammar: generateGrammarQuestions(unit, 5),
    sentence: generateSentenceQuestions(unit, 5)
  };
}

/**
   * 检查答案
   */
export function checkAnswer(question, userAnswer) {
  return question.answer.toLowerCase().trim() === userAnswer.toLowerCase().trim();
}

/**
   * 计算得分
   */
export function calculateScore(questions, correctAnswers) {
  const total = questions.length;
  const correct = correctAnswers.filter(a => a).length;
  return {
    total,
    correct,
    score: Math.round((correct / total) * 100)
  };
}

export default {
  generateQuiz,
  checkAnswer,
  calculateScore
};
