import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { AlertComponent } from './alert/alert.component'
import { SignModalComponent } from './sign-modal/sign-modal.component'
import { LoadingComponent } from './loading/loading.component'
import { MusicComponent } from './music/music.component'

import { VisibilityDirective } from './visibility/visibility.directive'
import { PlatformDirective } from './platform'

export const components = [
  NavbarComponent,
  FooterComponent,
  AlertComponent,
  SignModalComponent,
  LoadingComponent,
  MusicComponent
]

export const pipes = [
]

export const directives = [
  VisibilityDirective,
  PlatformDirective
]
