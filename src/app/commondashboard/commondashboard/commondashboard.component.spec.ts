import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDashboardComponent } from './commondashboard.component';

describe('DashboardComponent', () => {
  let component: CommonDashboardComponent;
  let fixture: ComponentFixture<CommonDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
