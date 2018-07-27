import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { MaterialModule } from './material/material.module';

import { IKeyboardLayouts, keyboardLayouts, MAT_KEYBOARD_LAYOUTS, MatKeyboardModule } from '@ngx-material-keyboard/core';

import { AppComponent } from './app.component';

import {LOCALE_ID} from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry';

const customLyouts: IKeyboardLayouts = {
  ...keyboardLayouts,
  'Tolles Layout': {
    'name': 'Awesome layout',
    'keys': [
      [
        ['1', '!'],
        ['2', '@'],
        ['3', '#']
      ]
    ],
    'lang': ['de-CH']
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Material modules
    MaterialModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatKeyboardModule,
    MatChipsModule,

    //Masonary
    NgxMasonryModule
    
  ],
  providers: [
    { provide: MAT_KEYBOARD_LAYOUTS, useValue: customLyouts },
    { provide: LOCALE_ID, useValue: 'nl-BE' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}