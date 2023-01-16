import { Component } from "@angular/core";
import "ag-grid-enterprise";
import { PrimeCellEditorComponent } from "./editors/prime-cell-editor.component";
import { CustomDateComponent } from "./date-components/custom-date-component.component";
import { ButtonRendererComponent } from "./button-renderer.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  gridApi;
  frameworkComponents;
  gridColumnApi;
  immutableStore;
  holidaysTotal = 22;
  holidaysCompleted;

  rowData = [
    { date: "27/12/2020", make: "Suzuki", model: "Swift", price: 15000 },
    { date: "1/1/2020", make: "Toyota", model: "Celica", price: 35000 },
    { date: "12/6/2020", make: "Ford", model: "Mondeo", price: 32000 },
    { date: "12/6/2020", make: "Porsche", model: "Boxter", price: 72000 },
  ];
  constructor() {
    this.frameworkComponents = {
      agDateInput: CustomDateComponent,
      primeCellEditor: PrimeCellEditorComponent,
      buttonRenderer: ButtonRendererComponent,
    };
  }

  columnDefs = [
    {
      headerName: "Date (DD/MM/YYYY)",
      field: "date",
      editable: true,
      cellEditor: "primeCellEditor",
    },
    {
      headerName: "Make",
      field: "make",
      editable: true,
      resizable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Suzuki", "Toyota", "Ford", "Porsche"],
      },
    },
    { headerName: "Model", field: "model", editable: true, resizable: true },
    { headerName: "Price", field: "price", editable: true, resizable: true },
    {
      headerName: "Edit",
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        onClick: this.onEditButtonClick.bind(this),
        label: "Edit",
      },
    },
    {
      headerName: "Save",
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        onClick: this.onSaveButtonClick.bind(this),
        label: "Save",
      },
    },
    {
      headerName: "Delete",
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        onClick: this.onDeleteButtonClick.bind(this),
        label: "Delete",
      },
    },
  ];

  gridOptions = {
    domLayout: "autoHeight",

    frameworkComponents: {
      agDateInput: CustomDateComponent,
      primeCellEditor: PrimeCellEditorComponent,
      buttonRenderer: ButtonRendererComponent,
    },
  };

  setHolidaysCompleted(value) {
    this.holidaysCompleted = value;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onEditButtonClick(params) {
    this.gridApi.startEditingCell({
      rowIndex: params.rowIndex,
      colKey: "date",
    });
  }

  onSaveButtonClick(params) {
    this.gridApi.stopEditing();
  }

  onDeleteButtonClick(params) {
    this.gridApi.updateRowData({ remove: [params.data] });
  }
}
