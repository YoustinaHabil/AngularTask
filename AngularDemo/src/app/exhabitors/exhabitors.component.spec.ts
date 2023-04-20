import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhabitorsComponent } from './exhabitors.component';

describe('ExhabitorsComponent', () => {
  let component: ExhabitorsComponent;
  let fixture: ComponentFixture<ExhabitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhabitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhabitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
