import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiServiceService } from '../../../services/api.service';
import { Theme } from '../../../types/themes';

export const themeResolver: ResolveFn<Theme> = (route, state) => {
  return inject(ApiServiceService).getSingleTheme(route.paramMap.get('id')!);
};
