import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasesComponent } from './test-cases.component';
import { By } from '@angular/platform-browser';

describe('TestCasesComponent', () => {
  let component: TestCasesComponent;
  let fixture: ComponentFixture<TestCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display the `create Paste` button', () => {
    //There should a create button in view
   //  expect(element.innerText).toContain("create Paste");
 });

  it('should not display the modal unless the button is clicked', () => {
   
    //source-model is an id for the modal. It shouldn't show up unless create button is clicked
    // expect(element.innerHTML).not.toContain("source-modal");
   
    //Component's showModal property should be false at the moment
     expect(component.showModal).toBeFalsy("Show modal should be initially false");
  })
   
  it('should display the modal when `create Paste` is clicked',() => {
     
     let createPasteButton = fixture.debugElement.query(By.css("button"));
     //create a spy on the createPaste  method
     spyOn(component,"createPaste").and.callThrough();
      
     //triggerEventHandler simulates a click event on the button object
     createPasteButton.triggerEventHandler('click',null);
      
     //spy checks whether the method was called
     expect(component.createPaste).toHaveBeenCalled();
     fixture.detectChanges();
     expect(component.showModal).toBeTruthy("showModal should now be true");
    // expect(element.innerHTML).toContain("source-modal");
  })  


});
