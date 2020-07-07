import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {env} from '../env';
import {log} from '../util/log';

export const ServerLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        log.debug('Loading Server');
        settings.getData('server').listen(env.app.port, () => {
            log.debug(`Server Listening on ${env.app.port}`);
        });
    }
};
