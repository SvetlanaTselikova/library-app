import { filter, map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import {
  fetchTargetFailure,
  fetchTargetRequest,
  fetchTargetSuccess,
} from "../slices/target";
import { RootEpic } from "../types";
import { IBook } from "../../types/common";
import { fetchRecommendationsRequest } from "../slices";

function prepareTargetMock(bookIds: number[]) {
  const books: IBook[] = [];
  bookIds.forEach((item, inx) => {
    const bookObj = {
      id: item,
      author: `${item} author`,
      year: 123,
      annotation: `${item} annotation`,
      age_resctriction: 16,
      volume: 123,
      rubric: "rubric",
      keyword: "keyword",
    };
    const book = {
      ...bookObj,
      title: `${item} target book for`,
    };
    books.push(book);
  });
  return {
    books,
  };
}

export const loadTarget: RootEpic = (action$, state$) => {
  return action$.pipe(
    filter(fetchTargetRequest.match),
    switchMap((action) => {
      const response = prepareTargetMock(action.payload);
      return of(response).pipe(
        // TODO: remove mock !!!
        map((value) => fetchTargetSuccess(value)),
        catchError(() => of(fetchTargetFailure()))
      );
    })
  );
};

export const clearTarget: RootEpic = (action$, state$) => {
  return action$.pipe(
    filter(fetchRecommendationsRequest.match),
    map(() => fetchTargetSuccess({ books: [] }))
  );
};
