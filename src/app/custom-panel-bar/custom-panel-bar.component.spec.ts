import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPanelBarComponent } from './custom-panel-bar.component';

describe('CustomPanelBarComponent', () => {
  let component: CustomPanelBarComponent;
  let fixture: ComponentFixture<CustomPanelBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPanelBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPanelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
