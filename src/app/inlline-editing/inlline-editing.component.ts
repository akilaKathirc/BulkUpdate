import { Component, OnInit, OnDestroy, ViewChild, Renderer2  } from '@angular/core';
import { ProductsService } from '../Shared/products.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddEvent, EditEvent, GridComponent } from '@progress/kendo-angular-grid';
import { groupBy, GroupDescriptor } from '@progress/kendo-data-query';

const createFormGroup = dataItem => new FormGroup({
  'Discontinued': new FormControl(dataItem.Discontinued),
  'ProductID': new FormControl(dataItem.ProductID),
  'ProductName': new FormControl(dataItem.ProductName, Validators.required),
  'UnitPrice': new FormControl(dataItem.UnitPrice),
  'UnitsInStock': new FormControl(dataItem.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')]))
});

const matches = (el, selector) => (el.matches || el.msMatchesSelector).call(el, selector);

@Component({
  selector: 'app-inlline-editing',
  templateUrl: './inlline-editing.component.html',
  styleUrls: ['./inlline-editing.component.css']
})



export class InllineEditingComponent implements OnInit, OnDestroy  {
  @ViewChild(GridComponent)
  private grid: GridComponent;

  public groups: GroupDescriptor[] = [];
  public view: any[];

  public formGroup: FormGroup;

  private editedRowIndex: number;
  private docClickSubscription: any;
  private isNew: boolean;


  constructor(private service: ProductsService, private renderer: Renderer2) { }

  ngOnInit() {
    this.view = this.service.products();
    this.docClickSubscription = this.renderer.listen('document', 'click', this.onDocumentClick.bind(this)); 
  }

  public ngOnDestroy(): void {
    this.docClickSubscription();
}

private onDocumentClick(e: any): void {
  if (this.formGroup && this.formGroup.valid &&
      !matches(e.target, '#productsGrid tbody *, #productsGrid .k-grid-toolbar .k-button')) {
      this.saveCurrent();
  }
}

private saveCurrent(): void {
  if (this.formGroup) {
    console.log(JSON.stringify(this.formGroup.value));
      this.service.save(this.formGroup.value, this.isNew);
      this.closeEditor();
  }
}

private closeEditor(): void {
  this.grid.closeRow(this.editedRowIndex);

  this.isNew = false;
  this.editedRowIndex = undefined;
  this.formGroup = undefined;
}

public cellClickHandler({ isEdited, dataItem, rowIndex }): void {
  if (isEdited || (this.formGroup && !this.formGroup.valid)) {
      return;
  }

  this.saveCurrent();
  //console.log(JSON.stringify(dataItem));
  this.formGroup = createFormGroup(dataItem);
  this.editedRowIndex = rowIndex;

  this.grid.editRow(rowIndex, this.formGroup);
}

public cancelHandler(): void {
  this.closeEditor();
}

public groupChange(groups: GroupDescriptor[]): void {
  console.log('groupChange  '+JSON.stringify(groups));
  this.groups = groups;
  this.view = this.service.products();//groupBy(this.service.products(), this.groups);
}


public addHandler(): void {
  this.closeEditor();

  this.formGroup = createFormGroup({
      'Discontinued': false,
      'ProductName': '',
      'UnitPrice': 0,
      'UnitsInStock': ''
  });
  this.isNew = true;

  this.grid.addRow(this.formGroup);
}

}
