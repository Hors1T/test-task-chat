import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  providers: [AppService, AppGateway, PrismaService],
})
export class AppModule {}
