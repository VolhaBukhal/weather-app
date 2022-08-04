import { SelectEffect, CallEffect, PutEffect, ForkEffect, AllEffect } from 'redux-saga/effects'
import {
  IAccuWeatherData,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
  IWeatherData,
  IOpenWeatherCurrent,
  IOpenWeatherFiveDays,
  IOpenWeatherCoordinates,
  IOpenWeatherAll,
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
>

export type OpenWeatherWorkerType = Generator<
  SelectEffect | CallEffect | PutEffect | ForkEffect | AllEffect<ForkEffect>,
  void,
  | string
  | IOpenWeatherCoordinates
  | IWeatherData
  | IOpenWeatherCurrent
  | IOpenWeatherFiveDays
  | IOpenWeatherAll
>
