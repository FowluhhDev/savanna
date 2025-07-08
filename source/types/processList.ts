import { Process } from "./process"

/** The type for a process list.
 * @since v0.0.1
*/
type ProcessListType = Process[]

/**
 * Attaches a process list to window
 * @param {ProcessListType} list The list to attach
 * @since v0.0.1
 */
function attachProcessList(list: ProcessListType) {
    window.processList = list;
}

/**
 * Gets a process from an ID
 * @param {number} id The ID of the process
 * @returns {Process | undefined}
 * @since v0.0.1
 */
function getProcessFromID(id: number): Process | undefined {
    for (const process of window.processList) {
        if (process.id == id) {
            return process;
        }
    }
}

/**
 * Gets a process from a name
 * @param {string} name The name of the process
 * @returns {Process | undefined}
 * @since v0.0.1
 */
function getProcessFromName(name: string): Process | undefined {
    for (const process of window.processList) {
        if (process.name == name) {
            return process;
        }
    }
}

export {
    ProcessListType,
    attachProcessList,
    getProcessFromID,
    getProcessFromName,
}