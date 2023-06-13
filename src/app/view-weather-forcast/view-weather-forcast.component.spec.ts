import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeatherForcastComponent } from './view-weather-forcast.component';

describe('ViewWheatherForcastComponent', () => {
  let component: ViewWeatherForcastComponent;
  let fixture: ComponentFixture<ViewWeatherForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWeatherForcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
