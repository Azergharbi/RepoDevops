import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCComponent } from './course-c.component';

describe('CourseCComponent', () => {
  let component: CourseCComponent;
  let fixture: ComponentFixture<CourseCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
