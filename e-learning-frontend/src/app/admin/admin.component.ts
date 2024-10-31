import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShareModule } from '../share.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
