import storageAvailable from './localStorageAvailable';

function setStorage(name, data) {
  if (storageAvailable('localStorage')) {
    localStorage.setItem(name, data);
  }
}

function accessStorage(name) {
  return storageAvailable('localStorage') ? localStorage.getItem(name) : ''
}

export { accessStorage, setStorage };
