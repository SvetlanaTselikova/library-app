import { filter, map, switchMap, catchError, take } from "rxjs/operators";
import { of } from "rxjs";
import {
  fetchGenresFailure,
  fetchGenresRequest,
  fetchGenresSuccess,
} from "../slices/genres";
import { RootEpic } from "../types";

function prepareGenresMock() {
  return [
    "Приключения",
    "Фантастика",
    "Повести",
    "Рассказы",
    "Детективы",
    "Эзотерика",
    "Астрология",
    "Психология",
  ];
}
export const init: RootEpic = (action$, state$) => {
  return state$.pipe(
    take(1),
    map(() => fetchGenresRequest())
  );
};
export const loadGenres: RootEpic = (action$, state$) => {
  return action$.pipe(
    filter(fetchGenresRequest.match),
    switchMap((action) => {
      const response = prepareGenresMock();
      return of(response).pipe(
        // TODO: remove mock !!!
        map((value) => fetchGenresSuccess(value)),
        catchError(() => of(fetchGenresFailure()))
      );
    })
  );
};