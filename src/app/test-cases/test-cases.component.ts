import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-cases',
  templateUrl: './test-cases.component.html',
  styleUrls: ['./test-cases.component.css']
})
export class TestCasesComponent implements OnInit {

  showModal: boolean = false;
  // Languages imported from Pastebin class
  languages: string[] ;

  constructor() { }

  ngOnInit() {
  }

  public createPaste():void {
    this.showModal = true;
  }
}
