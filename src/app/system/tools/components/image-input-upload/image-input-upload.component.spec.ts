import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInputUploadComponent } from './image-input-upload.component';

describe('ImageInputUploadComponent', () => {
  let component: ImageInputUploadComponent;
  let fixture: ComponentFixture<ImageInputUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageInputUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageInputUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
