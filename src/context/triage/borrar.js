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

switch (step) {
  case 1:
    currentForm = (
      <Fragment>
        <YourProblem />
        <Footer back={prevStep} />
      </Fragment>
    );
    break;
  case 2:
    currentForm = (
      <Fragment>
        <YourProblem />
        <Footer back={prevStep} next={nextStep} />
      </Fragment>
    );
    break;
  case 3:
    currentForm = (
      <Fragment>
        <YourGuide />
        <Footer back={prevStep} />
      </Fragment>
    );
    break;
  default:
    break;
}

const next = () => {
  let payload = null;
  if (state.step === 2) {
    if (
      state.selectedOption.aboutYouSteps > 1 &&
      state.selectedOption.aboutYouCurrent < state.selectedOption.aboutYouSteps
    ) {
      const clonedOption = { ...state.selectedOption };
      const increment = state.selectedOption.aboutYouCurrent + 1;
      clonedOption.aboutYouCurrent = increment;
      updateSelectedOption(clonedOption);
    } else {
      payload = state.step + 1;
    }
  } else {
    payload = state.step + 1;
  }

  if (payload) {
    dispatch({
      type: NEXT_STEP,
      payload,
    });
  }
};
