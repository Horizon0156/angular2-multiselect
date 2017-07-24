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

    public complexData: Array<any> = [
        {id: 0, name: "Complex A"},
        {id: 1, name: "Complex B"},
        {id: 2, name: "Complex C"},
    ];

    public selectedPrimitives: Array<string> = [];

    public selectedObjects: Array<any> = [];

    public printJsonPretty(object: any):string {

        return JSON.stringify(object, null, 4);
    }
}
