import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { AppComponent } from './app.component';
const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: '', // configure base path for monaco editor
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); }
  // here monaco object will be available as window.monaco use this function to extend monaco editor functionality.
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig) // use forRoot() in main app module only.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
