import { Component } from '@angular/core';
import {TitleService} from "./title.service";
import  '../../node_modules/secure-web-storage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  title = 'app';


  constructor(private titleService: TitleService){
    localStorage.setItem("name","Akila");
  }

  ngOnInit(): void {
    this.titleService.init();
  }

}
