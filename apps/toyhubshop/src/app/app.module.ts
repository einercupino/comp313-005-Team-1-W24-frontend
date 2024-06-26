import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { AccordionModule } from 'primeng/accordion';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsModule } from '@toys-hub/products';
import { UiModule } from '@toys-hub/ui';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrdersModule } from '@toys-hub/orders';
import { JwtInterceptor, UsersModule } from '@toys-hub/users';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    }
];
@NgModule({
    declarations: [AppComponent, HomePageComponent, HeaderComponent, FooterComponent, NavComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes, { useHash: true }),
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        ProductsModule,
        AccordionModule,
        BrowserAnimationsModule,
        UiModule,
        OrdersModule,
        UsersModule,
        NgxStripeModule.forRoot('pk_test_51P1XY1JEBWLb6WOmVCsCgrVyWuoOAJBHdXiYGKmhJuDfJSLVC407tHjWl0XD72PXyv8srK9NtvEYTNYhDkwd07Zb00mKzsmcYx')
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule {}
