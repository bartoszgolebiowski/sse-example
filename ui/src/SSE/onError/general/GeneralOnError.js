import { GENERAL } from "../../utils";

export class GeneralOnError {
  dispatch;
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  getName() {
    return GENERAL;
  }
  exec(e) {
    console.log(e);
  }
}
