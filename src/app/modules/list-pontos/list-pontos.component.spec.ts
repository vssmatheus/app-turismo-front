import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPontosComponent } from './list-pontos.component';

describe('ListPontosComponent', () => {
  let component: ListPontosComponent;
  let fixture: ComponentFixture<ListPontosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPontosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPontosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
