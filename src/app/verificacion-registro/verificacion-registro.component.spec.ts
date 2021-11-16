import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionRegistroComponent } from './verificacion-registro.component';

describe('VerificacionRegistroComponent', () => {
  let component: VerificacionRegistroComponent;
  let fixture: ComponentFixture<VerificacionRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificacionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
