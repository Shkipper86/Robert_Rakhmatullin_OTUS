import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPgComponent } from './go-pg.component';

describe('GoPgComponent', () => {
  let component: GoPgComponent;
  let fixture: ComponentFixture<GoPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
