import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "./store/counter";
import { privacyActions } from "./store/privacy";

let Controls = () => {
  const dispatch = useDispatch();
  const inputNumber = useRef();

  let handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  let handleDeccrement = () => {
    dispatch(counterActions.decrement());
  };

  let handleAdd = () => {
    dispatch(counterActions.add(inputNumber.current.value));
    inputNumber.current.value = "";
  };

  let handleSub = () => {
    dispatch(counterActions.subtract(inputNumber.current.value));
    inputNumber.current.value = "";
  };

  let handleTogglePrivacy = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleDeccrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handleTogglePrivacy}
        >
          Toggle Privacy
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Enter a number" ref={inputNumber} />
        <button
          style={{ marginLeft: "15px" }}
          type="button"
          className="btn btn-success"
          onClick={handleAdd}
        >
          Add
        </button>

        <button
          style={{ marginLeft: "15px" }}
          type="button"
          className="btn btn-danger"
          onClick={handleSub}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
