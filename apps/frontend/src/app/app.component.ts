import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Task manager frontend';

  isAuthenticated$ = this.authService.isAuthenticated;

  constructor(private authService: AuthService) {}

}
