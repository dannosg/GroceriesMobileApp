import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptUIChartModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],    
  bootstrap: [AppComponent]
})
export class AppModule {}
