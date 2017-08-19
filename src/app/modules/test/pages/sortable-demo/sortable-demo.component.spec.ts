import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableDemoComponent } from './sortable-demo.component';

describe('SortableDemoComponent', () => {
  let component: SortableDemoComponent;
  let fixture: ComponentFixture<SortableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
