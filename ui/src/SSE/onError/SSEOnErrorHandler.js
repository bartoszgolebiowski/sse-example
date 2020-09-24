import { getType } from "../utils";

export class SSEOnErrorHandler {
  onErrorFunctions;
  general;

  constructor(onErrorFunctions, general) {
    this.onErrorFunctions = onErrorFunctions;
    this.general = general;
  }

  handleOnError(response) {
    const type = getType(response);
    
    const toInvoke =
      this.onErrorFunctions.find((functions) => functions.getName() === type) ||
      this.general;

    toInvoke.exec(response);
  }
}
