/**
 * Starts the process loop for Savanna
 * @returns {any}
 * @since v0.0.1
 */
function startLoop() {
    function loop() {
        for (const process of window.processList) {
            switch (process.state) {
                case "created":
                    process.createCode();
                    process.state = "running";
                    break;
            
                case "running":
                    process.runningCode();
                    break;
                
                case "stopped":
                    process.stoppedCode();
                    var index = window.processList.indexOf(process)
                    if (index >= 0) window.processList.splice(index, 1)
                    break;
            
                default:
                    break;
            }
        }

        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}

export {
    startLoop,
}