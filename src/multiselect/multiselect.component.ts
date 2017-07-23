import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectableData } from "./models/SelectableData";

@Component({
  selector: "multiselect",
  templateUrl: "multiselect.component.html",
  styleUrls: ["multiselect.component.css"]
})
export class MultiselectComponent implements OnChanges { 

    @Input()
    public availableData: Array<any> = [];

    @Input()
    public selectedData: Array<any> = [];

    @Output()
    public selectedDataChange: EventEmitter<Array<any>> = new EventEmitter();

    public dataContainer: Array<SelectableData> = []; 
    public searchText: string;
    public isPopupOpen: boolean;
    public areAllItemsSelected: boolean = false;
    public isLableVisible: boolean = true;

    public ngOnChanges(changes: SimpleChanges): void {

        if (changes["availableData"]) {

            this.dataContainer = this.availableData.map(data => new SelectableData(data));
            this.areAllItemsSelected = false;
            this.selectedData = [];
        }
    }

    public filterDataItems(searchText: string): void {
        this.dataContainer.forEach(item => item.isFiltered = !item.model.toString().toLowerCase().includes(searchText.toLowerCase()));
    }

    public togglePopup():void {

        this.isPopupOpen = !this.isPopupOpen;
    }

    public closePopup(): void {
        this.isPopupOpen = false;
    }

    public toggleItemSelection(item: SelectableData) {

        item.isSelected = !item.isSelected;
        this.selectedData = this.dataContainer
                                .filter(item => item.isSelected)
                                .map(item => item.model);
        this.selectedDataChange.emit(this.selectedData);
        this.areAllItemsSelected = this.dataContainer.find(item => !item.isSelected) == undefined;
    }

    public selectAllItems() {
        this.dataContainer.forEach(item => item.isSelected = true);
        this.selectedData = this.availableData.slice(0);
        this.selectedDataChange.emit(this.selectedData);
        this.areAllItemsSelected = true;
    }

    public deselectAllItems() {
      this.dataContainer.forEach(item => item.isSelected = false);
        this.selectedData = [];
        this.selectedDataChange.emit(this.selectedData);
        this.areAllItemsSelected = false;
    }
  }
