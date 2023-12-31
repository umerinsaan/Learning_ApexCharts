import {
    ApexNonAxisChartSeries,
    ApexChart,
    ApexPlotOptions,
    ApexOptions,
    ApexDataLabels
} from 'ng-apexcharts';

export class PieChart {
    public series: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

    public chart: ApexChart = {
        type: 'pie',

    }

    public labels: string[] = ["Team A", "Team B", "Team C", "Team D", "Team E"];

    public options: ApexDataLabels = {
        style: {
            fontSize: '20px'
        }
    }
}