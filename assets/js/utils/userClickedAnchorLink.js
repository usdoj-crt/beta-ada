import { getSearchParam } from './searchParamUtils';
import { accessStorage } from './getSetlocalStorage';

export default function userClickedAnchorLink(param) {
  return accessStorage('filters') !== null && getSearchParam('filters') === '' ? true : false;
}
