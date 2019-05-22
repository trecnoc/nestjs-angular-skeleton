import { Controller, Get } from '@nestjs/common';
import { SampleService } from './sample.service';
import { Sample } from './sample.interface';

@Controller('api/sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  getSampleMessage(): Sample {
    return this.sampleService.getSampleData();
  }
}
