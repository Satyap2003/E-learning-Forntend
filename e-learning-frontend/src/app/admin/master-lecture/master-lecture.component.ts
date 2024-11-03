import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lecture } from '../../model/lecture';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-master-lecture',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Get the first file
      this.convertToBase64(file);
    }
  }

  private convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Read the file as a data URL

    reader.onload = () => {
      this.lecture.profileImage = reader.result as string; // Store the Base64 string directly
      console.log(this.lecture.profileImage); // Log the Base64 string
    };

    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  }
}

