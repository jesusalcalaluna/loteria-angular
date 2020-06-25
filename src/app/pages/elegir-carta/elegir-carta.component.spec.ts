import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirCartaComponent } from './elegir-carta.component';

describe('ElegirCartaComponent', () => {
  let component: ElegirCartaComponent;
  let fixture: ComponentFixture<ElegirCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
