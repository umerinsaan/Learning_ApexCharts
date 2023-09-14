import {
    ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexStroke, ApexFill, ApexDataLabels
} from 'ng-apexcharts';

import { CombinedChartsData } from '../data/CombinedCharts.data';

export class MonthsChart {
    public series: ApexAxisChartSeries = [
        {
            name: 'Commits',
            data: CombinedChartsData.series
        }
    ]

    public chart: ApexChart = {
        id: 'chartyear',
        type: 'area',
        background: '#F6F8FA',
        toolbar: {
            show: false,
            autoSelected: 'pan'
        }
    }

    public colors: string[] = ['#FF7F00'];

    public xaxis: ApexXAxis = {
        type: 'datetime'
    }

    public yaxis: ApexYAxis = {
        show: false
    }

    public stroke: ApexStroke = {
        width: 0,
        curve: 'smooth'
    }

    public fill: ApexFill = {
        opacity: 1,
        type: 'solid'
    }

    public dataLabels: ApexDataLabels = {
        enabled: false
    }
}