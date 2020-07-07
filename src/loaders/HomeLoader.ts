import * as express from 'express';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';

import { env } from '../env';
import { log } from "../util/log";

export const HomeLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        log.debug("Loading Root JSON");
        const expressApp = settings.getData('express_app');
        expressApp.get(
            env.app.routePrefix,
            (req: express.Request, res: express.Response) => {
                return res.json({
                    name: env.app.name,
                    version: env.app.version,
                    description: env.app.description,
                });
            }
        );

    }
};
