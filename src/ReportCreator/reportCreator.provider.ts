import { Injectable } from '@nestjs/common';
import { Utils } from 'src/Utils/utils.provider';
import { IReportRow } from './interfaces/IReportRow';
import { IReportRequestStatus } from './interfaces/IReportRequestStatus';
import { DocStatuses } from './interfaces/DocStatuses';

@Injectable()
export class ReportCreatorProvider {
  constructor(private utils: Utils) {}

  handleReportRequest(fields: string[]): IReportRequestStatus {
    const docId = this.utils.genUri();
    return {
      doc_id: docId,
      status: DocStatuses.InProcess,
    };
  }

  generateReport(fields: string[]) {}

  async getReportData(fields: string[]): Promise<IReportRow> {
    const data = { param: '123123' };
    const res = { id: '123' };
    for (const field of fields) {
      if (data[field]) {
        res[field] = data[field];
      } else {
        res[field] = '';
      }
    }
    return res;
  }
}
