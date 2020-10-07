import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPgComponent } from './settings-pg.component';

describe('SettingsPgComponent', () => {
  let component: SettingsPgComponent;
  let fixture: ComponentFixture<SettingsPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
