import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportCreatorController } from './ReportCreator/reportCreator.controller';
import { Utils } from './Utils/utils.provider';
import { ReportCreatorProvider } from './ReportCreator/reportCreator.provider';
import { ReportStorageProvider } from './ReportStorage/reportStorage.provider';

@Module({
  imports: [],
  controllers: [AppController, ReportCreatorController],
  providers: [AppService, Utils, ReportCreatorProvider, ReportStorageProvider],
})
export class AppModule {}
