import { Component } from '@angular/core';
import { Module } from '../../model/module';
import { Course } from '../../model/course';
import { ApiService } from '../../shared/api.service';
import { SharedModule } from '../../shared/shared.module';
import { Video } from '../../model/video';

@Component({
  selector: 'app-manage-module-video',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './manage-module-video.component.html',
  styleUrl: './manage-module-video.component.css'
})
export class ManageModuleVideoComponent {
  video: Video = new Video();
  modules: Module[] = [];
  courses: Course[] = [];
  selectedCourseId:number = 0;
  videos: Video[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.get('course').subscribe((res: any) => {
      this.courses = res;
    });
  }

  onSubmit() {
    this.apiService.post('video', this.video).subscribe((res) => {
      this.video = new Video();
    });
  }

  selectedCourseIdChange() {
    this.modules = [];
    this.apiService.get("module/"+this.video.courseId).subscribe((res : any) => {
      this.modules = res;
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
      this.video.content = reader.result as string; // Store the Base64 string directly
    };

    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  }

  getVideos() {
    this.videos = [];
    this.apiService.get("video/"+this.video.moduleId).subscribe((res : any) => {
      this.videos = res;
    });
  }
}
