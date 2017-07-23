import { Component } from "@angular/core";

@Component({
  selector: "demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.css"]
})
export class DemoComponent {

    public primitiveData: Array<string> = [
        "Item A",
        "Item B",
        "Item C",
        "Item D",
        "Item E",
    ];

    public selectedPrimitives: Array<string> = [];

    public printJsonPretty(object: any):string {

        return JSON.stringify(object, null, 4);
    }
}
