import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from '../edit/edit.component';
import { HttpClient } from '@angular/common/http';
import { data } from '../data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  datas: any;
  constructor(
    private service: DataService,
    private obj: NgbModal,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.service.getDatas().subscribe((d) => (this.datas = d));
  }

  openEdit() {
    const modalRef = this.obj.open(EditComponent, { centered: true });
  }

  // onDelete(data: number) {
  //   const modalRef = this.http.delete(data).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
  onDelete(data: void) {
    if (typeof data !== 'number') {
      console.error('Invalid data:', data);
      return;
    }
    const url = `http://localhost:8080/delete/${data}`;

    this.http.delete(url).subscribe(
      (res) => {
        console.log('Delete response:', res);
        // Perform any additional actions on success
      },
      (error) => {
        console.error('Delete error:', error);
        // Handle error, show user a message, etc.
      }
    );
    location.reload();
  }
}
