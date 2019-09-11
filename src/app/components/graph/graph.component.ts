import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Convertion } from '../helpers/Convertion.js'
import { Label } from 'ng2-charts';
import { Metering } from 'src/app/models/Metering.js';
import { Observable, Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service.js';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy {
  public helper: Convertion
  public obs: Observable<any>
  private subscription: Subscription

  constructor(private registerService: RegisterService,
    private http: HttpClient) {
  }
  public metering: Metering = new Metering()
  public lineChartData: ChartDataSets[] = [
    { data: [0], label: 'Línea A vrms' },
    { data: [0], label: 'Línea B vrms' },
    { data: [0], label: 'Línea C vrms' },
    { data: [0], label: 'Línea N vrms' }
  ];
  public lineChartCurrentData: ChartDataSets[] = [
    { data: [0], label: 'Línea A irms' },
    { data: [0], label: 'Línea B irms' },
    { data: [0], label: 'Línea C irms' },
    { data: [0], label: 'Línea N irms' }
  ];




  public lineChartLabels: Label[] = ['','','','','','','','','',''];
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

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {
    setInterval(() => {
      this.getData(); 
    }, 1000);
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  getData() {
    this.http.get('https://json-ade-metering.herokuapp.com/db')
    .subscribe((data: any) => {
      this.setChartData(0, parseInt(data.registers.VAWV));
      this.setChartData(1, parseInt(data.registers.VBWV));
      this.setChartData(2, parseInt(data.registers.VCWV));
      this.setChartData(3, parseInt(data.registers.VNWV));
      this.setChartCurrentData(0, parseInt(data.registers.IAWV));
      this.setChartCurrentData(1, parseInt(data.registers.IBWV));
      this.setChartCurrentData(2, parseInt(data.registers.ICWV));
      this.setChartCurrentData(3, parseInt(data.registers.INWV));
    })
  }

  setChartData(position, value)
  {
    if (this.lineChartData[position].data.length == 10) {
      // @ts-ignore
        this.lineChartData[position].data = [
        this.lineChartData[position].data[1],
        this.lineChartData[position].data[2],
        this.lineChartData[position].data[3],
        this.lineChartData[position].data[4],
        this.lineChartData[position].data[5],
        this.lineChartData[position].data[6],
        this.lineChartData[position].data[7],
        this.lineChartData[position].data[8],
        this.lineChartData[position].data[9],
        this.lineChartData[position].data[10],
      ]
      this.lineChartData[position].data[9] = value
    } else {
      this.lineChartData[position].data.push(value)
    }
  }
  setChartCurrentData(position, value)
  {
    if (this.lineChartCurrentData[position].data.length == 10) {
      // @ts-ignore
      this.lineChartCurrentData[position].data = [
        this.lineChartCurrentData[position].data[1],
        this.lineChartCurrentData[position].data[2],
        this.lineChartCurrentData[position].data[3],
        this.lineChartCurrentData[position].data[4],
        this.lineChartCurrentData[position].data[5],
        this.lineChartCurrentData[position].data[6],
        this.lineChartCurrentData[position].data[7],
        this.lineChartCurrentData[position].data[8],
        this.lineChartCurrentData[position].data[9],
        this.lineChartCurrentData[position].data[10],
      ]
      this.lineChartCurrentData[position].data[9] = value
    } else {
      this.lineChartCurrentData[position].data.push(value)
    }
  }

}
