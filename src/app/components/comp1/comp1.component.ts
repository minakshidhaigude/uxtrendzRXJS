import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  userName: any = 'Rahul';
  constructor(private auth: AuthService) {
    this.auth.userName.subscribe((res) => {
      this.userName = res;
    });
  }

  ngOnInit(): void {}
  onChange(uname: any) {
    alert(uname.value);
    //this.userName = uname.value;
    //here we chang the value in service and next() is used to send data to the service
    // so it will reflect in all components username when we change one component userName
    this.auth.userName.next(uname.value);
  }
}
