import { addToChart1Action } from "../../../Redux/actions/charts/actions";
import { CHART1 } from "../../utils";

export class Chart1OnMessage {
  dispatch;
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  getName() {
    return CHART1;
  }
  exec(e) {
    const value = JSON.parse(e.data).value;
    this.dispatch(addToChart1Action(value));
  }
}
