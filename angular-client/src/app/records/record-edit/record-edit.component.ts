import { Component, OnInit } from '@angular/core';

import { Record } from '../record';
import { RecordsService } from '../../records/records.service';

@Component({
  selector: 'app-record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.css']
})
export class RecordEditComponent implements OnInit {

  selectedRecord = new Record(undefined, undefined, undefined, undefined);

  constructor(private recordsService: RecordsService) {
    this.recordsService.selectedRecordChanged.subscribe(r => this.selectedRecord = r);
  }

  ngOnInit() {}

  add(name: string, artist: string, year: number): void {
    this.recordsService.add(new Record(0, name, artist, year));
  }

  update(record: Record): void {
    if (this.selectedRecord.id !== undefined) {
      record.id = this.selectedRecord.id;
      this.recordsService.update(record);
    }
  }

}
