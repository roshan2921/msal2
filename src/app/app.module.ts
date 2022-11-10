import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MsalmoduleserviceService } from './shared/msalmoduleservice.service';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

const ROUTES: Routes = [
  {
    path: environment.msal.redirectPath,
    component: MsalRedirectComponent
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [MsalGuard],
    canActivateChild: [MsalGuard],
    children: [
      { path: 'test', component: TestComponent }
    ]
  }
]

const mainModule: NgModule = {
  declarations: [
    AppComponent,
    ProfileComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES), FormsModule
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
}

const msalModuleService = new MsalmoduleserviceService();
msalModuleService.addMsal(mainModule);

@NgModule({
  declarations: mainModule.declarations,
  imports: mainModule.imports,
  providers: mainModule.providers,
  bootstrap: mainModule.bootstrap
})
export class AppModule { }
