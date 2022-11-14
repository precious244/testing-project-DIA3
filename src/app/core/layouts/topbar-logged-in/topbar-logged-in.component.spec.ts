import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarLoggedInComponent } from './topbar-logged-in.component';

describe('TopbarLoggedInComponent', () => {
  let component: TopbarLoggedInComponent;
  let fixture: ComponentFixture<TopbarLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopbarLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
