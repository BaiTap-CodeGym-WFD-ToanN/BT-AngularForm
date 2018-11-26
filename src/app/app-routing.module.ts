import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RedirectorComponent} from './redirector/redirector.component';
import {TodoComponent} from './todo/todo.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: RedirectorComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
