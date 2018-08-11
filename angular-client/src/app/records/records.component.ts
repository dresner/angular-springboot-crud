import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { Record } from './record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})

export class RecordsComponent implements OnInit {
  records: Record[];
  selectedRecord: Record;

  constructor(private recordService: RecordService) {
    this.selectedRecord = {id: undefined, name: undefined, artist: undefined, year: undefined};
  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(): void {
    this.recordService.get().subscribe(records => this.records = records);
  }

  add(name: string, artist: string, year: number): void {
    this.recordService.add({'id': 0, 'name': name, 'artist': artist, 'year': year}).subscribe(record => this.records.push(record));
  }

  update(record: Record): void {
    if (this.selectedRecord.id !== undefined) {
      record.id = this.selectedRecord.id;
      this.recordService.update(record).subscribe(() => this.getRecords());
    }
    this.selectedRecord = {id: undefined, name: undefined, artist: undefined, year: undefined};
  }

  selected(r: Record): void {
    this.selectedRecord = r;
  }

  remove(r: Record): void {
    this.recordService.remove(r).subscribe(record => this.getRecords());
  }
}
