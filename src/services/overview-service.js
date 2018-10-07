import axios from 'axios';
import {urls} from "../utility/urls";

export function loadOverview() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: urls.visit,
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        })
    })
}