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
    this.http.get('http://localhost:3000/registers')
    .subscribe((data: any) => {
      if(this.lineChartData[0].data.length == 10) {
        this.lineChartData[0].data = [  
          this.lineChartData[0].data[1],
          this.lineChartData[0].data[2],
          this.lineChartData[0].data[3],
          this.lineChartData[0].data[4],
          this.lineChartData[0].data[5],
          this.lineChartData[0].data[6],
          this.lineChartData[0].data[7],
          this.lineChartData[0].data[8],
          this.lineChartData[0].data[9],
          this.lineChartData[0].data[10],
        ]
        this.lineChartData[0].data[9] = parseInt(data.AVRMS)
      } else {
        this.lineChartData[0].data.push(parseInt(data.AVRMS))
      }
      if(this.lineChartData[1].data.length == 10) {
        this.lineChartData[1].data = [
          this.lineChartData[1].data[1],
          this.lineChartData[1].data[2],
          this.lineChartData[1].data[3],
          this.lineChartData[1].data[4],
          this.lineChartData[1].data[5],
          this.lineChartData[1].data[6],
          this.lineChartData[1].data[7],
          this.lineChartData[1].data[8],
          this.lineChartData[1].data[9],
          this.lineChartData[1].data[10],
        ]
        this.lineChartData[1].data[9] = parseInt(data.BVRMS)
      } else {
        this.lineChartData[1].data.push(parseInt(data.BVRMS))
      }
      if(this.lineChartData[2].data.length == 10) {
        this.lineChartData[2].data = [
          this.lineChartData[2].data[1],
          this.lineChartData[2].data[2],
          this.lineChartData[2].data[3],
          this.lineChartData[2].data[4],
          this.lineChartData[2].data[5],
          this.lineChartData[2].data[6],
          this.lineChartData[2].data[7],
          this.lineChartData[2].data[8],
          this.lineChartData[2].data[9],
          this.lineChartData[2].data[10],
        ]
        this.lineChartData[2].data[9] = parseInt(data.CVRMS)
      } else {
        this.lineChartData[2].data.push(parseInt(data.CVRMS))
      }
      if(this.lineChartData[3].data.length == 10) {
        this.lineChartData[3].data = [
          this.lineChartData[3].data[1],
          this.lineChartData[3].data[2],
          this.lineChartData[3].data[3],
          this.lineChartData[3].data[4],
          this.lineChartData[3].data[5],
          this.lineChartData[3].data[6],
          this.lineChartData[3].data[7],
          this.lineChartData[3].data[8],
          this.lineChartData[3].data[9],
          this.lineChartData[3].data[10],
        ]
        this.lineChartData[3].data[9] = parseInt(data.NVRMS)
      } else {
        this.lineChartData[3].data.push(parseInt(data.NVRMS))
      }
    })
  }

}
