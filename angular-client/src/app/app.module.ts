import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { RecordsService } from './records/records.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RecordEditComponent } from './records/record-edit/record-edit.component';
import { RecordListComponent } from './records/record-list/record-list.component';
import { RecordListItemComponent } from './records/record-list/record-list-item/record-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    HeaderComponent,
    RecordEditComponent,
    RecordListComponent,
    RecordListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
