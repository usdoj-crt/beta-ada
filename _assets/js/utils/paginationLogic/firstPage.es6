const firstPage = (offsetArrayVal, offsetParamVal) => {
    return offsetParamVal === 0 &&
    (offsetArrayVal === offsetParamVal + 20 ||
      offsetArrayVal === offsetParamVal + 40 ||
      offsetArrayVal === offsetParamVal + 60)
  }