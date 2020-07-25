import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {CatsModule} from "./cats/cats.module" ;
import {CatsController} from "./cats/cats.controller";
import {logger} from "./common/middleware/logger.middleware";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [CatsModule, MongooseModule.forRoot('mongodb://cats:password@mongo/cats')],
    controllers: [],
    providers: [],
})

export class AppModule {}
// export class AppModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer
//             .apply(logger)
//             // .forRoutes({path: 'cats*', method: RequestMethod.GET});
//             .forRoutes(CatsController);
//     }
// }
