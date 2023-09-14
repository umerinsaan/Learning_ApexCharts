import { Component, ViewChild } from '@angular/core';
import { StackedColumnChart } from 'src/app/chartsClasses/StackedColumnChart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  @ViewChild('StackedColumnChart') STACKED_COLUMN_CHART: any;
  stackedColumnChart = new StackedColumnChart();



  updateStackedColumnChartData() {
    this.stackedColumnChart.series.forEach(item => {
      for (let i = 0; i < item.data.length; i++) {
        item.data[i] = Math.ceil(Math.random() * 120);
      }
    });
    this.STACKED_COLUMN_CHART.updateOptions(this.stackedColumnChart);
  }

}