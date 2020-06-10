// Created by : Pratiksha Chandel
// Date: 9 june 2020
/* Topic Covered : 
                1] Bootstrap Environment,Requirements and setup
                2] Bootstrap Forms And Layout
                3] BootStrap Dashboards                        */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponentsComponent } from './bootstrap-components.component';

describe('BootstrapComponentsComponent', () => {
  let component: BootstrapComponentsComponent;
  let fixture: ComponentFixture<BootstrapComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
