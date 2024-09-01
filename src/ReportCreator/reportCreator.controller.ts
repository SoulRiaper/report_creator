import { Controller, Get } from '@nestjs/common';
import { IReportRequestStatus } from './interfaces/IReportRequestStatus';
import { ReportCreatorProvider } from './reportCreator.provider';

@Controller('reports')
export class ReportCreatorController {
  constructor(private provider: ReportCreatorProvider) {}

  @Get()
  requestReport(): IReportRequestStatus {
    return this.provider.handleReportRequest([]);
  }
}
