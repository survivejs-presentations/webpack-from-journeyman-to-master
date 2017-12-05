import Worker from "worker-loader!./worker";

const worker = new Worker();
worker.addEventListener("message", ({ data: { text } }) =>
  console.log(`Received message: ${text}`)
);
worker.postMessage({ text: "Hello world" });
