import { Component, OnInit } from '@angular/core';

import { RecordsService } from '../../records/records.service';
import { Record } from '../record';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records: Record[];
  selectedRecord: Record;

  constructor(private recordsService: RecordsService) {
    this.recordsService.selectedRecordChanged.subscribe(r => this.selectedRecord = r);
    this.recordsService.recordsChanged.subscribe(rs => this.records = rs);
    this.recordsService.get();
  }

  ngOnInit() {}

  selected(r: Record): void {
    this.recordsService.selectedRecordChanged.next(r);
  }

  remove(r: Record): void {
    this.recordsService.remove(r);
    if (r === this.selectedRecord) {
      this.recordsService.selectedRecordChanged.next(new Record(undefined, undefined, undefined, undefined));
    }
  }
}
