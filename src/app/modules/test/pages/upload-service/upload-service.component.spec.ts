import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadServiceComponent } from './upload-service.component';

describe('UploadServiceComponent', () => {
  let component: UploadServiceComponent;
  let fixture: ComponentFixture<UploadServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
