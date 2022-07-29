import { SelectEffect, CallEffect, PutEffect, ForkEffect, AllEffect } from 'redux-saga/effects'
import {
  IAccuWeatherData,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
  IWeatherData,
  IWeatherCity,
} from '@interfaces/index'

export type AccuWeatherWorkerType = Generator<
  SelectEffect | CallEffect | PutEffect | ForkEffect | AllEffect<ForkEffect>,
  void,
  | string
  | IWeatherData
  | IAccuWeatherData
  | IAccuWeatherCurrent
  | IAccuWeatherFiveDays
  | IAccuWeatherOneHour[]
  | IWeatherCity
>
