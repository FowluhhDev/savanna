/**
 * The process type
 * @since v0.0.1
 */
type Process = {
    id: number;
    name: string;
    state: "created" | "running" | "stopped";
    createCode: () => {};
    runningCode: () => {};
    stoppedCode: () => {};
}

/**
 * The parameter type for making new processes
 * @returns {any}
 * @since v0.0.1
 */
type NewProcessParams = {
    id: number;
    name: string;
    createCode: () => {};
    runningCode: () => {};
    stoppedCode: () => {};
}

/**
 * Creates and starts a process
 * @param {any} params The parameters for the process
 * @returns {any}
 * @since v0.0.1
 */
function createProcess(params: NewProcessParams) {
    const p: Process = {
        id: params.id,
        name: params.name,
        state: "created",
        createCode: params.createCode,
        runningCode: params.runningCode,
        stoppedCode: params.stoppedCode,
    }

    window.processList.push(p);
}

/**
 * Makes and returns a process
 * @param {any} params The parameters for the process
 * @returns {any}
 * @since v0.0.1
 */
function makeProcess(params: NewProcessParams): Process {
    const p: Process = {
        id: params.id,
        name: params.name,
        state: "created",
        createCode: params.createCode,
        runningCode: params.runningCode,
        stoppedCode: params.stoppedCode,
    }

    return p;
}

export {
    Process,
    NewProcessParams,

    createProcess,
    makeProcess,
}