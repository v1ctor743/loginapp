import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.login();
    }
  }

  login() {
    const userControl = this.form.get('username');
    const passwordControl = this.form.get('password');
    if (userControl && passwordControl) {
      const username = userControl.value;
      const password = passwordControl.value;
      if (!this.authService.login(username, password)) {
        this.openErrorDialog();
      }
    }
  }
  openErrorDialog(): void {
    this.dialog.open(ErrorDialogComponent);
  }

  logout(): void {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
