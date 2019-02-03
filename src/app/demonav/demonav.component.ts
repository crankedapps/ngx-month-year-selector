import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demonav',
  templateUrl: './demonav.component.html',
  styleUrls: ['./demonav.component.sass']
})
export class DemonavComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('textareaHtml') textareaHtml: ElementRef;
  @Input() assetHtml: string;
  @Input() assetTs: string;
  tabReactiveForm: 'demo' | 'html' | 'ts' = 'demo';
  subGetHtml: Subscription;
  subGetTs: Subscription;
  dataHtml: string;
  dataTs: string;

  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => this.initSubscriptions());
  }

  // Init subscriptions
  initSubscriptions(): void {
    // Get HTML data
    if (this.assetHtml) {
      this.subGetHtml = this.http.get(this.assetHtml, { responseType: 'text' }).subscribe(data => {
        this.dataHtml = data;
      }, err => console.log('HTTP Error', err));
    }
    // Get TS data
    if (this.assetTs) {
      this.subGetTs = this.http.get(this.assetTs, { responseType: 'text' }).subscribe(data => {
        this.dataTs = data;
      }, err => console.log('HTTP Error', err));
    }
  }

  // Return sanitized HTML
  getHtmlData(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml((this.dataHtml ? this.dataHtml : 'Loading...'));
  }

  // Return sanitized TS data
  getTsData(): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml((this.dataTs ? this.dataTs : 'Loading...'));
  }

  ngOnDestroy() {
    // clean up subscriptions
    if (this.subGetHtml) { this.subGetHtml.unsubscribe(); }
    if (this.subGetTs) { this.subGetTs.unsubscribe(); }
  }

}
