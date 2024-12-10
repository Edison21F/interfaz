import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Db4Component } from './db4.component';

describe('Db4Component', () => {
  let component: Db4Component;
  let fixture: ComponentFixture<Db4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Db4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Db4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
