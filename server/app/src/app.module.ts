import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {CatsModule} from "./cats/cats.module" ;
import {CatsController} from "./cats/cats.controller";
import {logger} from "./common/middleware/logger.middleware";

@Module({
    imports: [CatsModule],
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
