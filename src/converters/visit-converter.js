export function extractOverview(visits = []) {

    const overview = [
        {
            path: 'Login Page',
            duration: 0
        },
        {
            path: 'Register Page',
            duration: 0
        },
        {
            path: 'Landing Page',
            duration: 0
        }
    ];

    visits.forEach((entry) => {
        switch (entry.path) {
            case '/login':
                overview[0].duration = overview[0].duration + entry.duration;
                break;
            case '/register':
                overview[1].duration = overview[1].duration + entry.duration;
                break;
            case '/':
                overview[2].duration = overview[2].duration + entry.duration;
                break;
            default:
                break;
        }
    });

    return overview;
}

export function convertToBarChartData(overviewData = []) {

    const barChartData = [];

    overviewData.forEach((entry) => {
        barChartData.push({x: entry.path, y: entry.duration / 60})
    });

    return [{
        label: 'Overview',
        values: barChartData
    }];
}