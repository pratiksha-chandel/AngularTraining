import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitableComponent } from './vegitable.component';

describe('VegitableComponent', () => {
  let component: VegitableComponent;
  let fixture: ComponentFixture<VegitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
