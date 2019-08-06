import { SessionStorage } from '@/store/SessionStorageCenter.js'

const TokenKey = 'X-Token'

export function getToken() {
  return SessionStorage.getStorage(TokenKey);
}

export function setToken(token) {
  return SessionStorage.setStorage(TokenKey, token);
}

export function removeToken() {
  return SessionStorage.deleteStorage(TokenKey);
}
