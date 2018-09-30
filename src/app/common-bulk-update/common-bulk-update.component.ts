import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-bulk-update',
  templateUrl: './common-bulk-update.component.html',
  styleUrls: ['./common-bulk-update.component.css']
})
export class CommonBulkUpdateComponent implements OnInit {

  public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  
  constructor() { }

  ngOnInit() {
  }

}
