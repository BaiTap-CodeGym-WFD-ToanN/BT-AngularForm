import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.accountForm = new FormGroup({
      email: new FormControl('', [Validators.required,
        Validators.email]),
      password: new FormControl('')
    }, (c: AbstractControl) => {
      const bindedObject: Account = c.value;
      if (bindedObject.password !== 'toandz') {
        return {passwordmustbetoandz: true};
      } else {
        return null;
      }
    });
  }
}

interface Account {
  email: String;
  password: String;
}
