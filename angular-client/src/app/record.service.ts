import { Injectable } from '@angular/core';
import { Record } from './records/record';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecordService {

  private addUrl = 'http://localhost:8080/add';
  private getUrl = 'http://localhost:8080/get';

  constructor(private http: HttpClient) { }

  getRecords() : Observable<Record[]> {
      return this.http.get<Record[]>(this.getUrl);
  }

}
