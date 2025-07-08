# Savanna
Core for web-based operating systems.

## Examples
Basic starting point
```js
const processList = [];

savanna.initSavanna(processList);
savanna.startLoop();

savanna.createProcess({
    id: 1,
    name: "Process",
    createCode: () => {
        console.log("Hello, world!");
    },
    runningCode: () => {
        console.log("LOOP");
    },
    stoppedCode: () => {
        console.log("Goodbye, world.");
    }
});

setTimeout(() => {
    savanna.getProcessFromID(1).state = "stopped";
}, 5000);
```

Create and stop two processes
```js
const processList = [];

savanna.initSavanna(processList);
savanna.startLoop();

savanna.createProcess({
    id: 1,
    name: "Process",
    createCode: () => {
        console.log("Hello, world!");
    },
    runningCode: () => {
        console.log("LOOP");
    },
    stoppedCode: () => {
        console.log("Goodbye, world.");
    }
});

savanna.createProcess({
    id: 2,
    name: "Process 2",
    createCode: () => {
        console.log("Hello, world 2!");
    },
    runningCode: () => {
        console.log("LOOP 2");
    },
    stoppedCode: () => {
        console.log("Goodbye, world 2.");
    }
});

setTimeout(() => {
    savanna.getProcessFromID(1).state = "stopped";
}, 5000);

setTimeout(() => {
    savanna.getProcessFromID(2).state = "stopped";
}, 7000);
```

## Roadmap
- [ ] Process Management
  - [x] Process Running
  - [x] Process States
  - [ ] Process Privileges
- [ ] Security

## Building
Run `npm i` inside the project directory and run `npm run build` to compile it. You can also use `npm run test` to test the "Two processes" example.