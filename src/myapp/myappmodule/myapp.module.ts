import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibModule } from '../../mylib';
import { MyComponent } from './mycomponent';

@NgModule({
    imports: [
        BrowserModule,
        MyLibModule
    ],
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
