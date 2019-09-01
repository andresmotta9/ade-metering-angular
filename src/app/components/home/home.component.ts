import { Component, OnInit } from '@angular/core';
import myJSON from '../../../data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log(myJSON)
  }

  ngOnInit() {
  }

}
