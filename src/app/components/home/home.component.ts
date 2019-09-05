import { Component, OnInit } from '@angular/core';
import myJSON from '../../../data.json';
import { Convertion } from '../helpers/Convertion.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  constructor() { 
    let jsonPath = "./data.json"
    let helper = new Convertion();
    console.log(helper.getMetering())
    console.log(myJSON)
  }

  ngOnInit() {
  }

}
