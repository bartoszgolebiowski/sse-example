import {
  ADD_TO_CHART1,
  ADD_TO_CHART2,
  ADD_TO_CHART3,
  ADD_TO_CHART4,
  HEARTBEAT_COUNTER,
} from "../../actions/charts/actionTypes";
import { initialState } from "../../actions/charts/actionTypes";

const sliceArray = (data, element) => {
  if (data.length <= 20) {
    return [...data, element];
  }
  return [...data.slice(data.length - 20, data.length), element];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CHART1: {
      return {
        ...state,
        chart1: sliceArray(state.chart1, action.payload.data),
      };
    }
    case ADD_TO_CHART2: {
      return {
        ...state,
        chart2: sliceArray(state.chart2, action.payload.data),
      };
    }
    case ADD_TO_CHART3: {
      return {
        ...state,
        chart3: sliceArray(state.chart3, action.payload.data),
      };
    }
    case ADD_TO_CHART4: {
      return {
        ...state,
        chart4: sliceArray(state.chart4, action.payload.data),
      };
    }
    case HEARTBEAT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
