import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOfDishComponent } from './part-of-dish.component';

describe('PartOfDishComponent', () => {
  let component: PartOfDishComponent;
  let fixture: ComponentFixture<PartOfDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOfDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOfDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
