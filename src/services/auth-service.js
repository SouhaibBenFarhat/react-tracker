import {storageKeys} from "../utility/keys";
import axios from "axios";
import {urls} from "../utility/urls";

export function login(username, password) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: urls.login,
            data: {username: username, password: password}
        }).then((response) => {
            console.warn(response);
            localStorage.setItem(storageKeys.CURRENT_USER, JSON.stringify({username: username, loggedIn: true}));
            localStorage.setItem(storageKeys.AUTH_TOKEN, response.data.auth_token);
            resolve();
        }).catch(() => {
            reject();
        });
    })
}

export function logout() {
    return new Promise((resolve) => {
        localStorage.removeItem(storageKeys.CURRENT_USER);
        resolve()
    })
}

