import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAimationsComponent } from './angular-aimations.component';

describe('AngularAimationsComponent', () => {
  let component: AngularAimationsComponent;
  let fixture: ComponentFixture<AngularAimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
