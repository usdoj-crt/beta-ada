const pageNumber = (resArray) => {
    let currentOffset = parseInt(offsetUtils.getOffsetParam());
    let currentPage = resArray.indexOf(currentOffset) >= 0 ? resArray.indexOf(currentOffset) + 1 : resArray.indexOf(currentOffset) + 2;
    let lastPage = resArray.length;
    let templateContent = `${currentPage} of ${lastPage}`;
    const para = document.createElement("p");
    const newContent = document.createTextNode(templateContent);
    para.appendChild(newContent);
    para.classList.add('margin-left-205');
    let target = document.getElementById('pagination-nav');
    target.append(para);
}