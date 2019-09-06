import { Component, OnInit } from '@angular/core';
import { Convertion } from '../helpers/Convertion.js';
import { RegisterService } from 'src/app/services/register.service.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private f:RegisterService) { 
    this.load()
    
    // let helper = new Convertion();
    // console.log(helper.getMetering())
  }
  load() {
    this.f.getRegister().
      subscribe(data => {
        console.log(data);

      })
  }

  ngOnInit() {
  }

}
