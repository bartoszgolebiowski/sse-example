import { SSEOnMessageHandler } from "../onMessage/SSEOnMessageHandler";
import { SSEOnErrorHandler } from "../onError/SSEOnErrorHandler";

import { GeneralOnError } from "../onError/general/GeneralOnError";
import { GeneralOnMessage } from "../onMessage/general/GeneralOnMessage";
import { HeartbeatOnMessage } from "../onMessage/heartbeat/HeartbeatOnMessage";
import { Chart4OnMessage } from "../onMessage/chart4/Chart4OnMessage";
import { Chart3OnMessage } from "../onMessage/chart3/Chart3OnMessage";
import { Chart2OnMessage } from "../onMessage/chart2/Chart2OnMessage";
import { Chart1OnMessage } from "../onMessage/chart1/Chart1OnMessage";

export const SSE_ADRESS = "http://localhost:4000/events";

export const GENERAL = "GENERAL";
export const HEARTBEAT = "HEARTBEAT";
export const CHART1 = "CHART1";
export const CHART2 = "CHART2";
export const CHART3 = "CHART3";
export const CHART4 = "CHART4";

export const getType = (response) => {
  let type;
  try {
    type = JSON.parse(response.data).type;
  } catch {
    type = GENERAL;
  }
  return type;
};

const initOnMessage = (dispatch) => [
  new HeartbeatOnMessage(dispatch),
  new Chart1OnMessage(dispatch),
  new Chart2OnMessage(dispatch),
  new Chart3OnMessage(dispatch),
  new Chart4OnMessage(dispatch),
];

const initOnMessageGeneral = (dispatch) => new GeneralOnMessage(dispatch);

const initOnError = (dispatch) => [];

const initOnErrorGeneral = (dispatch) => new GeneralOnError(dispatch);

export const createHandlers = (dispatch) => {
  const onMessageHandler = new SSEOnMessageHandler(
    initOnMessage(dispatch),
    initOnMessageGeneral(dispatch)
  );
  const onErrorHandler = new SSEOnErrorHandler(
    initOnError(dispatch),
    initOnErrorGeneral(dispatch)
  );

  return {
    onMessageHandler,
    onErrorHandler,
  };
};
