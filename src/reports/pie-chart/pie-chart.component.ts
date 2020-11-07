import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
   
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
  public doughnutChartLabels = ['Correct Answers', 'Incrorrect Answers', 'Unattempted' ];
  public doughnutChartData = [12,9,4];
  public doughnutChartType = 'doughnut';
  public chartOptions: any = {
    responsive: true
  };

   public chartColors: Array<any> = [{ backgroundColor: ['#3fff00', '#ff1744' , '#ffd400'] }];

  }
