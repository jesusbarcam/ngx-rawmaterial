import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashScrollComponent } from './splash-scroll.component';

describe('SplashScrollComponent', () => {
  let component: SplashScrollComponent;
  let fixture: ComponentFixture<SplashScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
