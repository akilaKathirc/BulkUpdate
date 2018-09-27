import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoDDLComponent } from './kendo-ddl.component';

describe('KendoDDLComponent', () => {
  let component: KendoDDLComponent;
  let fixture: ComponentFixture<KendoDDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoDDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoDDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
