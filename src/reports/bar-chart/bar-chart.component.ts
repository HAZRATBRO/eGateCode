import { Component, OnInit, DoCheck } from '@angular/core';
// import {CanvasJS} from 'canvasjs'


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit  {

 private i = 1;
  
  constructor( ) { }

  private j = 0;
  
  ngOnInit() {
    
    // let chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Basic Column Chart in Angular"
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { y: 71, label: "Apple" },
    //       { y: 55, label: "Mango" },
    //       { y: 50, label: "Orange" },
    //       { y: 65, label: "Banana" },
    //       { y: 95, label: "Pineapple" },
    //       { y: 68, label: "Pears" },
    //       { y: 28, label: "Grapes" },
    //       { y: 34, label: "Lychee" },
    //       { y: 14, label: "Jackfruit" }
    //     ]
    //   }]
    // });
      
    // chart.render();
    this.createBackgroundColours()
    console.log(this.colorArray)
    console.log(this.background)
    // console.log(this.createBackgroundColours())
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //data array
  private background:Array<any> = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
  private dataArray = Array.from({length: 20}, () => Math.floor(Math.random() * 20));
  private colorArray:Array<any> = Array.from({length: 20}, () => Math.floor(Math.random() * 3));
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.dataArray.slice(0,7), label: 'Series A'},
     
  ];
  public chartColors: Array<any> = [
    { backgroundColor: this.background.slice(0,7) }
  ];

 public createBackgroundColours(){

    for(let i = 0 ; i < this.colorArray.length ; i++){
      if(this.colorArray[i]==0){
       this.background[i]="#86ff00"
      }  
      else if(this.colorArray[i] == 1){
        this.background[i]="#ff0000"
         
      }
      else{
        this.background[i]="#ff5e00"
    }

 
  }
 }
public updateData():void{
  // this.dataArray.pop()
  // this.dataArray.push(this.dData())
  //
  
  console.log(this.colorArray)
   if(this.j+7==this.dataArray.length){
     this.j=0
   }
  this.barChartData[0].data[6] = this.dataArray[Math.floor(Math.random()*19)]
  console.log(this.barChartData)
  this.chartColors = [
    { backgroundColor: this.background.slice(this.j,this.j+7) }
  ];
  this.barChartData=[
      {data: this.dataArray.slice(this.j,this.j+7), label: 'Series A'},
       
    ];
    this.j+=1;
}



dData(){
  //get data from DB Here
  return Math.round(Math.random()*90)+10
}
 


}

 