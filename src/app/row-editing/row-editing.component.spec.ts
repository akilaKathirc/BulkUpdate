import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowEditingComponent } from './row-editing.component';

describe('RowEditingComponent', () => {
  let component: RowEditingComponent;
  let fixture: ComponentFixture<RowEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
