import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn() {
    return { message: "i've signed in" };
  }

  signUp() {
    return { message: "i've signed up" };
  }
}
