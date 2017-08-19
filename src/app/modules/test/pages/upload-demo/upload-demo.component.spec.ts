import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDemoComponent } from './upload-demo.component';

describe('UploadDemoComponent', () => {
  let component: UploadDemoComponent;
  let fixture: ComponentFixture<UploadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
