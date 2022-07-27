import { SelectEffect, CallEffect, PutEffect, ForkEffect } from 'redux-saga/effects'
import {
  IAccuWeatherData,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
} from '@interfaces/index'

export type AccuWeatherWorkerType = Generator<
  SelectEffect | CallEffect | PutEffect | ForkEffect,
  void,
  string | IAccuWeatherData | IAccuWeatherCurrent | IAccuWeatherFiveDays | IAccuWeatherOneHour[]
>
