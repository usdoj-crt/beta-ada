const secondToLastPage = (offsetArrayVal, offsetParamVal, resultsArray) => {
    return offsetParamVal === resultsArray[resultsArray.length - 2] &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal - 20 ||
      offsetArrayVal === offsetParamVal - 40)
  }