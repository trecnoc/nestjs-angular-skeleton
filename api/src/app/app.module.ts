import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { SampleModule } from '../sample/sample.module';
import { FrontEndMiddleware } from '../common/middleware/front-end.middleware';

@Module({
  imports: [SampleModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontEndMiddleware)
      .forRoutes({
        path: '/**',
        method: RequestMethod.ALL,
      });
  }
}
