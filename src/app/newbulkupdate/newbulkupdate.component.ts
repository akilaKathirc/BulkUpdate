
import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


import { RowArgs, SelectableSettings } from '@progress/kendo-angular-grid';

import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';

import { Subscription } from 'rxjs/Subscription';


// service



@Component({
 selector: 'app-bulk-update',
 templateUrl: './bulk-update.component.html',
 styleUrls: ['./bulk-update.component.scss']

})

export class BulkUpdateComponent implements OnInit {
 bulkUpdateControlForm: FormGroup;
 autoCompleteInChange;
 autoCompleteComponentPart;
 description: any;
 public bulkUpdatePickRuleData: any[] = [];
 public selectedValue: string;
 public filterCriteria: string;
 public txtFind: string;
 public txtReplace: string;
 public inChange: Array<string>;
 public componentPart: Array<string>;
 public checkedData;
 public mySelection: number[] = [];
 public selectableSettings: SelectableSettings;
 public subscribe: Subscription;
 public isInteger: Boolean = false;

 public isddlAppend: Boolean = false;
 public isAppendCtrl: Boolean = false;
 public isPositionCtrl: Boolean = false;
 public isReplaceLbl: Boolean = true;
 public isdivReplace: Boolean = true;
 public isValueLbl: Boolean = false;
 public isControlTypeAS = false;
 public position: string;

 @Input()
 columnListItems: Array<{ text: string, value: string, controlsType: string }>;

 public positionListItems: Array<string> = ['at the beginning', 'at the end', 'before', 'after'];
 public conditionListItems: Array<string> = ['Equals', 'Does not equal', 'Contains', 'Start with', 'Ends with', 'Append', 'Remove'];

 @ViewChild('autocomplete') public autocomplete: AutoCompleteComponent;

 constructor() {
 }

 public mySelectionKey(context: RowArgs): string {
   return context.dataItem.rowID;
 }

 public onSelectedKeysChange(e) {
   this.checkedData = e;
 }

