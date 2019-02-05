import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import {SlideshowModule} from 'ng-simple-slideshow';
// For MDB Angular Free
//import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BodyComponent } from './home/body/body.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainsliderComponent } from './home/body/mainslider/mainslider.component';
import { Slider1Component } from './home/body/slider1/slider1.component';
import { Slider2Component } from './home/body/slider2/slider2.component';
import { HttpClientModule } from '@angular/common/http';
import { SolutionsComponent } from './home/solutions/solutions.component';
import { OverviewComponent } from './home/solutions/overview/overview.component';
import { FeaturesComponent } from './home/solutions/features/features.component';
import { IntegrationsComponent } from './home/solutions/integrations/integrations.component';
import { approute } from './app.router';
// import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './home/services/services.component';
import { ClientsComponent } from './home/clients/clients.component';
import { SuccesscasesComponent } from './home/clients/successcases/successcases.component';
import { TestimonalsComponent } from './home/clients/testimonals/testimonals.component';
import { DemoComponent } from './home/demo/demo.component';
import { OnlinedemoComponent } from './home/demo/onlinedemo/onlinedemo.component';
import { RequestpocComponent } from './home/demo/requestpoc/requestpoc.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './home/contact/maps/maps.component';
import { NumberOnlyDirective } from 'src/app/home/contact/number.directive';








//import { CarouselModule } from 'angular4-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MainsliderComponent,
    Slider1Component,
    Slider2Component,
    SolutionsComponent,
    OverviewComponent,
    FeaturesComponent,
    IntegrationsComponent,
    ContactComponent,
    ServicesComponent,
    ClientsComponent,
    SuccesscasesComponent,
    TestimonalsComponent,
    DemoComponent,
    OnlinedemoComponent,
    RequestpocComponent,
    PricingComponent,
    AboutComponent,
    MapsComponent,
    NumberOnlyDirective 
    
    
  ],
  imports: [
    BrowserModule,SliderModule,BrowserAnimationsModule,HttpClientModule,approute,ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZEE32lHjp5ZUqL9-w3mI5HNaVmbujBr8'
   })
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
