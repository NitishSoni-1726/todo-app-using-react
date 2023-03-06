import React from "react";
function Counter() {
  return (
    <>
      <div className="d-flex">
        <div className={`text-bg-transparent p-3 flex-grow-1 text-center`}>
          Total-Task : <span id="totalTasks"></span>
        </div>
        <div className="text-bg-transparent p-3 flex-grow-1 text-center">
          Completed-Task : <span id="completedTasks"></span>
        </div>
        <div className="text-bg-transparent p-3 flex-grow-1 text-center">
          Remaining-Task : <span id="remainingTasks"></span>
        </div>
      </div>
    </>
  );
}

export default Counter;