 ngOnInit() {
   this.bulkUpdateControlForm = new FormGroup({
     'txtFind': new FormControl(''),
     'txtReplace': new FormControl(''),
     'txtReplaceCP': new FormControl('')
   });

 }
 // Using grid datasource to find and replace value given in text box
 public findAndReplace() {
   this.txtFind = this.bulkUpdateControlForm.get('txtFind').value;
   this.txtReplace = this.bulkUpdateControlForm.get('txtReplace').value;
   if (this.bulkUpdateControlForm.get('txtReplaceCP').value !== '') {
     this.txtReplace = this.bulkUpdateControlForm.get('txtReplaceCP').value;
   }
   for (let i = 0; i < this.bulkUpdatePickRuleData.length; i++) {
     if (this.checkedData !== undefined) {
       if (this.checkedData.includes(i)) {
         if ((this.position !== undefined && this.position === 'at the beginning')
           || this.filterCriteria === 'Does not equal'
           || (this.position !== undefined && this.position === 'at the end')) {
             console.log('first');
           switch (this.filterCriteria) {
             case 'Does not equal': {
               if (this.bulkUpdatePickRuleData[i][this.selectedValue] !== this.txtFind) {
                 if (this.isInteger === true) {
                   this.bulkUpdatePickRuleData[i][this.selectedValue] = parseInt(this.txtReplace, 10);
                  
                   this.isInteger = false;
                 } else {
                   this.bulkUpdatePickRuleData[i][this.selectedValue] = this.txtReplace;
                  
                 }
               }
               break;
             }
             case 'Append': {
               switch (this.position) {
                 case 'at the beginning':
                   if (this.isInteger === true) {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] =
                       parseInt(this.txtReplace + this.bulkUpdatePickRuleData[i][this.selectedValue], 10);
                    
                     this.isInteger = false;
                   } else {
                     this.bulkUpdatePickRuleData[i][this.selectedValue]
                       = this.txtReplace + this.bulkUpdatePickRuleData[i][this.selectedValue];
                    
                   }
                   break;
                 case 'at the end':
                   if (this.isInteger === true) {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] =
                       parseInt(this.bulkUpdatePickRuleData[i][this.selectedValue] + this.txtReplace, 10);
                    
                     this.isInteger = false;
                   } else {
                     this.bulkUpdatePickRuleData[i][this.selectedValue]
                       = this.bulkUpdatePickRuleData[i][this.selectedValue] + this.txtReplace;
                    
                   }
                   break;
               }
               break;
             }
             case 'Remove': {
               if (this.bulkUpdatePickRuleData[i][this.selectedValue] !== null && this.txtFind !== '') {
                 const totalItemLength = this.bulkUpdatePickRuleData[i][this.selectedValue].length;
                 const _dataIndex = this.bulkUpdatePickRuleData[i][this.selectedValue].indexOf(this.txtFind);
                 const afterPos = this.txtFind.length;
                 switch (this.position) {
                   case 'at the beginning':
                     if (_dataIndex === 0) {
                      if (this.isInteger === true) {
                        this.bulkUpdatePickRuleData[i][this.selectedValue] =
                          parseInt(this.bulkUpdatePickRuleData[i][this.selectedValue].slice(this.txtFind.length - 1,totalItemLength - 1), 10);
                       
                        this.isInteger = false;
                      } else {
                        this.bulkUpdatePickRuleData[i][this.selectedValue] =
                        this.updateDataSource(this.bulkUpdatePickRuleData[i][this.selectedValue],
                          '', this.txtFind);
                     
                      }
                      
                     }
                     break;

                   case 'at the end':
                     if (_dataIndex === (totalItemLength - afterPos)) {
                      if (this.isInteger === true) {
                        this.bulkUpdatePickRuleData[i][this.selectedValue] =
                          parseInt(this.bulkUpdatePickRuleData[i][this.selectedValue].slice(0,_dataIndex), 10);
                       
                        this.isInteger = false;
                      } else {
                        
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                       this.updateDataSource(this.bulkUpdatePickRuleData[i][this.selectedValue], '', this.txtFind);
                    
                      }
                     }
                     break;
                 }
               }
             }
           }
         }
         if (this.bulkUpdatePickRuleData[i][this.selectedValue] !== null && this.txtFind !== '') {
           if (this.bulkUpdatePickRuleData[i][this.selectedValue].indexOf(this.txtFind) > -1) {
             const totalItemLength = this.bulkUpdatePickRuleData[i][this.selectedValue].length;
             const _dataIndex = this.bulkUpdatePickRuleData[i][this.selectedValue].indexOf(this.txtFind);
             const afterPos = _dataIndex + this.txtFind.length;
             if (Number.isInteger(this.bulkUpdatePickRuleData[i][this.selectedValue])) {
               this.isInteger = true;
               this.bulkUpdatePickRuleData[i][this.selectedValue] = this.bulkUpdatePickRuleData[i][this.selectedValue].toString();
               this.txtFind = this.txtFind.toString();
               this.txtReplace = this.txtReplace.toString();
             }
              //  console.log('second');
             switch (this.filterCriteria) {
               case 'Contains': {
                 if (this.isInteger === true) {
                   this.bulkUpdatePickRuleData[i][this.selectedValue] = parseInt(this.txtReplace, 10);
                  
                   this.isInteger = false;
                 } else {
                   this.bulkUpdatePickRuleData[i][this.selectedValue] = this.txtReplace;
                  
                 }
                 break;
               }

               case 'Start with': {
                 if (this.bulkUpdatePickRuleData[i][this.selectedValue].indexOf(this.txtFind) === 0) {
                   if (this.isInteger === true) {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] = parseInt(this.txtReplace, 10);
                    
                     this.isInteger = false;
                   } else {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] = this.txtReplace;
                    
                   }
                 }
                 break;
               }

               case 'Ends with': {
                 if ((totalItemLength - this.bulkUpdatePickRuleData[i][this.selectedValue].indexOf(this.txtFind))
                   === this.txtFind.length) {
                   if (this.isInteger === true) {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] = parseInt(this.txtReplace, 10);
                    
                     this.isInteger = false;
                   } else {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] = this.txtReplace;
                    
                   }
                 }
                 break;
               }

               case 'Equals': {
                 if (this.bulkUpdatePickRuleData[i][this.selectedValue] === this.txtFind) {
                   if (this.isInteger === true) {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] = parseInt(this.txtReplace, 10);
                    
                     this.isInteger = false;
                   } else {
                     this.bulkUpdatePickRuleData[i][this.selectedValue] = this.txtReplace;
                    
                   }
                 }
                 break;
               }
               case 'Append': {
                 switch (this.position) {
                   case 'before':
                     if (this.isInteger === true) {
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                         parseInt([this.bulkUpdatePickRuleData[i][this.selectedValue].slice(0, _dataIndex), this.txtReplace,
                         this.bulkUpdatePickRuleData[i][this.selectedValue].slice(_dataIndex)].join(''), 10);
                      
                       this.isInteger = false;
                     } else {
                       this.bulkUpdatePickRuleData[i][this.selectedValue]
                         = [this.bulkUpdatePickRuleData[i][this.selectedValue].slice(0, _dataIndex), this.txtReplace,
                         this.bulkUpdatePickRuleData[i][this.selectedValue].slice(_dataIndex)].join('');
                      
                     }
                     break;

                   case 'after':
                     if (this.isInteger === true) {
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                         parseInt([this.bulkUpdatePickRuleData[i][this.selectedValue].slice(0, afterPos), this.txtReplace,
                         this.bulkUpdatePickRuleData[i][this.selectedValue].slice(afterPos)].join(''), 10);
                      
                       this.isInteger = false;
                     } else {
                       this.bulkUpdatePickRuleData[i][this.selectedValue]
                         = [this.bulkUpdatePickRuleData[i][this.selectedValue].slice(0, afterPos), this.txtReplace,
                         this.bulkUpdatePickRuleData[i][this.selectedValue].slice(afterPos)].join('');
                      
                     }
                     break;

                 }
                 break;
               }

