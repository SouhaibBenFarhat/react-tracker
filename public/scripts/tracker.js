(function () {

    const frequency = 1000;
    const startDate = new Date();
    const currentScript = document.querySelector('script[script-id="trackme"]');
    const loginPagePath = currentScript.getAttribute('login-page-path');
    const startAfterLogin = currentScript.getAttribute('start-after-login');
    const host = currentScript.getAttribute('host');
    const endpoint = currentScript.getAttribute('endpoint');
    const containerId = currentScript.getAttribute('container-id');
    let sessionHash = '';
    let watcher = null;

    const getTimeDifference = (currentTime) => {
        const res = Math.abs(currentTime - startDate) / 1000;
        const minutes = Math.floor(res / 60) % 60;
        const seconds = res % 60;
        return durationFormatter(minutes, seconds);
    };
    const durationFormatter = (minutes, seconds) => {
        seconds = seconds.toString().substring(0, 2).replace('.', '');
        if (minutes.length === 1) {
            minutes = '0' + minutes + ' mins ';
        }
        if (seconds.length === 1) {
            seconds = '0' + seconds + ' secs';
        }
        if (seconds.length === 2) {
            seconds = seconds + ' secs';
        }
        return minutes + ':' + seconds;
    };

    const append = () => {
        const container = document.getElementById(containerId);
        if (container && document.hasFocus()) {
            container.innerHTML = getTimeDifference(new Date());
        }
    };

    const init = () => {
        const user_hash = localStorage.getItem('user_hash') ? localStorage.getItem('user_hash') : null;
        const data = user_hash ?
            {
                site: window.location.origin,
                path: window.location.pathname,
                user_hash: user_hash
            } :
            {
                site: window.location.origin,
                path: window.location.pathname
            };

        $.post(host + endpoint, data)
            .done((response) => {
                sessionHash = response.session_hash;
                if (!user_hash) {
                    localStorage.setItem('user_hash', response.user_hash);
                }
                configureWatcher();
            })
            .fail((xhr, status, error) => {
                console.error(xhr);
                console.error(status);
                console.error(error);
            });
    };

    const ping = () => {
        if (document.hasFocus()) {
            $.post(host + '/visit/ping', {session_hash: sessionHash})
                .done((response) => {

                })
                .fail((xhr, status, error) => {
                    console.error(xhr);
                    console.error(status);
                    console.error(error);
                });
        }
    };

    const configureWatcher = () => {
        watcher = setInterval(() => {
            if (startAfterLogin === "true") {
                if (window.location.pathname !== loginPagePath) {
                    append();
                    ping();
                }
            } else {
                append();
                ping();
            }

        }, frequency)
    };

    const killWatcher = () => {
        clearInterval(watcher);
    };

    const startTimer = () => {
        init();
    };

    const endTimer = () => {
        killWatcher();
        const result = alert("Do you want to close this tab?");
        if (!result)
            configureWatcher();
        return false;
    };

    window.onload = startTimer;
    window.onbeforeunload = endTimer;
})();






