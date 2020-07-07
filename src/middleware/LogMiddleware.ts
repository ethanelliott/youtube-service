import * as express from 'express';
import {ExpressMiddlewareInterface, Middleware} from 'routing-controllers';

import {log} from '../util/log';

@Middleware({type: 'before'})
export class LogMiddleware implements ExpressMiddlewareInterface {

    public use(req: express.Request, res: express.Response, next: express.NextFunction): any {
        log.debug(`${req.method} ${req.path}`);
        next();
    }

}
