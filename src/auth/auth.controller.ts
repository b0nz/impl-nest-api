import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Req() req) {
    return this.authService.signUp(req.body);
  }

  @Post('signin')
  signIn() {
    return this.authService.signIn();
  }
}
