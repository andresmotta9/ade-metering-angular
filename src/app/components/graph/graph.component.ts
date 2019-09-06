import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Convertion } from '../helpers/Convertion.js'
import { Label } from 'ng2-charts';
import { Metering } from 'src/app/models/Metering.js';
import { Observable, Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy {
  public helper: Convertion

  constructor(private registerService: RegisterService) {
    this.helper = new Convertion(this.registerService)
    this.metering = this.helper.getMetering()
    this.registerService.getRegister()
        .subscribe(data => {console.log(data)})
  }
  public metering: Metering = new Metering()
  public lineChartData: ChartDataSets[] = [
    { data: [4], label: 'Línea A vrms' },
    { data: [4], label: 'Línea B vrms' },
    { data: [4], label: 'Línea C vrms' },
    { data: [4], label: 'Línea N vrms' }
  ];

  public obs = new Observable(observable => {
    setInterval(() => {
      // this.metering = this.helper.getMetering()
      observable.next()
    }, 1000);
  })
  private subscription: Subscription = this.obs.subscribe(() => {
    // this.lineChartData[0].data[0] = this.metering.phaseA.VRMS
  })

  public lineChartLabels: Label[] = ['0s'];
  public lineChartOptions: any = {
    responsive: true,
  };
  // public lineChartColors: Color[] = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // red
  //     backgroundColor: 'rgba(255,0,0,0.3)',
  //     borderColor: 'red',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  // public randomize(): void {
  //   let _lineChartData: Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label }
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = this.generateNumber(i);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }
  // private generateNumber(i: number) {
  //   return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  // }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }




  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
