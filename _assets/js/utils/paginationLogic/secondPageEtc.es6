const secondPageEtc = (offsetArrayVal, offsetParamVal) => {
    return offsetParamVal === 20 &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal + 20 ||
      offsetArrayVal === offsetParamVal + 40)
  }