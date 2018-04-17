import { Injectable } from '@angular/core';
import { Record } from './records/record';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecordService {

  private url = 'http://localhost:8080'
  private addUrl = this.url + '/add';
  private getUrl = this.url + '/get';
  private deleteUrl = this.url + '/remove/';
  private updateUrl = this.url + '/update/';

  constructor(private http: HttpClient) { }

  get() : Observable<Record[]> {
      return this.http.get<Record[]>(this.getUrl);
  }

  add(r : Record) : Observable<Record> {
      return this.http.post<Record>(this.addUrl, r);
  }

  update(r : Record) : Observable<any> {
      return this.http.put<Record>(this.updateUrl + r.id.toString(), r);
  }

  remove(r : Record) : Observable<any> {
      return this.http.delete(this.deleteUrl + r.id.toString());
  }
}
