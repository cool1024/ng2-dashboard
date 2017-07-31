import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrDemoComponent } from './toastr-demo.component';

describe('ToastrDemoComponent', () => {
  let component: ToastrDemoComponent;
  let fixture: ComponentFixture<ToastrDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastrDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
