import { Injectable } from '@nestjs/common';
import { Message, Prisma } from '@prisma/client';
import { MessageUpdatePayload } from 'types';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  // инициализация сервиса `Prisma`
  constructor(private readonly prisma: PrismaService) {}

  // получение всех сообщений
  async getMessages(): Promise<Message[]> {
    return this.prisma.message.findMany();
  }

  // создание сообщения
  async createMessage(data: Prisma.MessageCreateInput) {
    return this.prisma.message.create({ data });
  }
}
