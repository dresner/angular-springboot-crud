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

  constructor(private recordsService: RecordsService) {
    this.recordsService.recordsChanged.subscribe(rs => this.records = rs);
    this.recordsService.get();
  }

  ngOnInit() {}
}
