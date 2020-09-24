import { heartbeatCounter } from "../../../Redux/actions/charts/actions";
import { HEARTBEAT } from "../../utils";

export class HeartbeatOnMessage {
  dispatch;
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  getName() {
    return HEARTBEAT;
  }
  exec(e) {
    this.dispatch(heartbeatCounter());
  }
}
