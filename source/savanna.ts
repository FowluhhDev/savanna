import { ProcessListType, attachProcessList, getProcessFromID, getProcessFromName } from "./types/processList";
import { Process, NewProcessParams, createProcess, makeProcess, State } from "./types/process";
import { initSavanna } from "./core/init";
import { startLoop } from "./core/loop";
import { setState } from "./utils/setState";

declare global {
  interface Window {
    processList: ProcessListType;
  }
}

export {
    // Types
    ProcessListType,
    Process,
    NewProcessParams,
    State,

    // Functions
    attachProcessList,
    getProcessFromID,
    getProcessFromName,
    createProcess,
    makeProcess,
    startLoop,
    initSavanna,
    setState,
}