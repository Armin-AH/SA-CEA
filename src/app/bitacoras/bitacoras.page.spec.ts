import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BitacorasPage } from './bitacoras.page';

describe('BitacorasPage', () => {
  let component: BitacorasPage;
  let fixture: ComponentFixture<BitacorasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacorasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BitacorasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
