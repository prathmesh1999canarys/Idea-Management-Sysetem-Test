import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWeatherForcastComponent } from './edit-weather-forcast.component';

describe('EditWeatherForcastComponent', () => {
  let component: EditWeatherForcastComponent;
  let fixture: ComponentFixture<EditWeatherForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWeatherForcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
