import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAvanzadoComponent } from './registro-avanzado.component';

describe('RegistroAvanzadoComponent', () => {
  let component: RegistroAvanzadoComponent;
  let fixture: ComponentFixture<RegistroAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAvanzadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAvanzadoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
