import 'reflect-metadata';
import { log } from "./util/log";
import { bootstrapMicroframework } from 'microframework-w3tec';
import { IocLoader } from "./loaders/IocLoader";
import { ExpressLoader } from "./loaders/ExpressLoader";
import { SwaggerLoader } from "./loaders/SwaggerLoader";
import { HomeLoader } from "./loaders/HomeLoader";
import { HTTPLoader } from "./loaders/HTTPLoader";
import { ServerLoader } from "./loaders/ServerLoader";

bootstrapMicroframework({
    loaders: [
        HTTPLoader,
        IocLoader,
        ExpressLoader,
        SwaggerLoader,
        HomeLoader,
        ServerLoader
    ]
})
    .then(() => {
        log.debug("Server is running!");
    })
    .catch((err: Error) => {
        log.error(`THE SERVER HAS CRASHED: ${err}\n${err.stack}`);
    });
