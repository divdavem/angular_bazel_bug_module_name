import { NgModule } from '@angular/core';
import { MyLibComponent } from './mycomponent';

@NgModule({
    declarations: [
        MyLibComponent
    ],
    exports: [
        MyLibComponent
    ]
})
export class MyLibModule {}
