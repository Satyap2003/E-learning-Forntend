import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'e-learning-frontend';

  constructor(private http : HttpClient) {} //Dependancy injection

  ngOnInit(): void {
    this.http.get("http://localhost:8080/api/course").subscribe((res) => {
      console.log(res)
    });

  }
}
