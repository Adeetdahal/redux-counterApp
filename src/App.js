import { useSelector, useDispatch } from 'react-redux';
import {
  incNumber,
  decNumber,
  loggedin,
  loggedout,
  reset,
} from './actions/index';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center w-full mt-10 ">
        <div>
          <button
            className=" bg-blue-600 text-white rounded h-11 w-16"
            onClick={() => dispatch(loggedin())}
          >
            Login{' '}
          </button>
        </div>
        <div className="px-5">
          <button
            className="bg-blue-600 text-white rounded h-11 w-16"
            onClick={() => dispatch(loggedout())}
          >
            Logout{' '}
          </button>
        </div>
      </div>
      {isLogged ? (
        <div className="flex flex-col justify-center items-center p-[5%]">
          <h1 className="flex p-5 text-3xl">INCREMENT/DECREMENT COUNTER APP</h1>
          <div className="flex px-4  ">
            <button
              className="bg-red-400 rounded h-11 w-11"
              onClick={() => dispatch(decNumber(1))}
            >
              -
            </button>
            <div className="flex justify-center items-center mx-10 font-bold">
              {counter}
            </div>
            <button
              className="bg-red-400 rounded h-11 w-11"
              onClick={() => dispatch(incNumber(5))}
            >
              +
            </button>
          </div>
          <div className="pb-9">
            <button
              className="bg-red-400 rounded h-11 w-16"
              onClick={() => dispatch(reset())}
            >
              Reset
            </button>
          </div>

          {isLogged ? (
            <h2>You are Logged In</h2>
          ) : (
            <h2>LOGIN to see Counter App</h2>
          )}
        </div>
      ) : (
        <h2 className="flex justify-center py-5">LOGIN to see Counter App</h2>
      )}
    </>
  );
};

export default App;
