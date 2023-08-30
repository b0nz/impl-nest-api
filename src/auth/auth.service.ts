import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signIn() {
    return { message: "i've signed in" };
  }

  signUp(data) {
    return { message: "i've signed up", data };
  }
}
