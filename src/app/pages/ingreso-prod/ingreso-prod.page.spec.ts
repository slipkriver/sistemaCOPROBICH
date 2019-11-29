import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresoProdPage } from './ingreso-prod.page';

describe('IngresoProdPage', () => {
  let component: IngresoProdPage;
  let fixture: ComponentFixture<IngresoProdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoProdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresoProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
