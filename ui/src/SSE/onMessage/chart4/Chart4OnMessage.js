import { addToChart4Action } from "../../../Redux/actions/charts/actions";
import { CHART4 } from "../../utils";

export class Chart4OnMessage {
  dispatch;
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  getName() {
    return CHART4;
  }
  exec(e) {
    const value = JSON.parse(e.data).value;
    this.dispatch(addToChart4Action(value));
  }
}
