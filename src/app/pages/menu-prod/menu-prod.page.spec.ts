import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuProdPage } from './menu-prod.page';

describe('MenuProdPage', () => {
  let component: MenuProdPage;
  let fixture: ComponentFixture<MenuProdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
