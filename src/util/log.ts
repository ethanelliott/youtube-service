'use strict';
import winston from "winston";
import { env } from "../env";

const {createLogger, format, transports} = winston;
const {combine, timestamp, printf, colorize} = format;

function devFormat() {
    const formatMessage = (info: { timestamp: any; level: any; message: any; durationMs: any; }) => `[${info.timestamp}] [${info.level}] ${info.message} ${(info.durationMs ? `Timer: ${info.durationMs}ms` : ``)}`;
    const formatError = (info: { timestamp: any; level: any; message: any; durationMs: any; }) => `[${info.timestamp}] [${info.level}] ${info.message}`;
    const selectFormat = (info: { timestamp: any; level: any; message: any; durationMs: any; }) => {
        return info instanceof Error ? formatError(info) : formatMessage(info);
    };
    // @ts-ignore
    return printf(selectFormat);
}

const consoleLogFormat = (): any => {
    return combine(colorize({all: false}), timestamp(), devFormat());
};

const fileLogFormat = () => {
    return combine(timestamp(), devFormat());
};

const logger = createLogger({
    level: (env.isProduction ? 'info' : 'debug'),
    levels: {
        emerg: 0,
        alert: 1,
        crit: 2,
        error: 3,
        warning: 4,
        notice: 5,
        info: 6,
        debug: 7,
        silly: 8
    },
    exitOnError: false,
    transports: [
        new transports.Console({
            handleExceptions: true,
            format: consoleLogFormat()
        }),
        new transports.File({
            filename: 'main.log',
            format: fileLogFormat()
        })
    ],
    exceptionHandlers: [
        new transports.File({
            filename: 'exceptions.log'
        })
    ]
});

winston.addColors({
    info: 'yellow',
    silly: 'purple'
});

function emerg(message: string) {
    logger.emerg(`${message}`);
}

function alert(message: string) {
    logger.alert(`${message}`);
}

function crit(message: string) {
    logger.crit(`${message}`);
}

function error(message: string) {
    logger.error(`${message}`);
}

function warning(message: string) {
    logger.warning(`${message}`);
}

function notice(message: string) {
    logger.notice(`${message}`);
}

function info(message: string) {
    logger.info(`${message}`);
}

function debug(message: string) {
    logger.debug(`${message}`);
}

function silly(message: string) {
    logger.silly(`${message}`);
}

export const log = {
    emerg,
    alert,
    crit,
    error,
    warning,
    notice,
    info,
    debug,
    silly
};
