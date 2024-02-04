import { createActionGroup, emptyProps, props } from "@ngrx/store";
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
    'Retrieved Themes List': emptyProps(),
    'Remove Theme From List': props<{themeId: string}>(),
    'Themes Loaded Success': props<{themes: Themes[]}>(),
    'Themes Loaded Failure': props<{errorMsg: string}>(),
  }
})
