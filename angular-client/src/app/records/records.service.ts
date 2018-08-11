import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { Record } from './record';

@Injectable()
export class RecordsService {

  public recordsChanged = new Subject<Record[]>();
  public selectedRecordChanged = new Subject<Record>();

  private url = 'http://localhost:8080';
  private addUrl = this.url + '/add';
  private getUrl = this.url + '/get';
  private deleteUrl = this.url + '/remove/';
  private updateUrl = this.url + '/update/';

  constructor(private http: HttpClient) {
  }

  get(): void {
      this.http.get<Record[]>(this.getUrl).subscribe(rs => this.recordsChanged.next(rs));
  }

  add(r: Record): void {
      this.http.post<Record>(this.addUrl, r)
        .subscribe(() => this.get());
  }

  update(r: Record): void {
      this.http.put<Record>(this.updateUrl + r.id.toString(), r)
        .subscribe(() => this.get());
  }

  remove(r: Record): void {
      this.http.delete(this.deleteUrl + r.id.toString())
        .subscribe(() => this.get());
  }
}
