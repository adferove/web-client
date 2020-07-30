console.log(state.problemOptions);
const optionIndex = state.problemOptions.findIndex((option) => {
  return option.id === optionId;
});
const active = state.problemOptions[optionIndex].active;
let selected = { ...state.problemOptions[optionIndex] };
// if (state.selectedOption && selected.id === state.selectedOption.id) {
//   selected = { ...state.selectedOption };
// }
selected.active = !active;
const clonedOptions = [...state.problemOptions];
const newOptions = clonedOptions.map((cloned) => {
  cloned.active = false;
  return cloned;
});
newOptions[optionIndex] = selected;
let step = state.step;
if (selected.active) {
  step = step + 1;
  newOptions.filter((opt) => {
    if (opt.parent === selected.id) {
      opt.step = step;
    }
    return opt;
  });
}

const selectedOption = { ...selected };
