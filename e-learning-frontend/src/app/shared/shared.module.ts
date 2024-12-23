import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApiService } from './api.service';
import { TableModule } from 'primeng/table';
import { ElipsePipe } from '../pipe/elipse.pipe';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    RouterModule,
    RouterLink,
    AboutUsComponent,
    ContactUsComponent,
    TableModule,
    ElipsePipe,
  ],
  exports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    RouterModule,
    RouterLink,
    AboutUsComponent,
    ContactUsComponent,
    TableModule,
    ElipsePipe,
  ],
  providers: [ApiService],
})
export class SharedModule {}
