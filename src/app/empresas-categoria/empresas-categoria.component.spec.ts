import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasCategoriaComponent } from './empresas-categoria.component';

describe('EmpresasCategoriaComponent', () => {
  let component: EmpresasCategoriaComponent;
  let fixture: ComponentFixture<EmpresasCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
