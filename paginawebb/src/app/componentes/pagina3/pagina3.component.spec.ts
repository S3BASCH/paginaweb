/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pagina3Component } from './pagina3.component';

describe('Pagina3Component', () => {
  let component: Pagina3Component;
  let fixture: ComponentFixture<Pagina3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
