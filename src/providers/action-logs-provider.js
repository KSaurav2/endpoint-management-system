import React, { useContext, useEffect, useReducer, useRef } from "react";

export const ActionLogsContext = React.createContext();

export const useActionLogs = () => useContext(ActionLogsContext);

export function ActionLogsProvider({ children }) {
  const callbackRef = useRef();
  const [actionLogs, setActionLogs] = useReducer(
    (previousState, nextState) => [...previousState, nextState],
    []
  );

  useEffect(() => {
    console.log({ actionLogs });
    if (actionLogs.length) {
      callbackRef.current("success");
    }
  }, [actionLogs]);

  const addActionLogs = (actionLog, callback) => {
    callbackRef.current = callback;
    setActionLogs(actionLog);
  };

  return (
    <ActionLogsContext.Provider
      value={{
        actionLogs,
        addActionLogs
      }}
    >
      {children}
    </ActionLogsContext.Provider>
  );
}
