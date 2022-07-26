import { SelectEffect, CallEffect, PutEffect } from 'redux-saga/effects'
import { IAccuWeatherData, IAccuWeatherCurrent } from '@interfaces/index'

export type AccuWeatherWorkerType = Generator<
  SelectEffect | CallEffect | PutEffect,
  void,
  string | IAccuWeatherData | IAccuWeatherCurrent
>
