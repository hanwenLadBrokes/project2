import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatmatePreferencePage } from './flatmate-preference.page';

describe('FlatmatePreferencePage', () => {
  let component: FlatmatePreferencePage;
  let fixture: ComponentFixture<FlatmatePreferencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatmatePreferencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatmatePreferencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
