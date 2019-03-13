import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  COMPSCI:String = 'Computer Science';
  FINANCE:String = 'Finance';

  constructor() { }

  ngOnInit(){}

  public doughnutChartColors = [{ // grey
    backgroundColor: ['#ffaa00','#ff00cc'],
    // borderColor: ['#ffaa00','#ff00cc'],
    // pointBackgroundColor: ['#ffaa00','#ff00cc'],
    pointBorderColor: ['#fff','#fff'],
    pointHoverBackgroundColor: ['#fff','#fff'],
    pointHoverBorderColor: ['rgba(148,159,177,0.8)','rgba(148,159,177,0.8)']
  }];

  public doughnutChartOptions = {
    segmentShowStroke : true,
    animateScale : true,
    responsive: true,
    title: {
        display: true,
        text: "Computing and Financial Management",
        // fontSize: 12,
        fontFamily: "'Open Sans','sans serif'",
        fontColor: 'white'
     },
     labels: {
        fontSize: 10,
        fontFamily: "'Open Sans','sans serif'"
     },
     legend: {
        display: true,
        reverse: true,
        onClick: null,
        labels:{fontColor:'white'}
     },
     tooltips: {
      enabled: false
     },
     animation: {
        duration: 2000,
        easing: "easeOutBounce",
        animateRotate: true,
        animateScale: true
     },
     tooltops:
     {
        enabled: false
     }
  };

  public doughnutChartLabels = [this.FINANCE, this.COMPSCI];
  public doughnutChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartData = [50, 50];

  // '#ff00cc',
  
  
  // [, ];
  csVisible:Boolean = false;
  finVisible:Boolean = false;

  public chartClicked(e: any): void {
    // console.log(e);
    // console.log(e.active[0]._model);
    var index:number = e.active[0]._index;
    if (index != undefined) {
      if (this.doughnutChartLabels[index] == this.COMPSCI) {
        this.csVisible = true;
        this.finVisible = false;
      }
      else {
        this.csVisible = false;
        this.finVisible = true;
      }
    }
}

}
