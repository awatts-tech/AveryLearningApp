import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { NumbersComponent } from './numbers/numbers.component';
import { ColorsComponent } from './colors/colors.component';
import { NavComponent } from './nav/nav.component';
import { AnimalsComponent } from './animals/animals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetComponent,
    NumbersComponent,
    ColorsComponent,
    NavComponent,
    AnimalsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Alphabet', component: AlphabetComponent},
      {path: 'Numbers', component: NumbersComponent},
      {path: 'Animals', component: AnimalsComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
