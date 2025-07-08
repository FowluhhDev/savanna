import { Process, State } from "../types/process";

function setState(process: Process | undefined, state: State) {
    if (process) process.state = state;
}

export {
    setState,
}