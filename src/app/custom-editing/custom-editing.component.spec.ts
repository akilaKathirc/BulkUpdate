import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEditingComponent } from './custom-editing.component';

describe('CustomEditingComponent', () => {
  let component: CustomEditingComponent;
  let fixture: ComponentFixture<CustomEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
