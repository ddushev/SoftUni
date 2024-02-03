import { createReducer, on } from "@ngrx/store";
import { ThemesActions } from "./themes.actions";

export const initialState: ReadonlyArray<string> = [];
export const collectionReducer = createReducer(
  initialState,
  on(ThemesActions.removeTheme, (state, { themeId }) => state.filter((id) => id !== themeId)),
  on(ThemesActions.addTheme, (state, { themeId }) => {
    if(state.indexOf(themeId) > -1) {
      return state;
    }

    return [...state, themeId];
  }),
);
