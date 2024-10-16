// NOTE: Elastic Beanstalk is automatically going to be launching get requests
// at the root of our application to check for its health
import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  health() {
    return true;
  }
}
