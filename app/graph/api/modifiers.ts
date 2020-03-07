import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export async function OnlyAdmin(
  chainable$: Observable<any>,
  context,
  payload,
  descriptor
) {
  return chainable$.pipe(map(() => null));
}
