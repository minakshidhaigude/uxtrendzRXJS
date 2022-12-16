import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  userName: any = 'Rahul';
  constructor(private authservice: AuthService) {
    this.authservice.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
}
