import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DemoComponent } from "./demo.component"
import { MultiselectModule } from "../multiselect/multiselect.module";

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule { }
