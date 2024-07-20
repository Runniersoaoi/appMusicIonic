import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'pattern', message: 'Email invalido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'minLength', message: 'Contraseña muy corta' },
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatoria' },
      { type: 'pattern', message: 'El nombre es invalido' },
    ],
    last_name: [
      { type: 'required', message: 'El apellido es obligatoria' },
      { type: 'pattern', message: 'El apellido es invalido' },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private alertController: AlertController,
    private router: Router,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9_.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-Z]+$/),
        ])
      ),
      last_name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-Z]+$/),
        ])
      ),
    });
  }

  registerUser(dataRegister: any) {
    console.log(dataRegister);

    this.authService.registerUser(dataRegister).then((res) => {
      this.navCtrl.navigateBack('/login');
    });
  }

  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: 'Opps hubo un error',
      message: mss,
      buttons: ['OK'],
    });
    await alert.present();
  }

  toLoginPage() {
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {}
}
