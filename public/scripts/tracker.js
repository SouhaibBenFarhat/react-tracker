(function () {

    const frequency = 1000;
    const startDate = new Date();
    const currentScript = document.querySelector('script[script-id="trackme"]');
    const host = currentScript.getAttribute('host');
    const endpoint = currentScript.getAttribute('endpoint');
    const containerId = currentScript.getAttribute('container-id');
    let watcher = null;

    const getTimeDifference = (currentTime) => {
        const res = Math.abs(currentTime - startDate) / 1000;
        const days = Math.floor(res / 86400);
        const hours = Math.floor(res / 3600) % 24;
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

    const configureWatcher = () => {
        watcher = setInterval(() => {
            const container = document.getElementById(containerId);
            if (window.location.pathname !== "/login") {
                if (container) {
                    container.innerHTML = getTimeDifference(new Date());
                }
                console.log(new Date())
            }
        }, frequency)
    };

    const killWatcher = () => {
        clearInterval(watcher);
    };

    const startTimer = () => {
        configureWatcher();
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






