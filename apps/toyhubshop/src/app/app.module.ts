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
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    
];
@NgModule({
    declarations: [AppComponent, HomePageComponent,  HeaderComponent, FooterComponent, NavComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        ProductsModule,
        AccordionModule,
        BrowserAnimationsModule,
        UiModule
      ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
