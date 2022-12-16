import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  userName: any = 'Rahul';
  constructor(private authservice: AuthService) {
    this.authservice.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
  onChange(uname: any) {
    this.userName = uname.value;
    // this.authservice.userName = uname.value
  }
}
