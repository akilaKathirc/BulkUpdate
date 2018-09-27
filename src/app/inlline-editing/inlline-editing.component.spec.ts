import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InllineEditingComponent } from './inlline-editing.component';

describe('InllineEditingComponent', () => {
  let component: InllineEditingComponent;
  let fixture: ComponentFixture<InllineEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InllineEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InllineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
