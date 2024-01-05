import { getSearchParam } from '../../utils/searchParamUtils';

export default function pageNumber(resArray) {
  const currentOffset = parseInt(getSearchParam('offset'));
  let currentPage;
  if (resArray.indexOf(currentOffset) >= 0) {
    currentPage = resArray.indexOf(currentOffset) + 1;
  } else {
    currentPage = resArray.indexOf(currentOffset) + 2;
  }
  const lastPage = resArray.length;
  const templateContent = `${currentPage} of ${lastPage}`;
  const para = document.createElement('p');
  const newContent = document.createTextNode(templateContent);
  para.appendChild(newContent);
  para.classList.add('margin-left-205');
  const target = document.getElementById('pagination-nav');
  target.append(para);
}
