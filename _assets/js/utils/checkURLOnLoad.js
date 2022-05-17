import { getSearchParam } from "./searchParamUtils";

export default function checkURL(param) {
    const params = getSearchParam(param).split(';');
    return params;
}