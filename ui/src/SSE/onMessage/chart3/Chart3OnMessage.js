import { addToChart3Action } from "../../../Redux/actions/charts/actions";
import { CHART3 } from "../../utils";

export class Chart3OnMessage {
  dispatch;
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  getName() {
    return CHART3;
  }
  exec(e) {
    const value = JSON.parse(e.data).value;
    this.dispatch(addToChart3Action(value));
  }
}
