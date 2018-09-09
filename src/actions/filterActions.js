export const ACTION_SET_FILTER = "filter:setFilter";

export function setFilter(filter) {
  return {
    type: ACTION_SET_FILTER,
    payload: {
      filter
    }
  };
}
