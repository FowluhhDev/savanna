import { Process, State } from "../types/process";

/**
 * Sets the state of a process
 * @param {any} process The target process
 * @param {any} state The state to set
 * @returns {any}
 * @since v0.0.1
 */
function setState(process: Process | undefined, state: State) {
    if (process) process.state = state;
}

export {
    setState,
}