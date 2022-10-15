import { Injectable } from '@nestjs/common';
import { Message, Prisma } from '@prisma/client';
import { MessageUpdatePayload } from 'types';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getMessages(): Promise<Message[]> {
    return this.prisma.message.findMany();
  }

  async createMessage(data: Prisma.MessageCreateInput) {
    return this.prisma.message.create({ data });
  }
}
