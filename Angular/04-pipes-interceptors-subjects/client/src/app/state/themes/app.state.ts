import { Themes } from "../../types/themes";

export interface AppState {
  themes: Themes[],
  collection: ReadonlyArray<string>,
}
