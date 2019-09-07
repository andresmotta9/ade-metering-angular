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
  public obs: Observable<any>
  private subscription: Subscription

  constructor(private registerService: RegisterService) {
    this.helper = new Convertion(this.registerService)
    this.metering = this.helper.getMetering()
    console.log(this.metering)
    // this.registerService.getRegister()
    //     .subscribe(data => {console.log(data)})
    this.obs = new Observable(observable => {
      setInterval(() => {
        this.metering = this.helper.getMetering()
        console.log(localStorage.getItem('parseo'))
        if(localStorage.getItem('parseo') === '1') {
          observable.next()
        }
      }, 10000);
    })
    this.subscription = this.obs.subscribe(() => {
      console.log(this.metering.phaseA.VRMS)
      this.lineChartData[0].data[0] = this.metering.phaseA.VRMS
    })
  }
  public metering: Metering = new Metering()
  public lineChartData: ChartDataSets[] = [
    { data: [this.metering.phaseA.VRMS], label: 'Línea A vrms' }
    // { data: [this.metering.phaseA.VRMS], label: 'Línea B vrms' },
    // { data: [this.metering.phaseA.VRMS], label: 'Línea C vrms' },
    // { data: [this.metering.phaseA.VRMS], label: 'Línea N vrms' }
  ];




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
