import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DeberesRoutingModule } from './deberes-routing.module';
import { Db1Component } from './db1/db1.component';
import { Db2Component } from './db2/db2.component';
import { Db3Component } from './db3/db3.component';
import { Db4Component } from './db4/db4.component';
import { Db5Component } from './db5/db5.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';

// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { PasswordModule } from 'primeng/password';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { KnobModule } from 'primeng/knob';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { FloatLabel } from 'primeng/floatlabel';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    Db1Component,
    Db2Component,
    Db3Component,
    Db4Component,
    Db5Component,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    DeberesRoutingModule,
    RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    CalendarModule,
    CheckboxModule,
    InputSwitchModule,
    MultiSelectModule,
    RadioButtonModule,
    DropdownModule,
    InputNumberModule,
    CarouselModule,
    DialogModule,
    SliderModule,
    RatingModule,
    ToggleButtonModule,
    SelectButtonModule,
    ListboxModule,
    PasswordModule,
    ChipsModule,
    EditorModule,
    CascadeSelectModule,
    KnobModule,
    TriStateCheckboxModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DeberesModule { }
