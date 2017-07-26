# Angular2 Multiselect component
Demo: https://horizon0156.github.io/angular2-multiselect/

A modern and simple multiselect component for Angular2 using Bootstrap 4's dropdowns. You can bind primitive and complex data objects, filter values within the dropdown and choose between dynamic and lazy data binding updates.

Please have a look at the documentation to get further information

![Preview](http://i.imgur.com/8X0lvcL.png)

## Usage
To use the component you have to import the `MultiselectModule`

```typescript
import { MultiselectModule } from "../multiselect/multiselect.module";

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MultiselectModule,
    ...
```
Afterwards you can make use of the `multiselect`tag and bind your data.
```html
<multiselect class="flat" 
             [availableData]="primitiveData" 
             [(selectedData)]="selectedPrimitives" 
             [isFilterable]="true"></multiselect>
```

## Parameter Documentation
Parameter  |Type | Default value | Description
---  | --- | --- | ---
availableData|`Array<any>`|`[]`|Used to bind the available data
selectedData|`Array<any>`|`[]`|Used to bind the selected data 
isFilterable|`boolean`|`false`|Sets weather the user is able to filter the available data
customFilter|`(data: Array<SelectableData>, filterText: string) => void`|`null`|used to define a custom filter. Otherwise the available data will be filtered by its primitve value or by the `displayField`if defined. 
displayField|`string`|`null`|Used to define a field which will be used for displaying a complex value.
valueField|`string`|`null`|Used to define a value which will be used for selecting a complex value. The whole object will be selected if no value field is defined.
updateSelectedDataOnClose|`boolean`|`false`|Sets weather the `selectedData`will be updated immediately or after the user has finished the selection, respectively the dropdown has closed.
selectedDataChange|`EventEmitter<Array<any>`|`[]`|Used to bind a callback function for selection update events

## Installation
This project holds a full demo application which uses the `MultiselectModule`. You can checkout the repository, build the application and test the component or you can download the `MultiselectModule` from the Release page to append it to your own application.

## Flat theme
You can attach the `flat`class to the `multiselect`component as seen in the Demo to get a modern, flat control.
```css
.flat .btn,
.flat .form-control {
    border-radius: 0;
}

.flat .dropdown-menu {
    border-radius: 0;
    border-top: none;
    margin-top: 0;
}
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


