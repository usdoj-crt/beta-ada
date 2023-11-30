// Adapted from Josh W. Comeau: https://www.joshwcomeau.com/snippets/javascript/debounce/

const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
};

export default debounce;