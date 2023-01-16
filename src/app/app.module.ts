import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import{ AppComponent } from './app.component';
import { PrimeCellEditorComponent } from './editors/prime-cell-editor.component';
import { CustomDateComponent } from './date-components/custom-date-component.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([
      PrimeCellEditorComponent,
      CustomDateComponent,
    ]),
    CalendarModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  declarations: [
    AppComponent,
    PrimeCellEditorComponent,
    CustomDateComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
