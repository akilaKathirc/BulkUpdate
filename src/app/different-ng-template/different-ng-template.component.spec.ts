import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentNgTemplateComponent } from './different-ng-template.component';

describe('DifferentNgTemplateComponent', () => {
  let component: DifferentNgTemplateComponent;
  let fixture: ComponentFixture<DifferentNgTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentNgTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
