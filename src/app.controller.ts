import { Controller, Get, Post, Body } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('/normalize')
  async normalize(@Body() selfDescription: any): Promise<string> {
    const normalizedSD: string = await this.appService.normalize(selfDescription)

    return normalizedSD
  }
}
