import {
    ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStates, ApexStroke, ApexFill, ApexDataLabels
} from 'ng-apexcharts';
import { CombinedChartsData } from '../data/CombinedCharts.data';

export class YearsChart {
    public series: ApexAxisChartSeries = [
        {
            name: 'commits',
            data: CombinedChartsData.series
        }
    ];

    public chart: ApexChart = {
        type: 'area',
        background: "#F6F8FA",
        toolbar: {
            autoSelected: "selection"
        },
        brush: {
            enabled: true,
            target: "chartyear"
        },
        selection: {
            enabled: true,
            xaxis: {
                min: new Date("26 Jan 2014").getTime(),
                max: new Date("29 Mar 2015").getTime()
            }
        }
    };

    public colors: string[] = ["#7BD39A"];

    public xaxis: ApexXAxis = {
        type: 'datetime'
    };

    public stroke: ApexStroke = {
        width: 0,
        curve: 'smooth'
    }

    public fill: ApexFill = {
        opacity: 1,
        type: 'solid'
    }

    public dataLabels : ApexDataLabels = {
        enabled: false
    }
};