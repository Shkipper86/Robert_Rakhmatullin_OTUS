import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedPgComponent } from './added-pg.component';

describe('AddedPgComponent', () => {
  let component: AddedPgComponent;
  let fixture: ComponentFixture<AddedPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
