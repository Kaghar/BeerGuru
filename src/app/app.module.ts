import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpinnerComponent } from './spinner/spinner.component';
import { BeerComponent } from './beer/beer.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    BeerComponent,
    FooterComponent,
    HeaderComponent       
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
