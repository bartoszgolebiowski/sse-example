import { addToChart2Action } from "../../../Redux/actions/charts/actions";
import { CHART2 } from "../../utils";

export class Chart2OnMessage {
  dispatch;
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  getName() {
    return CHART2;
  }
  exec(e) {
    const value = JSON.parse(e.data).value;
    this.dispatch(addToChart2Action(value));
  }
}
