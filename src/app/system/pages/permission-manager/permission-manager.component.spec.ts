import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionManagerComponent } from './permission-manager.component';

describe('PermissionManagerComponent', () => {
  let component: PermissionManagerComponent;
  let fixture: ComponentFixture<PermissionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
