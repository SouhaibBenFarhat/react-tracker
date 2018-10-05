import {storageKeys} from "../utility/keys";

export function login(username, password) {
    return new Promise((resolve) => {
        localStorage.setItem(storageKeys.CURRENT_USER, JSON.stringify({username: username, password: password}));
        resolve();
    })
}

export function logout() {
    return new Promise((resolve) => {
        localStorage.removeItem(storageKeys.CURRENT_USER);
        resolve()
    })
}

export function isLogged() {
    return localStorage.getItem(storageKeys.CURRENT_USER) !== undefined && localStorage.getItem(storageKeys.CURRENT_USER) !== null;
}