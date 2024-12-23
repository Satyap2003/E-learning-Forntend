import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { Course } from '../../model/course';
import { Video } from '../../model/video';

@Component({
  selector: 'app-explore-course',
  standalone: true,
  imports: [SharedModule, PanelModule, AccordionModule],
  templateUrl: './explore-course.component.html',
  styleUrl: './explore-course.component.css',
})
export class ExploreCourseComponent implements OnInit {
  course : Course = new Course();
  courseId: any = '';
  currentVideo : Video = new Video();
  videoURl = '';
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.currentVideo = new Video();
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.apiService.get('course/by-id/' + this.courseId).subscribe((res : any) => {
      this.course = res;
    });
  }

  onVideoClick(video : Video) {
    this.currentVideo = video;
    this.videoURl = this.apiService.BASEURL+"video/find-by-id/" +video.id;
    // Call load on the video element after updating the source
    if (this.videoElement && this.videoElement.nativeElement) {
      this.videoElement.nativeElement.load();
    }
  }
}
