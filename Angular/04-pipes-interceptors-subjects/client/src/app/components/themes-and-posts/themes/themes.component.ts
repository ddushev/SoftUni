import { Component, OnInit, inject } from '@angular/core';
import { Themes } from '../../../types/themes';
import { ApiServiceService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { Store } from '@ngrx/store';
import { selectThemes, selectThemesCollection } from '../../../state/themes/themes.selectors';
import { ThemesActions, ThemesApiActions } from '../../../state/themes/themes.actions';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [RouterLink, AsyncPipe, JsonPipe],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})

export class ThemesComponent implements OnInit {
  private store = inject(Store);
  private service = inject(ApiServiceService);
  public userService = inject(UserService);

  themes$: Observable<Themes[]> = this.store.select(selectThemes);

  constructor() { }

  ngOnInit(): void {
    this.store.dispatch(ThemesApiActions.retrievedThemesList());
  }

  onAdd(themeId: string) {
    this.store.dispatch(ThemesActions.addTheme({themeId}));
  }

  onRemove(themeId: string) {
    this.store.dispatch(ThemesApiActions.removeThemeFromList({themeId}));
  }

}
