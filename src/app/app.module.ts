import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeNavigationComponent } from './components/home-navigation/home-navigation.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { RoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD2_pBH0RDdeedPZWfw9ThHewvtdJ9d-uw",
    authDomain: "budgetmanagement012.firebaseapp.com",
    databaseURL: "https://budgetmanagement012.firebaseio.com",
    projectId: "budgetmanagement012",
    storageBucket: "budgetmanagement012.appspot.com",
    messagingSenderId: "91638958783"
  }
};
@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    HomeNavigationComponent,
    ListTableComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RoutingModule,
    FormsModule
  ],
  providers: [AuthService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
