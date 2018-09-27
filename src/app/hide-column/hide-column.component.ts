import { sampleCustomers } from './../Shared/customers';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hide-column',
  templateUrl: './hide-column.component.html',
  styleUrls: ['./hide-column.component.css']
})
export class HideColumnComponent implements OnInit {

  constructor() {
    this.hiddenColumns.push("ContactName_txt");
  }

  ngOnInit() {
  }


  public textField: string;
  public valueField: string;
  public field: string;

  public gridData: any[] = sampleCustomers;

  public columns: string[] = [
    'CompanyName', 'ContactName', 'ContactTitle', 'ContactName_lbl', 'ContactName_txt'
  ];

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
        console.log(this.gridData[i][this.field]);
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
   



     localStorage.setItem("ddlColumnValue", value);
     this.hiddenColumns = [];
     this.hiddenColumns.push(value);
  }

}
