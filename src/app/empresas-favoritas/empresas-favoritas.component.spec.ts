import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasFavoritasComponent } from './empresas-favoritas.component';

describe('EmpresasFavoritasComponent', () => {
  let component: EmpresasFavoritasComponent;
  let fixture: ComponentFixture<EmpresasFavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasFavoritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
