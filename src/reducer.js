// add code snippets from README
let state;

function reducer(state = { count: 0}, action) {
  switch(action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action)
  render();
}

function render() {
  const container = document.getElementById("container");
  container.textContent = state.count;
}

dispatch("@@INIT")

const button = document.querySelector("button")
button.addEventListener("click", () => {
  dispatch({ type: "counter/increment" });
});

const decrement = document.getElementById("decrement");
decrement.addEventListener("click", () => {
  dispatch({ type: "counter/decrement" });
})