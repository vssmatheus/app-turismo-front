import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPontoComponent } from './novo-ponto.component';

describe('NovoPontoComponent', () => {
  let component: NovoPontoComponent;
  let fixture: ComponentFixture<NovoPontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoPontoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
