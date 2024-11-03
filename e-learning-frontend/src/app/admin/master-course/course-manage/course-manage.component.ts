import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../../../model/course';
import { Lecture } from '../../../model/lecture';
import { SharedModule } from '../../../shared/shared.module';
import { ApiService } from '../../../shared/api.service';

@Component({
  selector: 'app-course-manage',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './course-manage.component.html',
  styleUrl: './course-manage.component.css'
})
export class CourseManageComponent {
  course = new Course();

  lectures : Lecture[] = [];

  @Output() cancelSignal = new EventEmitter<string>();
  @Output() createSuccessSignal = new EventEmitter<string>();

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
      this.lectures = [];
      this.getLeacrtures();
  }

  onSubmit(): void {
    this.apiService.post('course', this.course).subscribe((res) => {
      console.log(res);
      this.createSuccess();
      this.course = new Course();
      this.cancel();
    });
  }

  onSubmitAndNew() {
    this.apiService.post('course', this.course).subscribe((res) => {
      console.log(res);
      this.createSuccess();
      this.course = new Course();
    });
  }

  getLeacrtures() {
    this.apiService.get('lecture').subscribe((res: any) => {
      this.lectures = res;
    });
  }

  cancel() {
    this.cancelSignal.emit('cancel');
  }

  createSuccess() {
    this.createSuccessSignal.emit('success');
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
      this.course.img = reader.result as string; // Store the Base64 string directly
    };

    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  }
}
