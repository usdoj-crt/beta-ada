export default function createRange(start, end, step) {
    const range = [];
    if (start === end) return range.push(start);
    if (end % step === 0) {
      end = end - step;
    }
    for (let i = start; i <= end; i += step) {
      range.push(i);
    }
    return range;
  };
