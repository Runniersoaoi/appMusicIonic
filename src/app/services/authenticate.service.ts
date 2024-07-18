import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor() {}
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email === 'matiasaquinozc@gmail.com' &&
        credentials.password === 'nuncateolvidare'
      ) {
        accept('Login Correcto');
      } else {
        reject('Login Incorrecto');
      }
    });
  }
}
