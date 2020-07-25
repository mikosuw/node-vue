import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {TransformInterceptor} from "./common/interceptors/transform.interceptor";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
  //
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //     AppModule,
  //     {
  //       transport: Transport.TCP,
  //     },
  // );
  // app.listen(() => console.log('Microservice is listening'));

}
bootstrap();
