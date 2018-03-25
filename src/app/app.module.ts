import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { UserLoginService } from './user-login.service';
import { AuthguardGuard } from './authguard.guard';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'one-way',
    component: OneWayComponent
  },
  {
    path: 'two-way',
    component: TwoWayComponent
  },
  {
    path: 'users/:name',
    component: UserComponent
  },
  {
    path: 'users/:name/:id',
    component: UserComponent
  },
  {
    path: '**',               //any routes other than above and its order should be last always
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    DemoComponent,
    LoginComponent,
    OneWayComponent,
    TwoWayComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ UserLoginService, AuthguardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
