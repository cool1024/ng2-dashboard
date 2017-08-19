import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDemoComponent } from './charts-demo.component';

describe('ChartsDemoComponent', () => {
  let component: ChartsDemoComponent;
  let fixture: ComponentFixture<ChartsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
