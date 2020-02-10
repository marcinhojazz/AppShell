import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddpocoPage } from './addpoco.page';

describe('AddpocoPage', () => {
  let component: AddpocoPage;
  let fixture: ComponentFixture<AddpocoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpocoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddpocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
