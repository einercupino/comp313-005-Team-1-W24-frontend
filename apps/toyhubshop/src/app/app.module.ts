import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@toys-hub/ui';
import { AccordionModule } from 'primeng/accordion';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    { path: 'products', component: ProductListComponent }
];
@NgModule({
    declarations: [AppComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent],
    imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes), UiModule, AccordionModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
