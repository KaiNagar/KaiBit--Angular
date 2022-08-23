import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDashboardComponent } from './pages/contact-dashboard/contact-dashboard.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
  },
  // {path:'about',component:AboutComponent},
  { path: '', component: HomePageComponent },
  { path: 'statistics', component: ContactDashboardComponent },
  {
    path: 'contact',
    component: ContactAppComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: ContactEditComponent,
    resolve: { contact: ContactResolver },
  },
  { path: 'edit', component: ContactEditComponent },
  { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
