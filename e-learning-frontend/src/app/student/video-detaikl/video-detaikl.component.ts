import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { Course } from '../../model/course';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-video-detaikl',
  standalone: true,
  imports: [SharedModule, AccordionModule, PanelModule],
  templateUrl: './video-detaikl.component.html',
  styleUrl: './video-detaikl.component.css'
})
export class VideoDetaiklComponent implements OnInit{
  courseId : any = '';
  course : Course = new Course();
  constructor(private route : ActivatedRoute,private apiService : ApiService) {}
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    console.log(this.courseId)
    this.apiService.get("course/by-id/"+this.courseId).subscribe((res : any) => {
      this.course = res;
    });
  }

}
