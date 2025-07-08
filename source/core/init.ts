import { ProcessListType, attachProcessList } from "../types/processList";

/**
 * Starts up the Savanna core
 * @param {any} processList The process list defined
 * @returns {any}
 * @since v0.0.1
 */
function initSavanna(processList: ProcessListType) {
    attachProcessList(processList);
}

export {
    initSavanna,
}