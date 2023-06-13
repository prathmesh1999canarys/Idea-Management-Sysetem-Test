import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeatherForcastComponent } from './add-weather-forcast.component';

describe('AddWeatherForcastComponent', () => {
  let component: AddWeatherForcastComponent;
  let fixture: ComponentFixture<AddWeatherForcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeatherForcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWeatherForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
