import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class Utils {
  constructor() {}

  genUri(): string {
    return randomUUID();
  }
}
