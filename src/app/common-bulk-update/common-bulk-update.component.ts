import { Component, OnInit , VERSION} from '@angular/core';

@Component({
  selector: 'app-common-bulk-update',
  templateUrl: './common-bulk-update.component.html',
  styleUrls: ['./common-bulk-update.component.css']
})
export class CommonBulkUpdateComponent implements OnInit {

  public listItems: Array<string> = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  

  ngOnInit() {
  }
  name:string;
  itemArray;
  newItem;

  constructor() {
    this.name = `Angular! v${VERSION.full}`
    this.itemArray = {
        "totalItems": 2,
        "items": [
          {
            "id": 1,
            "name": "foo"
      
          },
          {
            "id": 2,
            "name": "bar"
          },
        ]
      };
      
      this.newItem = {
        "id": 2,
        "name": "foo bar new item"
      };
  }
  
  showUpdatedItem(newItem){
    let updateItem = this.itemArray.items.find(this.findIndexToUpdate, newItem.id);
    
    let index = this.itemArray.items.indexOf(updateItem);
    
    // console.log(JSON.stringify(updateItem));
    // console.log(JSON.stringify(index));
    // console.log(JSON.stringify(this.itemArray));
    
    this.itemArray.items[index] = newItem;
    
  }
  
  findIndexToUpdate(newItem) { 
        return newItem.id === this;
  }
}
