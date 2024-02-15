import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {HeaderComponent} from "./components/header/header.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SetDomainInterceptor} from "./interceptors/set-domain.interceptor";
import {FooterComponent} from "./components/footer/footer.component";
import {CurrentExchangeStates} from "./store/state/current-exchange-rate.state";
import { NgxsModule } from '@ngxs/store';
import {LastDaysExchangeStates} from "./store/state/last-days-exchange-rate.state";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HeaderComponent,
    HttpClientModule,
    FooterComponent,
    NgxsModule.forRoot([
      CurrentExchangeStates,
      LastDaysExchangeStates
    ], {
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetDomainInterceptor,
      multi: true,
    },
  ],

})
export class AppModule {
}
