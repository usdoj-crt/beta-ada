const intermediatePages = (urlParams, offsetArrayVal, offsetParamVal) => {
    return urlParams.get("offset") &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal - 20 ||
      offsetArrayVal === offsetParamVal + 20)
  }