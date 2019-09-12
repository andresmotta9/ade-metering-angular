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
  }

  ngOnDestroy() {
  }

  getData() {
    this.http.get('https://json-ade-metering.herokuapp.com/db')
    .subscribe((data: any) => {
      this.setChartData(0, parseInt(data.registers.VAWV));
      this.setChartData(1, parseInt(data.registers.VBWV));
      this.setChartData(2, parseInt(data.registers.VCWV));
      this.setChartData(3, parseInt(data.registers.VNWV));
      this.setChartData(0, (parseInt(data.registers.VAWV)+2000));
      this.setChartData(1, (parseInt(data.registers.VBWV)+4000));
      this.setChartData(2, (parseInt(data.registers.VCWV)+6000));
      this.setChartData(3, (parseInt(data.registers.VNWV)+5000));
      this.setChartCurrentData(0, parseInt(data.registers.IAWV));
      this.setChartCurrentData(1, parseInt(data.registers.IBWV));
      this.setChartCurrentData(2, parseInt(data.registers.ICWV));
      this.setChartCurrentData(3, parseInt(data.registers.INWV));
      this.setChartCurrentData(0, (parseInt(data.registers.IAWV)+2000));
      this.setChartCurrentData(1, (parseInt(data.registers.IBWV)+4000));
      this.setChartCurrentData(2, (parseInt(data.registers.ICWV)+6000));
      this.setChartCurrentData(3, (parseInt(data.registers.INWV)+5000));
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
  setLineChartWattData(position, value)
  {
    if (this.lineChartWattData[position].data.length == 10) {
      // @ts-ignore
      this.lineChartWattData[position].data = [
        this.lineChartWattData[position].data[1],
        this.lineChartWattData[position].data[2],
        this.lineChartWattData[position].data[3],
        this.lineChartWattData[position].data[4],
        this.lineChartWattData[position].data[5],
        this.lineChartWattData[position].data[6],
        this.lineChartWattData[position].data[7],
        this.lineChartWattData[position].data[8],
        this.lineChartWattData[position].data[9],
        this.lineChartWattData[position].data[10],
      ]
      this.lineChartWattData[position].data[9] = value
    } else {
      this.lineChartWattData[position].data.push(value)
    }
  }
  setLineChartVarData(position, value)
  {
    if (this.lineChartVarData[position].data.length == 10) {
      // @ts-ignore
      this.lineChartVarData[position].data = [
        this.lineChartVarData[position].data[1],
        this.lineChartVarData[position].data[2],
        this.lineChartVarData[position].data[3],
        this.lineChartVarData[position].data[4],
        this.lineChartVarData[position].data[5],
        this.lineChartVarData[position].data[6],
        this.lineChartVarData[position].data[7],
        this.lineChartVarData[position].data[8],
        this.lineChartVarData[position].data[9],
        this.lineChartVarData[position].data[10],
      ]
      this.lineChartVarData[position].data[9] = value
    } else {
      this.lineChartVarData[position].data.push(value)
    }
  }
  setLineChartVaData(position, value)
  {
    if (this.lineChartVaData[position].data.length == 10) {
      // @ts-ignore
      this.lineChartVaData[position].data = [
        this.lineChartVaData[position].data[1],
        this.lineChartVaData[position].data[2],
        this.lineChartVaData[position].data[3],
        this.lineChartVaData[position].data[4],
        this.lineChartVaData[position].data[5],
        this.lineChartVaData[position].data[6],
        this.lineChartVaData[position].data[7],
        this.lineChartVaData[position].data[8],
        this.lineChartVaData[position].data[9],
        this.lineChartVaData[position].data[10],
      ]
      this.lineChartVaData[position].data[9] = value
    } else {
      this.lineChartVaData[position].data.push(value)
    }
  }
  setLineChartThdiData(position, value)
  {
    if (this.lineChartThdiData[position].data.length == 10) {
      // @ts-ignore
      this.lineChartThdiData[position].data = [
        this.lineChartThdiData[position].data[1],
        this.lineChartThdiData[position].data[2],
        this.lineChartThdiData[position].data[3],
        this.lineChartThdiData[position].data[4],
        this.lineChartThdiData[position].data[5],
        this.lineChartThdiData[position].data[6],
        this.lineChartThdiData[position].data[7],
        this.lineChartThdiData[position].data[8],
        this.lineChartThdiData[position].data[9],
        this.lineChartThdiData[position].data[10],
      ]
      this.lineChartThdiData[position].data[9] = value
    } else {
      this.lineChartThdiData[position].data.push(value)
    }
  }
  setLineChartThdvData(position, value)
  {
    if (this.lineChartThdvData[position].data.length == 10) {
      // @ts-ignore
      this.lineChartThdvData[position].data = [
        this.lineChartThdvData[position].data[1],
        this.lineChartThdvData[position].data[2],
        this.lineChartThdvData[position].data[3],
        this.lineChartThdvData[position].data[4],
        this.lineChartThdvData[position].data[5],
        this.lineChartThdvData[position].data[6],
        this.lineChartThdvData[position].data[7],
        this.lineChartThdvData[position].data[8],
        this.lineChartThdvData[position].data[9],
        this.lineChartThdvData[position].data[10],
      ]
      this.lineChartThdvData[position].data[9] = value
    } else {
      this.lineChartThdvData[position].data.push(value)
    }
  }

}
