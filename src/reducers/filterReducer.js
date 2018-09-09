import { ACTION_SET_FILTER } from "../actions/filterActions";

export default function(state = { filter: "" }, { type, payload }) {
  switch (type) {
    case ACTION_SET_FILTER:
      return {
        filter: payload.filter
      };
    default:
      return state;
  }
}
