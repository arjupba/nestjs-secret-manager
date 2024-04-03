import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // check if the environment variable is set or not by nestjs-secret-manager module
    return JSON.stringify(process.env.testSecret);
  }
}
