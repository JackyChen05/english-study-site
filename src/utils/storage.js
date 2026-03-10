// LocalStorage 封装工具

const PREFIX = 'english_study_';

export const storage = {
  /**
   * 保存数据
   * @param {string} key - 键名
   * @param {any} value - 值
   */
  set(key, value) {
    try {
      const data = JSON.stringify(value);
      localStorage.setItem(`${PREFIX}${key}`, data);
    } catch (e) {
      console.error('Storage set error:', e);
    }
  },

  /**
   * 获取数据
   * @param {string} key - 键名
   * @param {any} defaultValue - 默认值
   * @returns {any}
   */
  get(key, defaultValue = null) {
    try {
      const data = localStorage.getItem(`${PREFIX}${key}`);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.error('Storage get error:', e);
      return defaultValue;
    }
  },

  /**
   * 删除数据
   * @param {string} key - 键名
   */
  remove(key) {
    localStorage.removeItem(`${PREFIX}${key}`);
  },

  /**
   * 清空所有数据
   */
  clear() {
    Object.keys(localStorage)
      .filter(key => key.startsWith(PREFIX))
      .forEach(key => localStorage.removeItem(key));
  },

  /**
   * 获取所有键
   */
  keys() {
    return Object.keys(localStorage)
      .filter(key => key.startsWith(PREFIX))
      .map(key => key.replace(PREFIX, ''));
  }
};

export default storage;
