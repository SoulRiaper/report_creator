import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ReportStorageProvider {
  private storagePath: string;
  constructor() {
    this.storagePath = 'reportStorage';
    if (!existsSync(this.storagePath)) {
      mkdirSync(this.storagePath);
    }
  }

  isReportExists(reportId: string): boolean {
    return existsSync(path.join(this.storagePath, reportId + '.xlsx'));
  }
}
