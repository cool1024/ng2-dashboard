import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesInputFormComponent } from './images-input-form.component';

describe('ImagesInputFormComponent', () => {
  let component: ImagesInputFormComponent;
  let fixture: ComponentFixture<ImagesInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
