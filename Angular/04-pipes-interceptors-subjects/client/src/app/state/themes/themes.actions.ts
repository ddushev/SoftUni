import { createActionGroup, props } from "@ngrx/store";
import { Themes } from "../../types/themes";

export const ThemesActions = createActionGroup({
  source: 'Themes',
  events: {
    'Add Theme': props<{themeId: string}>(),
    'Remove Theme': props<{themeId: string}>(),
  }
});

export const ThemesApiActions = createActionGroup({
  source: 'Themes API',
  events: {
    'Retrieved Themes List': props<{themes: ReadonlyArray<Themes>}>(),
    'Remove Theme From List': props<{themeId: string}>(),
  }
})
