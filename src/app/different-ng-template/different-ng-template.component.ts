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
  public filterCriteria: string;
  public gridData: any[] = sampleCustomers;

  public columns: string[] = ['CompanyName', 'ContactName', 'ContactTitle'];
  public operatorColumns: string[] = ['Starts with', 'Ends with', 'Contains'];

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

    this.filterCriteria = localStorage.getItem("filterCriteria");
    this.field = localStorage.getItem("ddlColumnValue");
    this.txtFind = this.txtFind.toLowerCase()
this.gridData.map(function(row) {
  row = JSON.parse(row),
  console.log(JSON.stringify(row[this.field]));
  // if (row[this.field].toLowerCase().indexOf(this.txtFind) > -1) {
  //   var totalItemLength = row[this.field].length;
  //   console.log(this.filterCriteria);
  //   switch (this.filterCriteria) {
  //     case "Contains": {
  //       row[this.field] = this.updateArray(row[this.field], this.txtReplace, this.txtFind);
  //       break;
  //     }
  //     case "Starts with": {
  //       if (row[this.field].indexOf(this.txtFind) === 0) {
  //         row[this.field] = this.updateArray(row[this.field], this.txtReplace, this.txtFind);
  //       }
  //       break;
  //     }
  //     case "Ends with": {
  //       if ((totalItemLength - row[this.field].indexOf(this.txtFind)) === this.txtFind.length) {
  //         row[this.field] = this.updateArray(row[this.field], this.txtReplace, this.txtFind);
  //       }
  //       break;
  //     }
  //   }
  // }
});
    
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


  public onOperatorChange(value: any): void {
    localStorage.setItem("filterCriteria", value);
    console.log('Filter Criteria  : ' + value);
    this.filterCriteria = value;
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
