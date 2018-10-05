var timer = (function () {
    const keys = {
        CURRENT_USER: 'CURRENT_USER'
    }

    const frequency = 1000;
    const currentScript = document.querySelector('script[script-id="trackme"]');
    const host = currentScript.getAttribute('host');
    const endpoint = currentScript.getAttribute('endpoint');
    let watcher = null;

    const getCurrentUser = () => {
        const currentUser = localStorage.getItem(keys.CURRENT_USER);
        if (currentUser === undefined || currentUser === null) {
            window.location.href = "/login";
        }
    }

    const configureWatcher = () => {
        watcher = setInterval(() => {
            console.log(endpoint + ' ' + new Date());
        }, frequency)
    };

    const killWatcher = () => {
        clearInterval(watcher);
    }

    const startTimer = () => {
        if (window.location.pathname !== '/login') {
            getCurrentUser();
            configureWatcher();
        }
        window.addEventListener('hashchange', function (e) {
            if (window.location.pathname !== '/login') {
                getCurrentUser();
                configureWatcher();
            }
        });
    };
    const endTimer = () => {
        killWatcher();
        var result = alert("Do you want to close this tab?");
        if (result) {

        } else {
            configureWatcher();
        }
        return false;
    };
    return {
        start: startTimer,
        end: endTimer
    }
})();


window.onload = timer.start;
window.onbeforeunload = timer.end;



