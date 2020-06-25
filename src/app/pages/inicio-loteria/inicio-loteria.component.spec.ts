import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioLoteriaComponent } from './inicio-loteria.component';

describe('InicioLoteriaComponent', () => {
  let component: InicioLoteriaComponent;
  let fixture: ComponentFixture<InicioLoteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioLoteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioLoteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
