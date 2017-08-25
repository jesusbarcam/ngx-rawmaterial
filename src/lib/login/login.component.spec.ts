import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RAWLoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: RAWLoginComponent;
  let fixture: ComponentFixture<RAWLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RAWLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RAWLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
