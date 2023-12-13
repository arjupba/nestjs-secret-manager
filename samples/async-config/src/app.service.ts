import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello1(): string {
    return JSON.parse(this.configService.get('secret1'));
  }

  getHello2(): string {
    return JSON.parse(this.configService.get('secret2'));
  }
}
