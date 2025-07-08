import { ProcessListType, attachProcessList, getProcessFromID, getProcessFromName } from "./types/processList";
import { Process, NewProcessParams, createProcess, makeProcess } from "./types/process";
import { initSavanna } from "./core/init";
import { startLoop } from "./core/loop";

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

    // Functions
    attachProcessList,
    getProcessFromID,
    getProcessFromName,
    createProcess,
    makeProcess,
    startLoop,
    initSavanna,
}