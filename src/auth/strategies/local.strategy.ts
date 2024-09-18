import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  // Whatever we return from here it's going to be added to the request
  // object (current request object as the dot user property, no matter
  // what the strategy is) and we can access it later on
  async validate(username: string, password: string) {
    return this.authService.verifyUser(username, password);
  }
}
