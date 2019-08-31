import { Component, OnInit } from '@angular/core';
import * as readJson from 'read-json-file';
import myJSON from '../../../data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let jsonPath = "./data.json"
    console.log(myJSON)
  }

  ngOnInit() {
  }

}
