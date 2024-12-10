import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Db1Component } from './db1.component';

describe('Db1Component', () => {
  let component: Db1Component;
  let fixture: ComponentFixture<Db1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Db1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Db1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
