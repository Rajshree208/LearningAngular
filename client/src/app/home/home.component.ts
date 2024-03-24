import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RegisterComponent, HttpClientModule, CommonModule],
  standalone : true
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode
  }

  getUsers(){
    this.http.get('http://localhost:5139/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete:()=> console.log('Request has completed')
    })
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}