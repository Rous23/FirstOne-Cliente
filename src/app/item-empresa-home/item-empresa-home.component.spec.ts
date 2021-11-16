import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEmpresaHomeComponent } from './item-empresa-home.component';

describe('ItemEmpresaHomeComponent', () => {
  let component: ItemEmpresaHomeComponent;
  let fixture: ComponentFixture<ItemEmpresaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEmpresaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEmpresaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
