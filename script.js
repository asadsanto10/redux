// select dom element
// const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");
const appendCounter = document.getElementById("appendCounter");
const addCounter = document.getElementById("addCounter");
const resetCounter = document.getElementById("resetCounter");
// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
let id = 1;
// action creators
const increment = (value, id) => {
  return {
    type: INCREMENT,
    payload: { value, id },
  };
};
const decrement = (value, id) => {
  return {
    type: DECREMENT,
    payload: { value, id },
  };
};

// initial state
const initialState = [
  {
    id: 0,
    value: 0,
  },
];

// create reducer function
// eslint-disable-next-line default-param-last
const counterReducer = (state = initialState, action) => {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: id++,
        value: Math.floor(Math.random() * 10),
      },
    ];

    // copyState.push({
    //   id: id++,
    //   value: id + 2,
    // });
    // return copyState;
  } else if (action.type === INCREMENT) {
    // state.map((singleState) => {
    //   return {
    //     ...singleState,
    //     value: singleState.value + action.payload,
    //   };
    // });

    // return [
    //   ...state.slice(0, action.payload.value),
    //   state[action.payload.value] + 1,
    //   ...state.slice(action.payload.value + 1),
    // ];

    const copyState = [...state];
    return copyState.map((singleState) => {
      // console.log(singleState.id);
      // console.log(action.payload.id);
      if (singleState.id === parseInt(action.payload.id)) {
        console.log("inc");
        // console.log("inc");
        // return {
        //   ...singleState,
        //   value: singleState.value + action.payload.value,
        // };

        return {
          ...singleState,
          value: singleState.value + action.payload.value,
        };

        // return singleState;
      }
      console.log("not enc");

      return singleState;

      // return { ...singleState };
    });
  } else if (action.type === DECREMENT) {
    const copyState = [...state];
    return copyState.map((singleState) => {
      // console.log(singleState.id);
      // console.log(action.payload.id);
      if (singleState.id === parseInt(action.payload.id)) {
        return {
          ...singleState,
          value: singleState.value - action.payload.value,
        };
      }
      return singleState;
    });
  } else if (action.type === "reset") {
    console.log("reset");
    const copyState = [...state];
    copyState.map((singleState) => {
      singleState.value = 0;
    });
  }

  return state;
};

// create store
// eslint-disable-next-line no-undef
const store = Redux.createStore(counterReducer);
// render couner
const render = () => {
  const state = store.getState();
  if (state.length > 0) {
    appendCounter.innerHTML = "";
  }
  console.log(state);
  state.map((singleState, i) => {
    const html = `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div id="counter" class="text-2xl font-semibold">${singleState.value.toString()}</div>
          <div class="flex space-x-3">
            <button onclick="incrementClick(this.getAttribute('id'))" id="inc-${
              singleState.id
            }" class="bg-indigo-400 text-white px-3 py-2 rounded shadow">
              Increment
            </button>
            <button onclick="decrementClick(this.getAttribute('id'))" id="dec-${
              singleState.id
            }" class="bg-red-400 text-white px-3 py-2 rounded shadow">
              Decrement
            </button>
          </div>
        </div>`;

    // appendCounter.insertAdjacentHTML("afterend", html);
    // appendCounter.remove();
    const node = document.createElement("div");
    node.innerHTML = html;
    // if (appendCounter.getElementsByTagName("div")[0]) {
    //   appendCounter.getElementsByTagName("div")[0].remove();
    // }

    console.log(singleState);

    // appendCounter.innerHTML = "";
    appendCounter.appendChild(node);

    // console.log(singleState);
    // // counterEl.innerText = singleState.value.toString();
    // console.log(singleState.value);
  });
};

render();

// increment decrement button
store.subscribe(render);
const incrementClick = (id) => {
  store.dispatch(increment(5, id.split("-")[1]));
};

const decrementClick = (id) => {
  store.dispatch(decrement(2, id.split("-")[1]));
};

// add multiple counter
addCounter.addEventListener("click", () => {
  store.dispatch({
    type: "add",
  });
});

// reset counter
resetCounter.addEventListener("click", () => {
  store.dispatch({
    type: "reset",
  });
});
