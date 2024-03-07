export {
    BaseStorage,
    discardClientStorage,
    discardServerStorage,
    getClientStorage,
    getServerStorage
} from '@webkrafters/universal-storage';

/** @typedef {import("@webkrafters/universal-storage/dist/client").ClientStorage} ClientStorage */
/** @typedef {import("@webkrafters/universal-storage").Cookies} Cookies */
/** @typedef {import("@webkrafters/universal-storage").Id} Id */
/**
 * @typedef {import("@webkrafters/universal-storage").LocalStorageType<P>} LocalStorageType
 * @template [P={}]
 */
/** @typedef {import("@webkrafters/universal-storage").ParsedCookies} ParsedCookies */
/** @typedef {import("@webkrafters/universal-storage").RawCookies} RawCookies */
/**
 * @typedef {import("@webkrafters/universal-storage").Request<CDATA>} Request
 * @template {Cookies} [CDATA=Cookies]
 */
/** @typedef {import("@webkrafters/universal-storage").Response} Response */
/** @typedef {import("@webkrafters/universal-storage/dist/server").ServerStorage} ServerStorage */
