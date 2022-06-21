import storageAvailable from "./localStorageAvailable";

function setStorage(name, data) {
  if (storageAvailable('localStorage')) {
    localStorage.setItem(name, data);
  }
}

function accessStorage(name) {
  let storageContent;
  if (storageAvailable('localStorage')) {
    storageContent = localStorage.getItem(name);
    return storageContent;
}
}


export {accessStorage, setStorage};