import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Db5Component } from './db5.component';

describe('Db5Component', () => {
  let component: Db5Component;
  let fixture: ComponentFixture<Db5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Db5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Db5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
