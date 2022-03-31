// to enable deep level flatten use recursion with reduce and concat
const flatDeep = (arr, d = 1) => {
  return d > 0
    ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
};

export default flatDeep;
