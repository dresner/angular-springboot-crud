import { Component, OnInit, Input } from '@angular/core';

import { Record } from '../../record';
import { RecordsService } from '../../records.service';

@Component({
  selector: 'app-record-list-item',
  templateUrl: './record-list-item.component.html',
  styleUrls: ['./record-list-item.component.css']
})
export class RecordListItemComponent implements OnInit {

  @Input() record: Record;
  showControls = false;

  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
  }

  onMouseEnter() {
    this.showControls = true;
  }

  onMouseLeave() {
    this.showControls = false;
  }

  onSelect(): void {
    this.recordsService.select(this.record);
  }

  onRemove(): void {
    this.recordsService.remove(this.record);
  }

  onCopy(): void {
    this.recordsService.add(this.record);
  }

}
