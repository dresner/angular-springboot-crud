import { Component, OnInit } from '@angular/core';
import { Record } from './record';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})

export class RecordsComponent implements OnInit {
  add_url = 'http://localhost:8080/add';

  records : Record[] = [
    { name: 'Yellow and Green', artist: 'Baroness', year: 2012 },
    { name: 'Purple', artist: 'Baroness', year: 2015 }  
  ];

  constructor() { }

  ngOnInit() {
  }

}
