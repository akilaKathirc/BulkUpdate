import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBulkUpdateComponent } from './common-bulk-update.component';

describe('CommonBulkUpdateComponent', () => {
  let component: CommonBulkUpdateComponent;
  let fixture: ComponentFixture<CommonBulkUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonBulkUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBulkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
