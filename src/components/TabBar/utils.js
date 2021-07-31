import get from "lodash/get";

export const getSelectedTabValue = ({ tabConfig = [], currentValue }) => {
  let currentTabValue = get(tabConfig, "[0].value", null);

  for (const { value } of tabConfig) {
    if (value.toString() === currentValue.toString()) {
      currentTabValue = value;
      break;
    }
  }
  return currentTabValue;
};
