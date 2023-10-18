import {FieldValues} from "react-hook-form";

export function getValuesAsStringFromWatchedValues(watchedValues: FieldValues) {
  return Object.values(watchedValues).join(',');
}