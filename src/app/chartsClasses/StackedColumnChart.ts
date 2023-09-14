import {
    ApexAxisChartSeries,
    ApexChart,
    ApexPlotOptions,
    ApexXAxis,
    ApexLegend,
    ApexYAxis
} from 'ng-apexcharts'

export class StackedColumnChart {
    public series: ApexAxisChartSeries = [
        {
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        },
        {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        },
        {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        },
        {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }
    ]

    public chart: ApexChart = {
        type: 'bar',
        stacked: true
    }

    public plotOptions: ApexPlotOptions = {
        bar: {
            borderRadius: 6,

            dataLabels: {
                total: {
                    enabled: true
                }
            }
        }
    }

    public xaxis: ApexXAxis = {
        type: 'datetime',
        categories: ['09/07/2023 GMT', '09/08/2023 GMT', '09/09/2023 GMT', '09/10/2023 GMT',
            '09/11/2023 GMT', '09/12/2023 GMT'
        ],
        labels: {
            style: {
                fontSize: '13px',
                fontWeight: 600
            }
        }
    }

    public yaxis: ApexYAxis = {
        labels: {
            style: {
                fontSize: '13px',
                fontWeight: 600
            }
        }
    }

    public legend: ApexLegend = {
        position: 'right',
        offsetY: 60
    }

    private updateData(chart: StackedColumnChart): void {
        chart.series.forEach(item => {
            for (let i = 0; i < item.data.length; i++) {
                item.data[i] = Math.ceil(Math.random() * 120);
            }
        })
    }
}