import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTestCasesComponent } from './example-test-cases.component';

describe('ExampleTestCasesComponent', () => {
  let component: ExampleTestCasesComponent;
  let fixture: ComponentFixture<ExampleTestCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTestCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
