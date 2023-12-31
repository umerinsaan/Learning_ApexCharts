import { Component, ViewChild, numberAttribute } from '@angular/core';
import { PieChart } from 'src/app/chartsClasses/PieChart';
import { StackedColumnChart } from 'src/app/chartsClasses/StackedColumnChart';
import { ApexChart, ChartComponent } from 'ng-apexcharts';
import { MonthsChart } from 'src/app/chartsClasses/MonthsChart';
import { YearsChart } from 'src/app/chartsClasses/YearsChart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  @ViewChild('StackedColumnChart') STACKED_COLUMN_CHART: any;
  stackedColumnChart = new StackedColumnChart();

  pieChart = new PieChart();
  @ViewChild('PieChart') PIE_CHART: any;

  monthsChart = new MonthsChart();
  yearsChart = new YearsChart();



  updateStackedColumnChartData(): void {
    this.stackedColumnChart.series.forEach(item => {
      for (let i = 0; i < item.data.length; i++) {
        item.data[i] = Math.ceil(Math.random() * 120);
      }
    });
    this.STACKED_COLUMN_CHART.updateSeries(this.stackedColumnChart.series);
  }

  updatePieChartData(): void {
    for (let i = 0; i < this.pieChart.series.length; i++) {
      this.pieChart.series[i] = Math.ceil(Math.random() * 60);
    }
    this.PIE_CHART.updateSeries(this.pieChart.series)
  }

}