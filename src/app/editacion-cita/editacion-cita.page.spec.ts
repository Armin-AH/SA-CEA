import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditacionCitaPage } from './editacion-cita.page';

describe('EditacionCitaPage', () => {
  let component: EditacionCitaPage;
  let fixture: ComponentFixture<EditacionCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditacionCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditacionCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
