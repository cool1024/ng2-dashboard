import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingComponent } from './menu-setting.component';

describe('MenuSettingComponent', () => {
  let component: MenuSettingComponent;
  let fixture: ComponentFixture<MenuSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
