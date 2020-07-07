import {Application} from 'express';
import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {createExpressServer} from 'routing-controllers';

import {env} from '../env';
import {log} from '../util/log';
// Middleware
import {LogMiddleware} from '../middleware/LogMiddleware';
import {SecurityMiddleware} from '../middleware/SecurityMiddleware';
import {ErrorMiddleware} from '../middleware/ErrorMiddleware';
// Controllers
import {YoutubeController} from '../api/controllers/YoutubeController';
import {SearchController} from '../api/controllers/SearchController';


export const ExpressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        log.debug('Loading Express');

        const expressApp: Application = createExpressServer({
            cors: true,
            classTransformer: true,
            routePrefix: env.app.routePrefix,
            defaultErrorHandler: false,
            controllers: [
                SearchController,
                YoutubeController
            ],
            middlewares: [
                LogMiddleware,
                SecurityMiddleware,
                ErrorMiddleware
            ]
        });

        const server = settings.getData('http').createServer(expressApp);
        settings.setData('server', server);
        settings.setData('express_app', expressApp);
    }
};
