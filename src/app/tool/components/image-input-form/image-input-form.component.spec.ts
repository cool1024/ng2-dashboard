import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInputFormComponent } from './image-input-form.component';

describe('ImageInputFormComponent', () => {
  let component: ImageInputFormComponent;
  let fixture: ComponentFixture<ImageInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
