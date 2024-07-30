class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }
}


class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addPrintJob(job) {
        console.log(`Adding print job: ${job}`);
        this.queue.enqueue(job);
    }

    processPrintJobs() {
        while (!this.queue.isEmpty()) {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
        console.log("All print jobs processed");
    }
}


const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Print document 1");
printerQueue.addPrintJob("Print document 2");
printerQueue.processPrintJobs();
