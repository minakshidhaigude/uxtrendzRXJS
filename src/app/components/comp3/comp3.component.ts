import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component implements OnInit {
  userName: any = 'Rahul';
  constructor(private authservice: AuthService) {
    this.authservice.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
}
