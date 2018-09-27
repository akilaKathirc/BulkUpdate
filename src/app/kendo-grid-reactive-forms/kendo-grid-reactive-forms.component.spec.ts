import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoGridReactiveFormsComponent } from './kendo-grid-reactive-forms.component';

describe('KendoGridReactiveFormsComponent', () => {
  let component: KendoGridReactiveFormsComponent;
  let fixture: ComponentFixture<KendoGridReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoGridReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoGridReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
