import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactDashboardComponent } from './pages/contact-dashboard/contact-dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { MovesPreviewComponent } from './cmps/moves-preview/moves-preview.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    ContactDashboardComponent,
    HomePageComponent,
    ContactEditComponent,
    AppHeaderComponent,
    SignupPageComponent,
    TransferFundComponent,
    MovesListComponent,
    MovesPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
