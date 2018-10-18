import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbulkupdateComponent } from './newbulkupdate.component';

describe('NewbulkupdateComponent', () => {
  let component: NewbulkupdateComponent;
  let fixture: ComponentFixture<NewbulkupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbulkupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbulkupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
