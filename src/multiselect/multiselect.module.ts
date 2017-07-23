import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MultiselectComponent } from "./multiselect.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MultiselectComponent
  ],
  exports: [
    MultiselectComponent
  ]
})
export class MultiselectModule { }
