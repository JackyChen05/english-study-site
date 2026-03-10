// 语音合成服务 - 使用 Web Speech API

class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voice = null;
    this.isReady = false;
    this.init();
  }

  init() {
    if (!this.synth) {
      console.warn('Web Speech API is not supported in this browser');
      return;
    }

    // 加载英语语音
    const loadVoices = () => {
      const voices = this.synth.getVoices();
      // 优先选择英语语音
      this.voice = voices.find(v => v.lang.includes('en-US')) ||
                   voices.find(v => v.lang.includes('en-GB')) ||
                   voices.find(v => v.lang.includes('en')) ||
                   voices[0];
      this.isReady = true;
    };

    // Chrome 需要等待 voiceschanged 事件
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }

    // 立即尝试加载
    loadVoices();
  }

  /**
   * 朗读英文文本
   * @param {string} text - 要朗读的文本
   * @param {Object} options - 选项
   * @param {number} options.rate - 语速 (0.1-2, 默认0.9)
   * @param {number} options.pitch - 音调 (0-2, 默认1)
   * @param {Function} options.onEnd - 朗读结束回调
   */
  speak(text, options = {}) {
    if (!this.synth || !this.isReady) {
      console.warn('Speech synthesis is not ready');
      return;
    }

    // 取消之前的朗读
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = this.voice;
    utterance.rate = options.rate || 0.9; // 稍慢一点，适合学习
    utterance.pitch = options.pitch || 1;
    utterance.lang = 'en-US';
    utterance.volume = 1;

    if (options.onEnd) {
      utterance.onend = options.onEnd;
    }

    utterance.onerror = (e) => {
      console.error('Speech synthesis error:', e);
    };

    this.synth.speak(utterance);
  }

  /**
   * 停止朗读
   */
  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  /**
   * 暂停朗读
   */
  pause() {
    if (this.synth) {
      this.synth.pause();
    }
  }

  /**
   * 恢复朗读
   */
  resume() {
    if (this.synth) {
      this.synth.resume();
    }
  }

  /**
   * 检查是否支持语音合成
   */
  isSupported() {
    return 'speechSynthesis' in window;
  }
}

// 单例模式
export const speech = new SpeechService();

export default speech;
