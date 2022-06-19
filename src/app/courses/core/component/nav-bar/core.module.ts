import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./nav-bar.component";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule {

}