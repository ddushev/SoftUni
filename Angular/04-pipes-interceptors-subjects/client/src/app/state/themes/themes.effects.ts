import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiServiceService } from "../../services/api.service";
import { inject } from "@angular/core";
import { ThemesApiActions } from "./themes.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";

export const loadThemes = createEffect(
  (actions$ = inject(Actions), themesService = inject(ApiServiceService)) => {
    return actions$.pipe(
      ofType(ThemesApiActions.retrievedThemesList),
      exhaustMap(() =>
        themesService.getThemes().pipe(
          map((themes) => ThemesApiActions.themesLoadedSuccess({themes})),
          catchError((err: { message: string }) =>
            of(ThemesApiActions.themesLoadedFailure({errorMsg: err.message}))
          )
        )
      )
    );
  },
  {functional: true}
);

export const displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(ThemesApiActions.themesLoadedFailure),
      tap(({ errorMsg }) => alert(errorMsg))
    );
  },
  { functional: true, dispatch: false }
);
