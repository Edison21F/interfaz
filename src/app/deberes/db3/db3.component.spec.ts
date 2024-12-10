import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Db3Component } from './db3.component';

describe('Db3Component', () => {
  let component: Db3Component;
  let fixture: ComponentFixture<Db3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Db3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Db3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
