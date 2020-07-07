import {MicroframeworkLoader, MicroframeworkSettings} from 'microframework-w3tec';
import {Container} from 'typedi';
import {useContainer as routingUseContainer} from 'routing-controllers';
import {useContainer as classValidatorUseContainer} from 'class-validator';
import {log} from '../util/log';

export const IocLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    log.debug('Loading Controllers');
    routingUseContainer(Container);
    classValidatorUseContainer(Container);
};
