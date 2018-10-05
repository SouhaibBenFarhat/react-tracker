import {storageKeys} from "../utility/keys";

export function login(username) {
    return new Promise((resolve) => {
        localStorage.setItem(storageKeys.CURRENT_USER, JSON.stringify({username: username, loggedIn: true}));
        resolve();
    })
}

export function logout() {
    return new Promise((resolve) => {
        localStorage.removeItem(storageKeys.CURRENT_USER);
        resolve()
    })
}

