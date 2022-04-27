import { Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {

    @Post()
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login() {

    }
}
