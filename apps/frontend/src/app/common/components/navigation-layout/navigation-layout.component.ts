import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { navigation } from '../../../app-navigation';
import { AppRoutingModule } from '../../../app-routing.module';

@Component({
  selector: 'app-navigation-layout',
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.scss'],
})
export class NavigationLayoutComponent {
  @Input()
  title!: string;

  menuItems = navigation;

  baseUrl = '';

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

@NgModule({
  declarations: [NavigationLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
  ],
  exports: [NavigationLayoutComponent],
})
export class NavigationLayoutModule {}
