function createRange(start, end, step) {
    var range = [];
    if (start === end) return range.push(start);
    if (end % step === 0) {
      end = end - step;
    }
    for (var i = start; i <= end; i += step) {
      range.push(i);
    }
    return range;
  };
