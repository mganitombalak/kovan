import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HoverDirective } from './core/directives/hover.directive';
import { DropHoverDirective } from './core/directives/drop-hover.directive';
import { ArrayCheckPipe } from './core/pipes/array-check.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/interceptor/token-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiConfig } from './core/injection-token/api-config';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
    HoverDirective,
    DropHoverDirective,
    ArrayCheckPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
