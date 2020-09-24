import React, { useEffect } from "react";
import Dashboard from "./Container/Dashboard";
import { Provider } from "react-redux";
import { SSEConnector } from "./SSE/SSEConnector";
import { createHandlers } from "./SSE/utils";
import store from "./Redux/store/store";

const App = () => {
  useEffect(() => {
    const { onMessageHandler, onErrorHandler } = createHandlers(store.dispatch);
    new SSEConnector(onMessageHandler, onErrorHandler).connect();
  }, []);

  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
