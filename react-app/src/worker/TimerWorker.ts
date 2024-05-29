
self.onmessage = (event: MessageEvent) => {
    let { time, status } = event.data;
    let interval: number | undefined;

    if (status === "start" && time > 0) {
        interval = setInterval(() => {
          if (time > 0) {
                time = time - 1;
                console.log(time);
                self.postMessage({ time });
            } else {
                clearInterval(interval);
                self.postMessage({ time: 0, status: "stopped" });
                self.close();
            }
        }, 1000);
    } else if (status === "stop" && interval !== undefined) {
        clearInterval(interval);
        self.postMessage({ status: "stopped" });
        self.close();
    }
};

export default {} as typeof Worker & { new(): Worker };