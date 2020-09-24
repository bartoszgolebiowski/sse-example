import { SSE_ADRESS } from "./utils";

export class SSEConnector {
  eventSource;
  onMessageHandler;
  onErrorHandler;

  constructor(onMessageHandler, onErrorHandler) {
    this.onMessageHandler = onMessageHandler;
    this.onErrorHandler = onErrorHandler;
  }

  connect = () => {
    this.eventSource = new EventSource(SSE_ADRESS);

    this.eventSource.onmessage = (e) => {
      this.onMessageHandler.handleOnMessage(e);
    };

    this.eventSource.onerror = (e) => {
      this.onErrorHandler.handleOnError(e);
    };
  };
}
