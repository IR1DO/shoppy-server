import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// We need to supply the name of the strategy, for passport-local, the
// default is simply 'local'
export class LocalAuthGuard extends AuthGuard('local') {}
