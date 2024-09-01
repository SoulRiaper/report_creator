import { DocStatuses } from './DocStatuses';

export interface IReportRequestStatus {
  doc_id: string;
  status: DocStatuses;
  href?: string;
}
