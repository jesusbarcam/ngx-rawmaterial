import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawInputWrapperComponent } from './raw-input-wrapper.component';



describe('RawInputComponent', () => {
  let component: RawInputWrapperComponent;
  let fixture: ComponentFixture<RawInputWrapperComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawInputWrapperComponent ]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(RawInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should be created', () => {
    expect( component ).toBeTruthy();
  });
});
