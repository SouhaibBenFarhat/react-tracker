(function () {

    //ping frequency
    const frequency = 1000;
    const startDate = new Date();
    const currentScript = document.querySelector('script[script-id="trackme"]');
    //get host address
    const host = currentScript.getAttribute('host');
    // endpoint for saving timelogs
    const endpoint = currentScript.getAttribute('endpoint');
    // container element id to display the elapsed time.
    const containerId = currentScript.getAttribute('container-id');
    let sessionHash = '';
    let watcher = null;

    // get time difference between session start date and current date
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

    // function for appending the elapsed time.
    const append = () => {
        const container = document.getElementById(containerId);
        if (container && document.hasFocus()) {
            container.innerHTML = getTimeDifference(new Date());
        }
    };

    // initiation, fetch user_hash and send session initiation request.
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
            append();
            ping();
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
    };

    window.onload = startTimer;
    window.onbeforeunload = endTimer;
})();






