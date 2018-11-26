import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submit(object) {
    object = JSON.stringify(object);
    console.log(object);
    const user = object as User;
    console.log(typeof user);
    console.log(user.age + 1);
    console.log(user);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

interface User {
  email: String;
  gender: String;
  phone: String;
  age: number;
}
