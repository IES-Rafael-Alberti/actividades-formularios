import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaComponent } from './factura.component';

describe('FacturaComponent', () => {
  let component: FacturaComponent;
  let fixture: ComponentFixture<FacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
