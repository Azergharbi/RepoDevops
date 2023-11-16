import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluniComponent } from './alluni.component';

describe('AlluniComponent', () => {
  let component: AlluniComponent;
  let fixture: ComponentFixture<AlluniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlluniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlluniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
