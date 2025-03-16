import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTourPackageComponent } from './dashboard-tour-package.component';

describe('DashboardTourPackageComponent', () => {
  let component: DashboardTourPackageComponent;
  let fixture: ComponentFixture<DashboardTourPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTourPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTourPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
