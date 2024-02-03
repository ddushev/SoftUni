import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Themes } from "../../types/themes";

export const selectThemes = createFeatureSelector<ReadonlyArray<Themes>>('themes');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectThemesCollection = createSelector(
  selectThemes,
  selectCollectionState,
  (themes, collection) => {
    return collection.map((id) => themes.find((theme) => theme._id === id)!)
  }
);
