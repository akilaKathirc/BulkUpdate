import { sampleCustomers } from './../Shared/customers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-different-ng-template',
  templateUrl: './different-ng-template.component.html',
  styleUrls: ['./different-ng-template.component.css']
})
export class DifferentNgTemplateComponent implements OnInit {

  constructor() {
    localStorage.setItem("ddlColumnValue", "");
    this.hiddenColumns.push("CompanyName");
    this.hiddenColumns.push("ContactName");
    this.hiddenColumns.push("ContactTitle");
  }

  ngOnInit() {
  }


  public textField: string;
  public valueField: string;
  public field: string;

  public gridData: any[] = sampleCustomers;

  public columns: string[] = ['CompanyName', 'ContactName', 'ContactTitle'];

  public hiddenColumns: string[] = [];
  public txtFind: string;
  public txtReplace: string;



  public restoreColumns(): void {
    this.hiddenColumns = [];
  }
  public isHidden(columnName: string): boolean {
    return this.hiddenColumns.indexOf(columnName) > -1;
  }

  public findAndReplace() {
    this.field = localStorage.getItem("ddlColumnValue");
    for (var i = 0; i < this.gridData.length; i++) {
      if (this.gridData[i][this.field].indexOf(this.txtFind) > -1) {
        this.gridData[i][this.field] = this.updateArray(this.gridData[i][this.field], this.txtReplace, this.txtFind);
      }
    }
    console.log(JSON.stringify(this.gridData));
  }

  updateArray(colvalue: string, replacetxt: string, find: string): string {
    return colvalue.replace(find, replacetxt);
  }

  public hideColumn(field: string): void {
    const hiddenColumns = this.hiddenColumns;
    if (!this.isHidden(field)) {
      hiddenColumns.push(field);
    } else {
      hiddenColumns.splice(hiddenColumns.indexOf(field), 1);
    }
  }

  public get selectedValue(): any {
    return "ContactName";
  }

  public onChange(value: any): void {
   // console.log('before   :'+JSON.stringify(this.hiddenColumns));
    this.hiddenColumns.push(localStorage.getItem("ddlColumnValue"));


    localStorage.setItem("ddlColumnValue", value);

    for (var i = this.hiddenColumns.length - 1; i >= 0; i--) {
      if (this.hiddenColumns[i] === value) {
        this.hiddenColumns.splice(i, 1);
        break;       //<-- Uncomment  if only the first term has to be removed
      }
    }
    
//console.log('after   :'+JSON.stringify(this.hiddenColumns));
  }

}
