import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesInputUploadComponent } from './images-input-upload.component';

describe('ImagesInputUploadComponent', () => {
  let component: ImagesInputUploadComponent;
  let fixture: ComponentFixture<ImagesInputUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesInputUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesInputUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
