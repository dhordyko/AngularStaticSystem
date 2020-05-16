import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.sass']
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  constructor() { }
  Highcharts = Highcharts;
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Tytuł wykresu'
      },
      subtitle: {
        text: 'Dane wykresu'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
        split: true
      },
      plotOptions: {
        area: {
          stacking: 'percent',
          lineColor: '#ffffff',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#ffffff'
          },
          accessibility: {
            pointDescriptionFormatter: function (point) {
              function round(x) {
                return Math.round(x * 100) / 100;
              }
              return (point.index + 1) + ', ' + point.category + ', ' +
                point.y + ' millions, ' + round(point.percentage) + '%, ' +
                point.series.name;
            }
          }
        }
      },
      series: [{
        name: 'Azja',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'Afryka',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Europa',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'Ameryka',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Okeania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]

    }
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));

    }, 300);
  }
}


