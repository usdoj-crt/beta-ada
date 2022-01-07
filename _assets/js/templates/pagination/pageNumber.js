function pageNumber(resArray) {
    var currentOffset = parseInt(offsetUtils.getOffsetParam());
    var  currentPage;
    if (resArray.indexOf(currentOffset) >= 0) {
      currentPage = resArray.indexOf(currentOffset) + 1;
    } else {
      currentPage = resArray.indexOf(currentOffset) + 2;
    }
    var lastPage = resArray.length;
    var templateContent = `${currentPage} of ${lastPage}`;
    var para = document.createElement("p");
    var newContent = document.createTextNode(templateContent);
    para.appendChild(newContent);
    para.classList.add('margin-left-205');
    var target = document.getElementById('pagination-nav');
    target.append(para);
}
