import { PopupAnchorDirective } from './Shared/popup.anchor-target.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsBindingDirective } from './products-binding.directive';
import { ProductsService } from './northwind.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipDirective } from './tooltip.directive';
import { InllineEditingComponent } from './inlline-editing/inlline-editing.component';
import { CustomEditingComponent } from './custom-editing/custom-editing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { KendoDDLComponent } from './kendo-ddl/kendo-ddl.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {TitleService} from './title.service';
import 'hammerjs';
import { HideColumnComponent } from './hide-column/hide-column.component';
import { AngularAimationsComponent } from './angular-aimations/angular-aimations.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { DropdownlistFilterComponent } from './dropdownlist-filter/dropdownlist-filter.component';
import { FilterService } from '@progress/kendo-angular-grid';
import { DifferentNgTemplateComponent } from './different-ng-template/different-ng-template.component';
import { ChatComponent } from './chat/chat.component';
import { LayoutAComponent } from './layout-a/layout-a.component';
import { LayoutBComponent } from './layout-b/layout-b.component';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';
import { Routes, RouterModule } from '@angular/router';
import { KendoPanelComponent } from './kendo-panel/kendo-panel.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { routing } from './app.routing';
import { CustomPanelBarComponent } from './custom-panel-bar/custom-panel-bar.component';
import { TestCasesComponent } from './test-cases/test-cases.component';
import { ExampleTestCasesComponent } from './example-test-cases/example-test-cases.component';
import { RowEditingComponent } from './row-editing/row-editing.component';
import { CellEditingComponent } from './cell-editing/cell-editing.component';

import { EditService } from './cell-editing/edit.service';
import { EditService1 } from './kendo-grid-reactive-forms/edit.service';
import { KendoGridReactiveFormsComponent } from './kendo-grid-reactive-forms/kendo-grid-reactive-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveCompComponent } from './reactive-comp/reactive-comp.component';

const routes: Routes = [
  {
      // All routes in the application will share the "app" prefix.
      // --
      // NOTE: This shared prefix is here just to demonstrate that a non-empty ancestor
      // path is not sufficient for getting named-outlets to work. It's a direct-parent
      // segment kind of constraint.
      path: "app",
      children: [
          {
              // CAUTION: In order for the NAMED OUTLET child route to work (chat),
              // its parent segment must contain a non-empty path. As such, we're
              // using "main" for this wrapper component in order to ensure a non-
              // empty value.
              path: "main",
              component: LayoutWrapperComponent,
              children: [
                  {
                      path: "layout-a",
                      component: LayoutAComponent
                  },
                  {
                      path: "layout-b",
                      component: LayoutBComponent
                  },
                  {
                      outlet: "chat", // <--- Named outlet.
                      path: "open",
                      component: ChatComponent
                  }
              ]
          }
      ]
  },
  {
      path: "**",
      redirectTo: "/app/main/layout-a"
  }
];



@NgModule({
  declarations: [
    AppComponent,
    ProductsBindingDirective,
    TooltipDirective,
    InllineEditingComponent,
    CustomEditingComponent,
    PopupAnchorDirective,
    KendoDDLComponent,
    HideColumnComponent,
    AngularAimationsComponent,
    FirstchildComponent,
    HomeComponent,
    SecondComponent,
    SecondchildComponent,
    DropdownlistFilterComponent,
    DifferentNgTemplateComponent,
    ChatComponent,
    LayoutAComponent,
    LayoutBComponent,
    LayoutWrapperComponent,
    KendoPanelComponent,
    CustomPanelBarComponent,
    TestCasesComponent,
    ExampleTestCasesComponent,
    RowEditingComponent,
    CellEditingComponent,
    KendoGridReactiveFormsComponent,
    ReactiveFormsComponent,
    ReactiveCompComponent
  ],  
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
  imports: [
      
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule,DropDownsModule,
    PopupModule,
    routing
//     RouterModule.forRoot(
//       routes,
//       {
//           // Tell the router to use the HashLocationStrategy.
//           useHash: true
//       }
//   )
  ],
  providers: [HttpClient,ProductsService,TitleService,FilterService,EditService,EditService1],
  bootstrap: [AppComponent]
})



export class AppModule { }
