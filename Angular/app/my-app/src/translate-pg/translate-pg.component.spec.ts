import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePgComponent } from './translate-pg.component';

describe('TranslatePgComponent', () => {
  let component: TranslatePgComponent;
  let fixture: ComponentFixture<TranslatePgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslatePgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatePgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
