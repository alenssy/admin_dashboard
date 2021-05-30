export var ctx = document.getElementById('myChart').getContext('2d');
export var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22],
        datasets: [{
            label: 'Today',
            data: [7, 10, 11, 12, 15, 13, 15, 16, 20, 25, 19, 17, 11, 8, 19, 22, 24, 23, 21, 19, 16, 14],
            backgroundColor: 'rgba(55, 81, 255, 0.05)',
            borderColor: 'rgba(55, 81, 255, 1)',
            borderWidth: 2,
            pointRadius: 0
        }, {
            label: 'Yesterday',
            data: [10, 13, 12, 17, 18, 19, 20, 21, 17, 18, 15, 10, 9, 12, 17, 22, 21, 20, 19, 15, 12, 8],
            backgroundColor: 'rgba(223, 224, 235, 0.05)',
            borderColor: 'rgba(223, 224, 235, 1)',
            borderWidth: 2,
            pointRadius: 0
        }]
    },
    options: {
        legend: {
            position: 'bottom',
        },
        scales: {
            xAxes:[{
                gridLines:{
                    display: false
                }
            }],
            yAxes: [{
                position: 'right',
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});