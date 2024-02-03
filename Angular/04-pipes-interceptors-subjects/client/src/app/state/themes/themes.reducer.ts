import { createReducer, on } from "@ngrx/store";
import { Themes } from "../../types/themes";
import { ThemesApiActions } from "./themes.actions"

export const initialState: ReadonlyArray<Themes> = [];

export const themesReducer = createReducer(
  initialState,
  on(ThemesApiActions.retrievedThemesList, (_state, { themes }) => themes),
  on(ThemesApiActions.removeTheme, (state, { themeId }) => state.filter((theme) => theme._id !== themeId)),
)
