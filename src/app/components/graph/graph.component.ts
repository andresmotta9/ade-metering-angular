import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Convertion } from '../helpers/Convertion.js'
import { Label } from 'ng2-charts';
import { Metering } from 'src/app/models/Metering.js';
import { Observable, Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service.js';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { ChartOptions } from 'chart.js';
import { Color, BaseChartDirective } from 'ng2-charts';

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
  public lineChartWattData: ChartDataSets[] = [
    { data: [0], label: 'Línea A irms' },
    { data: [0], label: 'Línea B irms' },
    { data: [0], label: 'Línea C irms' },
    { data: [0], label: 'Línea N irms' }
  ];
  public lineChartVarData: ChartDataSets[] = [
    { data: [0], label: 'Línea A irms' },
    { data: [0], label: 'Línea B irms' },
    { data: [0], label: 'Línea C irms' },
    { data: [0], label: 'Línea N irms' }
  ];
  public lineChartVaData: ChartDataSets[] = [
    { data: [0], label: 'Línea A irms' },
    { data: [0], label: 'Línea B irms' },
    { data: [0], label: 'Línea C irms' },
    { data: [0], label: 'Línea N irms' }
  ];
  public lineChartThdiData: ChartDataSets[] = [
    { data: [0], label: 'Línea A irms' },
    { data: [0], label: 'Línea B irms' },
    { data: [0], label: 'Línea C irms' },
    { data: [0], label: 'Línea N irms' }
  ];
  public lineChartThdvData: ChartDataSets[] = [
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
    // setInterval(() => {
    //   this.getData(); 
    // }, 50);
    // setInterval(() => {
    //   this.getData(); 
    // }, 50);
  }

  ngOnDestroy() {
  }

  getData() {
    this.http.get('https://json-ade-metering.herokuapp.com/registers/1')
    .subscribe((data: any) => {
      this.setChartData(0, parseInt(data.registers.VAWV));
      this.setChartData(1, parseInt(data.registers.VBWV));
      this.setChartData(2, parseInt(data.registers.VCWV));
      this.setChartData(3, parseInt(data.registers.VNWV));
      this.setChartCurrentData(0, parseInt(data.registers.IAWV));
      this.setChartCurrentData(1, parseInt(data.registers.IBWV));
      this.setChartCurrentData(2, parseInt(data.registers.ICWV));
      this.setChartCurrentData(3, parseInt(data.registers.INWV));
      this.setLineChartWattData(0, parseInt(data.registers.AWATT));
      this.setLineChartWattData(1, parseInt(data.registers.BWATT));
      this.setLineChartWattData(2, parseInt(data.registers.CWATT));
      this.setLineChartWattData(3, parseInt(data.registers.NWATT));
      this.setLineChartVarData(0, parseInt(data.registers.AVAR));
      this.setLineChartVarData(1, parseInt(data.registers.BVAR));
      this.setLineChartVarData(2, parseInt(data.registers.CVAR));
      this.setLineChartVarData(3, parseInt(data.registers.NVAR));
      this.setLineChartVaData(0, parseInt(data.registers.AVA));
      this.setLineChartVaData(1, parseInt(data.registers.BVA));
      this.setLineChartVaData(2, parseInt(data.registers.CVA));
      this.setLineChartVaData(3, parseInt(data.registers.NVA));
      this.setLineChartThdiData(0, parseInt(data.registers.AVTHD));
      this.setLineChartThdiData(1, parseInt(data.registers.BVTHD));
      this.setLineChartThdiData(2, parseInt(data.registers.CVTHD));
      this.setLineChartThdiData(3, parseInt(data.registers.NVTHD));
      this.setLineChartThdiData(0, parseInt(data.registers.AITHD));
      this.setLineChartThdiData(1, parseInt(data.registers.BITHD));
      this.setLineChartThdiData(2, parseInt(data.registers.CITHD));
      this.setLineChartThdiData(3, parseInt(data.registers.NITHD));
      this.setLineChartThdvData(0, parseInt(data.registers.AITHD));
      this.setLineChartThdvData(1, parseInt(data.registers.BITHD));
      this.setLineChartThdvData(2, parseInt(data.registers.CITHD));
      this.setLineChartThdvData(3, parseInt(data.registers.NITHD));
      this.setLineChartThdvData(0, parseInt(data.registers.AVTHD));
      this.setLineChartThdvData(1, parseInt(data.registers.BVTHD));
      this.setLineChartThdvData(2, parseInt(data.registers.CVTHD));
      this.setLineChartThdvData(3, parseInt(data.registers.NVTHD));
    })
  }

  setChartData(position, value)
  {
    console.log('data length ', this.lineChartData[position].data.length);
    console.log('dataLabel length ', this.lineChartLabels.length);
    console.log('data ', this.lineChartData[position].data);
    if (this.lineChartData[position].data.length == this.lineChartLabels.length - 1) {
      console.log('new data ', this.lineChartData[position].data);
      this.lineChartData[position].data[this.lineChartLabels.length - 1] = value
      console.log('new data NEW', this.lineChartData[position].data);
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartData[position].data[i]);
      }
      console.log('temporal data ', dataArray);
      // @ts-ignore
      console.log('old data ', this.lineChartData[position].data);
      this.lineChartData[position].data = dataArray;
      console.log('NEW data ', this.lineChartData[position].data);
    } else {
      this.lineChartData[position].data.push(value)
    }
  }
  setChartCurrentData(position, value)
  {
    if (this.lineChartCurrentData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartCurrentData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartCurrentData[position].data = dataArray;
      this.lineChartCurrentData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      this.lineChartCurrentData[position].data.push(value)
    }
  }  
  setLineChartWattData(position, value)
  {
    if (this.lineChartWattData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartWattData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartWattData[position].data = dataArray;
      this.lineChartWattData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      this.lineChartWattData[position].data.push(value)
    }
  }
  setLineChartVarData(position, value)
  {
    if (this.lineChartVarData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartVarData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartVarData[position].data = dataArray;
      this.lineChartVarData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      this.lineChartVarData[position].data.push(value)
    }
  }
  setLineChartVaData(position, value)
  {
    if (this.lineChartVaData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartVaData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartVaData[position].data = dataArray;
      this.lineChartVaData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      this.lineChartVaData[position].data.push(value)
    }
  }
  setLineChartThdiData(position, value)
  {
    if (this.lineChartThdiData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartThdiData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartThdiData[position].data = dataArray;
      this.lineChartThdiData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      this.lineChartThdiData[position].data.push(value)
    }
  }
  setLineChartThdvData(position, value)
  {
    if (this.lineChartThdvData[position].data.length == this.lineChartLabels.length - 1) {
      let dataArray = [];
      for(let i = 1; i < this.lineChartLabels.length; i++) {
        dataArray.push(this.lineChartThdvData[position].data[i]);
      }
      // @ts-ignore
      this.lineChartThdvData[position].data = dataArray;
      this.lineChartThdvData[position].data[this.lineChartLabels.length - 2] = value
    } else {
      this.lineChartThdvData[position].data.push(value)
    }
  }

}
