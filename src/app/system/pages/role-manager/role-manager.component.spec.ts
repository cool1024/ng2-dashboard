import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleManagerComponent } from './role-manager.component';

describe('RoleManagerComponent', () => {
  let component: RoleManagerComponent;
  let fixture: ComponentFixture<RoleManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
