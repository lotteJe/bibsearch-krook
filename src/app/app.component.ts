
import { Subscription } from 'rxjs/Subscription';
import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { IKeyboardLayout, MAT_KEYBOARD_LAYOUTS, MatKeyboardComponent, MatKeyboardRef, MatKeyboardService } from '@ngx-material-keyboard/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

declare var require: any;
var parser = require('fast-xml-parser');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _enterSubscription: Subscription;
  private _keyboardRef: MatKeyboardRef<MatKeyboardComponent>;
  private _zoekterm: string;

  public resultaten = [];

  get zoekterm(): string {
    return this._zoekterm;
  }

  darkTheme: boolean;
  duration: number;
  isDebug: boolean;
  defaultLocale: string;
  layout: string;
  layouts: {
    name: string;
    layout: IKeyboardLayout;
  }[];
  zoekValue = '';

  get keyboardVisible(): boolean {
    return this._keyboardService.isOpened;
  }

  constructor(private _keyboardService: MatKeyboardService,
    @Inject(LOCALE_ID) public locale,
    @Inject(MAT_KEYBOARD_LAYOUTS) private _layouts,
    private _http: HttpClient,
  ) { }

  ngOnInit() {
    this.defaultLocale = ` ${this.locale}`.slice(1);
    this.layouts = Object
      .keys(this._layouts)
      .map((name: string) => ({
        name,
        layout: this._layouts[name]
      }))
      .sort((a, b) => a.layout.name.localeCompare(b.layout.name));
  }

  ngOnDestroy() {
    this.closeCurrentKeyboard();
  }

  submitForm(form?: NgForm) {
    const temp = form.controls["zoekterm"].value;
    this._zoekterm = temp.replace(/\s/g, "%20");

    if (typeof this._zoekterm !== "undefined") {
      const url = 'https://cataloguswebservices.bibliotheek.be/wetteren/search/?q=' + this._zoekterm + '&authorization=b8157a8a17c57162b1c9d8096c5f3620';

      console.log(url);

      this._http.get(url, {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
        , responseType: 'text'
      })
        .subscribe(response => {
          let jsonObj = parser.parse(response);
          if (jsonObj.aquabrowser.results !== undefined)
            this.resultaten = jsonObj.aquabrowser.results.result;
          console.log(jsonObj);
        });
    }
  }

  isUndefined(authors) {
    return (typeof authors === "undefined");
  }

  openKeyboard(locale = this.defaultLocale) {
    this._keyboardRef = this._keyboardService.open(locale, {
      darkTheme: this.darkTheme,
      duration: this.duration,
      isDebug: this.isDebug
    });
    this._enterSubscription = this._keyboardRef.instance.enterClick.subscribe(() => {
      this.submitForm();
    });
  }

  closeCurrentKeyboard() {
    if (this._keyboardRef) {
      this._keyboardRef.dismiss();
    }

    if (this._enterSubscription) {
      this._enterSubscription.unsubscribe();
    }
  }
}