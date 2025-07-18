import { Component } from '@angular/core';
import { Profile } from './profile.module';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined

  constructor(
    private router: Router,
    private authService: AuthgoogleService
  ) {}

  goToGaleria() {
    this.router.navigate(['/site/galeria'])
  }

  loginGoogle() {
    this.authService.login()
  }

  isLoggedIn() {
    const dadosGoogle = this.authService.getLoggedProfile()
    this.profile = dadosGoogle
    return !!this.profile
  }
}
