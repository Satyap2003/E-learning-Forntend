import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lecture } from '../../model/lecture';

@Component({
  selector: 'app-master-lecture',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './master-lecture.component.html',
  styleUrl: './master-lecture.component.css'
})
export class MasterLectureComponent implements OnInit {
  URL = 'http://localhost:8080/api/lecture';
  lecture : Lecture = new Lecture();
  lectures : Lecture[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.getlecture();
  }

  onSubmit() {
    this.http.post(this.URL, this.lecture).subscribe((res) => {
      this.lecture = new Lecture();
      this.getlecture();
    });
  }
  getlecture() {
    this.http.get(this.URL).subscribe((res : any) => {
      this.lectures = res;
    });
  }
}

