import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-ddl',
  templateUrl: './kendo-ddl.component.html',
  styleUrls: ['./kendo-ddl.component.css']
})
export class KendoDDLComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public listItems1: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];

  public listItems: Array<string> = [
    "India",
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia & Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City"
    ];

}
