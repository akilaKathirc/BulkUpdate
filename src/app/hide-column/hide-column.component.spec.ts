import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideColumnComponent } from './hide-column.component';

describe('HideColumnComponent', () => {
  let component: HideColumnComponent;
  let fixture: ComponentFixture<HideColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
