
class ExecutionManager {
    constructor() {
        this.registeredFunctions = [];
        this.completedCount = 0;
        this.isProcessed = false;
        setTimeout(this.onAllFuncCompleted, 45000);
    }

    registerFunc(callback) {
        const returnCallback = () => {
            this.completedCount++;

            if (this.completedCount === this.registeredFunctions.length) {
                this.onAllFuncCompleted();
            }
        };

        this.registeredFunctions.push(returnCallback);
        callback(returnCallback);
    }

    onAllFuncCompleted = () => {
        if (!this.isProcessed) {
            this.isProcessed = true;
            this.sendPostMessage();     
        }
    }

    sendPostMessage() {
        window.parent.postMessage(window.location.href.split('#').shift(),
            window.location.origin); // https://localhost:5001
    }
}

window.executionManager = new ExecutionManager();