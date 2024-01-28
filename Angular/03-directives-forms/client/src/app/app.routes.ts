import { Routes } from '@angular/router';

import { LoginComponent } from './components/user/login/login.component';
import { The404Component } from './components/the404/the404.component';
import { HomeComponent } from './components/home/home.component';
import { NewThemeComponent } from './components/new-theme/new-theme.component';
import { ThemesAndPosts } from './components/themes-and-posts/themes-and-posts.component';
import { ThemeContentComponent } from './components/themes-and-posts/theme-content/theme-content.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { themeResolver } from './components/themes-and-posts/theme-content/theme.resolver';
import { userGuard } from './guards/user.guard';
import { RegisterReactiveFormComponent } from './components/user/register-reactive-form/register-reactive-form.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterReactiveFormComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [userGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'themes', component: ThemesAndPosts},
  {path: 'themes/:id', component: ThemeContentComponent, resolve: {themeData: themeResolver}},
  {path: 'new-theme', component: NewThemeComponent, canActivate: [userGuard]},
  {path: '**', component: The404Component}
];
