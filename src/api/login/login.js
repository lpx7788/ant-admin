import fetch from '@/utils/fetch';
import { projectConfig } from '@/utils/projectConfig'

export function login(userPhone, userPassword,equipmentNo) {
  return fetch({
    url: projectConfig.URL_API_USER_LOGIN,
    method: 'post',
    data: {
        userPhone,
        userPassword,
        equipmentNo
    }
  });
}

export function logout(token) {
  return fetch({
    url: projectConfig.URL_API_USER_LOGOUT,
    method: 'patch',
    data: {token}
  });
}