               case 'Remove': {
                 switch (this.position) {
                   case 'before':
                     if (this.isInteger === true) {
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                         parseInt(this.bulkUpdatePickRuleData[i][this.selectedValue].substring(_dataIndex), 10);
                      
                       this.isInteger = false;
                     } else {
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                         this.bulkUpdatePickRuleData[i][this.selectedValue].substring(_dataIndex);
                      
                     }
                     break;

                   case 'after':
                     if (this.isInteger === true) {
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                         parseInt(this.bulkUpdatePickRuleData[i][this.selectedValue].substring(0, afterPos), 10);
                      
                       this.isInteger = false;
                     } else {
                       this.bulkUpdatePickRuleData[i][this.selectedValue] =
                         this.bulkUpdatePickRuleData[i][this.selectedValue].substring(0, afterPos);
                      
                     }
                     break;
                 }
               }
             }
           }
         }
       }
     }
   }
   // WebApi Call need to be carried out here to update
   // console.log(JSON.stringify(this.bulkUpdatePickRuleData));
 }

 public insert(main_string, ins_string, pos) {
   // if (typeof (pos) === 'undefined') {
   //   pos = 0;
   // }
   if (typeof (ins_string) === 'undefined') {
     ins_string = '';
   }
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
 }


 public updateDataSource(colvalue: string, replacetxt: string, find: string): string {
   if (this.isInteger === true && isNaN(parseInt(replacetxt, 10))) {
     return colvalue;
   } else {
     return colvalue.replace(find, replacetxt);
   }
 }


 public onOperatorChange(value: any): void {

   if (value === 'Remove' || value === 'Append') {
     this.isPositionCtrl = true;
     this.isReplaceLbl = false;
     if (value === 'Remove') {
       this.isdivReplace = false;
     } else {
       this.isdivReplace = true;
     }
     if (value === 'Append') {
       this.isddlAppend = true;
       this.isValueLbl = true;
     } else {
       this.isddlAppend = false;
       this.isValueLbl = false;
     }
   } else {
     this.isdivReplace = true;
     this.isReplaceLbl = true;
     this.isPositionCtrl = false;
     this.isAppendCtrl = false;
   }
   this.filterCriteria = value;
 }

 public onPositionChange(value: any): void {
   this.position = value;
   if ((value === 'before' || value === 'after') && this.isddlAppend === true) {
     this.isAppendCtrl = true;
   } else {
     this.isAppendCtrl = false;
   }

   if ((value === 'at the beginning' || value === 'at the end') && this.isddlAppend === true) {
     this.isValueLbl = true;
   } else {
     this.isValueLbl = false;
   }
 }

 public onChange(e: any): void {
   this.bulkUpdateControlForm.get('txtReplaceCP').setValue('');
   this.selectedValue = e.value;
   if (e.controlsType === 'AutoSuggest') {
     this.isControlTypeAS = true;
   } else {
     this.isControlTypeAS = false;
   }
 }

}