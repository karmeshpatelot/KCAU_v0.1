import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LicComponent } from './lic.component';

describe('LicComponent', () => {
  let component: LicComponent;
  let fixture: ComponentFixture<LicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
