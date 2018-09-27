import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-comp',
  templateUrl: './reactive-comp.component.html',
  styleUrls: ['./reactive-comp.component.css']
})
export class ReactiveCompComponent implements OnInit {
  public source: Array<string> = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];
  public data: Array<string>;
  userList: user[] = [];
  form: FormGroup;
  constructor() {
    this.data = this.source.slice();
  }

  AddUser(){
  //  console.log(this.form.value);
  this.userList.push(this.form.value);
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required
        ,Validators.pattern(/^[a-z0-9_-]{8,15}$/)]),
      contact: new FormControl('',[Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.minLength(10),Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email])
    });
  }

  handleFilter(value) {
    this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
