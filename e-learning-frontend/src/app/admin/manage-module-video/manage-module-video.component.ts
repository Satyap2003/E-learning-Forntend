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
  styleUrl: './manage-module-video.component.css',
})
export class ManageModuleVideoComponent {
  video: Video = new Video();
  modules: Module[] = [];
  courses: Course[] = [];
  selectedCourseId: number = 0;
  videos: Video[] = [];
  selectedFile: File | null = null; // Add this to hold the selected file

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('course').subscribe((res: any) => {
      this.courses = res;
    });
  }

  onSubmit() {
    // Create a FormData object
    const formData = new FormData();

    // Create a JSON object with video data
    const videoData = {
        name: this.video.name,
        videoNumber: this.video.videoNumber,
        description: this.video.description,
        courseId: this.video.courseId,
        moduleId: this.video.moduleId,
    };

    // Append the video JSON object as a string
    formData.append('video', new Blob([JSON.stringify(videoData)], { type: 'application/json' }));

    // Append the file if it's selected
    if (this.selectedFile) {
        formData.append('file', this.selectedFile, this.selectedFile.name);
    }

    // Send as multipart/form-data
    this.apiService.postFile('video', formData).subscribe((res) => {
        console.log('Upload successful!', res);
        this.video = new Video(); // Reset video data
        this.selectedFile = null;  // Reset selected file
    }, (error) => {
        console.error('Upload failed', error);
        // Handle error appropriately
    });
}


  selectedCourseIdChange() {
    this.modules = [];
    this.apiService
      .get('module/' + this.video.courseId)
      .subscribe((res: any) => {
        this.modules = res;
      });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]; // Store the selected file
    }
  }

  getVideos() {
    this.videos = [];
    this.apiService
      .get('video/' + this.video.moduleId)
      .subscribe((res: any) => {
        this.videos = res;
      });
  }
}
