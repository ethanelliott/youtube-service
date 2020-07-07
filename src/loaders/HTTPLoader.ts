import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';

import * as http from 'http';
import {env} from '../env';
import {log} from '../util/log';

export const HTTPLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        log.debug('Loading HTTP Instance');
        if (!env.isTest) {
            settings.setData('http', http);
        }
    }
};
