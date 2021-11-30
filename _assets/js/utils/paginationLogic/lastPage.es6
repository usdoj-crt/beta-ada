const lastPage = (offsetArrayVal, offsetParamVal, resultsArray) => {
  return offsetParamVal === resultsArray[resultsArray.length - 1] &&
  (offsetArrayVal === offsetParamVal- 20 ||
    offsetArrayVal === offsetParamVal- 40 ||
    offsetArrayVal === offsetParamVal- 60)  
}