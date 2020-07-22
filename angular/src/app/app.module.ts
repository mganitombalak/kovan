import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideMenuComponent } from './components/aside-menu/aside-menu.component';
import { HoverDirective } from './core/directives/hover.directive';
import { DropHoverDirective } from './core/directives/drop-hover.directive';
import { ArrayCheckPipe } from './core/pipes/array-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideMenuComponent,
    HoverDirective,
    DropHoverDirective,
    ArrayCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
