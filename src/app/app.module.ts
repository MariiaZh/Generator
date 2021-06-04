import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordGeneratorComponent } from './word-generator/word-generator.component';


@NgModule({
    declarations: [
        AppComponent,
        WordGeneratorComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
