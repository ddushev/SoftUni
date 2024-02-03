import { Themes } from "../../types/themes";

export interface AppState {
  themes: ReadonlyArray<Themes>,
  collection: ReadonlyArray<string>,
}
