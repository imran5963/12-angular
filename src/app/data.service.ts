import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {data} from './data'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  dltUrl="http://localhost:8080/delete"

  getDatas() {
    return this.http.get('http://localhost:8080' + '/datas');
  }


  submitFormData(formData: any): Observable<any> {
    return this.http.post('http://localhost:8080' + '/addData', formData);
  }

  deleteStudent(id: number):Observable<void> {
    const url = `${this.dltUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  updateStudent(data:data){
    return this.http.put('http://localhost:8080'+'/update',data)
  }
}
