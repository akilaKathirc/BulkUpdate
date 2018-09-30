import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkupdatedesignComponent } from './bulkupdatedesign.component';

describe('BulkupdatedesignComponent', () => {
  let component: BulkupdatedesignComponent;
  let fixture: ComponentFixture<BulkupdatedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkupdatedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkupdatedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
