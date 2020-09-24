import {
  ADD_TO_CHART1,
  ADD_TO_CHART2,
  ADD_TO_CHART3,
  ADD_TO_CHART4,
  HEARTBEAT_COUNTER,
} from "./actionTypes";

export const addToChart1Action = (data) => ({
  type: ADD_TO_CHART1,
  payload: {
    data,
  },
});

export const addToChart2Action = (data) => ({
  type: ADD_TO_CHART2,
  payload: {
    data,
  },
});

export const addToChart3Action = (data) => ({
  type: ADD_TO_CHART3,
  payload: {
    data,
  },
});

export const addToChart4Action = (data) => ({
  type: ADD_TO_CHART4,
  payload: {
    data,
  },
});

export const heartbeatCounter = () => ({
  type: HEARTBEAT_COUNTER,
});
