import { getType } from "../utils";

export class SSEOnMessageHandler {
  onMessageFunctions;
  general;

  constructor(onMessageFunctions, general) {
    this.onMessageFunctions = onMessageFunctions;
    this.general = general;
  }

  handleOnMessage(response) {
    const type = getType(response);
 
    const toInvoke =
      this.onMessageFunctions.find(
        (functions) => functions.getName() === type
      ) || this.general;

    toInvoke.exec(response);
  }
}
