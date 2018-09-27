import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style,state } from '@angular/animations'

@Component({
  selector: 'app-angular-aimations',
  templateUrl: './angular-aimations.component.html',
  styleUrls: ['./angular-aimations.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ]),
      trigger('heroState', [
      state('inactive', style({
        backgroundColor: 'red',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: 'pink',
        transform: 'scale(1.3)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AngularAimationsComponent implements OnInit {
  visible:boolean=true;
  public state = 'inactive';
  public  heroes= [{name:"Akila",state:"active"},{name:"chengi",state:"inactive"},{name:"karthi",state:"inactive"}
          ,{name:"fun",state:"inactive"},{name:"hero",state:"active"}];

  constructor() { }

  public toggleState() {
   // console.log("toggle clicked");
    this.state = this.state === 'active' ? 'inactive' : 'active';
    this.visible = this.visible === true  ? false : true;
  }
  ngOnInit() {
    this.visible=true;
  }

}

