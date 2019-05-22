import { Injectable } from '@nestjs/common';
import { Sample } from './sample.interface';

@Injectable()
export class SampleService {
  getSampleData(): Sample {
    return {
      message: 'NestJS/Angular Skeleton Example',
    };
  }
}
