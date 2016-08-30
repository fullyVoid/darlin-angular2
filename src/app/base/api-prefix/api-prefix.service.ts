import {
  ReflectiveInjector,
  Provider
} from '@angular/core'

let provider: any

if ('production' === ENV) {
  // Production
  provider = new Provider('API_PREFIX', { useValue: 'https://api.darlin.me' })

} else {
  // Development
  provider = new Provider('API_PREFIX', { useValue: '/api' })
}

export const ApiPrefix = ReflectiveInjector.resolveAndCreate([
  provider
])
