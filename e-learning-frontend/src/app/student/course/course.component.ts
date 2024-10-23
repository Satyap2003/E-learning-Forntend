import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CommonModule } from '@angular/common';
import { ElipsePipe } from '../../pipe/elipse.pipe';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, ElipsePipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  courses : Course[]= [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      price: 100,
      rating: 4,
      img: 'images/angular.png',
      duration: '2 months',
      noOfStudents: 1000,
      lecture: '12',
      ratingCount: 103
    },
    {
      id: 2,
      name: 'React',
      description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
      price: 200,
      rating: 3,
      img: 'images/react.png',
      duration: '3 months',
      noOfStudents: 2000,
      lecture: '15',
      ratingCount: 100
    },
    {
      id: 3,
      name: 'Vue',
      description: 'Vue.js is a progressive framework for building user interfaces.',
      price: 150,
      rating: 5,
      img: 'images/vue.png',
      duration: '2.5 months',
      noOfStudents: 1500,
      lecture: '14',
      ratingCount: 100
    }
  ];
}
