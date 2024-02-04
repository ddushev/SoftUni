import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Themes } from "../../types/themes";
import { AppState } from "./app.state";

export const selectThemes = (state: AppState) => state.themes;

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectThemesCollection = createSelector(
  selectThemes,
  selectCollectionState,
  (themes, collection) => {
    return collection.map((id) => themes.find((theme) => theme._id === id)!)
  }
);
