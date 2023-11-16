import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitieComponent } from './universitie.component';

describe('UniversitieComponent', () => {
  let component: UniversitieComponent;
  let fixture: ComponentFixture<UniversitieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversitieComponent]
    });
    fixture = TestBed.createComponent(UniversitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
