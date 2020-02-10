import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeupocoPage } from './meupoco.page';

describe('MeupocoPage', () => {
  let component: MeupocoPage;
  let fixture: ComponentFixture<MeupocoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeupocoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeupocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
