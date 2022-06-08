// Defining async function
async function getapi() {
    // Storing response
    const url = "https://data.gov.sg/api/action/datastore_search?resource_id=83c21090-bd19-4b54-ab6b-d999c251edcf&q=2020";
    const response = await fetch(url);
    // Storing data in form of JSON
    const data = await response.json();
    console.log(data);
    return data;
}
// Calling that async function
getapi().then(data => {
    const title = data.result.records.map(
        function (index) {
            return index.level_2;
        });
    console.log(title)

    const value = data.result.records.map(
        function (index) {
            return index.value;
        });
    console.log(value)
    
    myChart.config.data.datasets[0].label = 'Cases Recorded for Selected Major Offences (Year 2020)'
    myChart.config.data.labels = title;
    myChart.config.data.datasets[0].data = value;
    myChart.update();
});

// setup 
const data = {
    labels: ['Na', 'Na', 'Na', 'Na', 'Na', 'Na', 'Na'],
    datasets: [{
        label: 'Connecting...',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}

const myChart = new Chart(
    document.getElementById('myChart').getContext('2d'),
    config
);

