import { Component } from '@angular/core';
import { Department } from '../../model/department'; // Make sure to create this model
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-master-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './master-department.component.html',
  styleUrls: ['./master-department.component.css'] // Corrected to styleUrls
})
export class MasterDepartmentComponent {
  URL = 'http://localhost:8080/api/department'; // Updated endpoint
  department: Department = { // Updated to Department model
    id: 0,
    name: '',
    description: '',
    head: '',
    numberOfCourses: 0,
    numberOfStudents: 0,
    location: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post(this.URL, this.department).subscribe((res) => {
      console.log(res);
      this.getDepartments(); // Changed method to getDepartments
    });
  }

  getDepartments() { // Updated method name
    this.http.get(this.URL).subscribe((res) => {
      console.log("RESPONSE: ", res); // Adjusted log for clarity
    });
  }
}
