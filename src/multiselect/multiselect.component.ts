import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "multiselect",
  templateUrl: "multiselect.component.html",
  styleUrls: ["multiselect.component.css"]
})
export class MultiselectComponent { 

    public isPopupOpen: boolean;
    public areAllItemsSelected: boolean = false;
    public isLableVisible: boolean = true;

    public togglePopup():void {

        this.isPopupOpen = !this.isPopupOpen;
    }
}
