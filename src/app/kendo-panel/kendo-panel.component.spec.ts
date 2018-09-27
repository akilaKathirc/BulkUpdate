import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoPanelComponent } from './kendo-panel.component';
import { By } from '@angular/platform-browser';
import {  CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';




describe('KendoPanelComponent', () => {

  let component: KendoPanelComponent;
  let fixture: ComponentFixture<KendoPanelComponent>;
  let addItemDebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoPanelComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('Should handle click on addItem button', () => {
    expect(fixture.debugElement.query(By.css('.cssclass')) === null).toBeTruthy();


    spyOn(component, 'OpenCreatePickRule');
    addItemDebugElement = fixture.debugElement.query(By.css('.cssCreate'));
    addItemDebugElement.nativeElement.click();  //  click on the button
    expect(component.OpenCreatePickRule).toHaveBeenCalled(); 
});
 

it('create button click should call onStateChange method', async(() => {
  spyOn(component, 'onStateChange');

  let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();

  addItemDebugElement = fixture.debugElement.query(By.css('.cssCreate'));
  addItemDebugElement.nativeElement.click(); 
  fixture.whenStable().then(() => {
    expect(component.onStateChange).toHaveBeenCalled();
  })
}));




});
