import { ModuleWithProviders } from '@angular/core'
import { Routes,RouterModule} from '@angular/router'
import { InllineEditingComponent } from './inlline-editing/inlline-editing.component';
import { KendoDDLComponent } from './kendo-ddl/kendo-ddl.component';
import { HideColumnComponent } from './hide-column/hide-column.component';
import {AngularAimationsComponent} from './angular-aimations/angular-aimations.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { DifferentNgTemplateComponent } from './different-ng-template/different-ng-template.component';
import { KendoPanelComponent } from './kendo-panel/kendo-panel.component';
import { CustomPanelBarComponent } from './custom-panel-bar/custom-panel-bar.component';
import { RowEditingComponent } from './row-editing/row-editing.component';
import { CellEditingComponent } from './cell-editing/cell-editing.component';
import { KendoGridReactiveFormsComponent } from './kendo-grid-reactive-forms/kendo-grid-reactive-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveCompComponent } from './reactive-comp/reactive-comp.component';


const routes: Routes = [{
    path: 'InllineEditing',
    component: InllineEditingComponent,
    data: {title: "Inlline Editing"},
  },
  {
    path: 'ReactiveFormValidation',
    component: ReactiveCompComponent,
    data: {title: "Inlline Editing"},
  },
  {
    path: 'ReactiveForms',
    component: ReactiveFormsComponent,
    data: {title: "Reactive Forms"},
  },
  {
    path: 'KendoGridReactiveForms',
    component: KendoGridReactiveFormsComponent,
    data: {title: "KendoGrid ReactiveForms"},
  },
  {
    path: 'RowEditing',
    component: RowEditingComponent,
    data: {title: "Row Editing"},
  },
  {
    path: 'CellEditing',
    component: CellEditingComponent,
    data: {title: "Cell Editing"},
  },
  {
    path: 'SameTemplate',
    component: DifferentNgTemplateComponent,
    data: {title: "Same Template"},
  },
  {
    path: 'KendoPanel',
    component: KendoPanelComponent,
    data: {title: "Kendo Panel"},
  },
  {
    path: 'customKendoPanel',
    component: CustomPanelBarComponent,
    data: {title: "Custom Panel"},
  }, 
  {
    path: 'HideColumn',
    component: HideColumnComponent,
    data: {title: "Hide Column"}
  }, 
  {
    path: 'KendoDDL',
    component: KendoDDLComponent,
    data: {title: "Kendo DDL"}
  }, 
  {
    path: 'AngularAimations',
    component: AngularAimationsComponent,
    data: {title: "Angular Aimations"}
  },
  {path: 'home', component: HomeComponent},
  {path: 'second', component: SecondComponent, children: [
      {path: 'firstchildcomp', component: FirstchildComponent, outlet:'firstchild'},
      {path: ':id', component: SecondchildComponent, outlet:'secondchild'}
  ]},

];


  export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash:true });