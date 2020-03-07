import { map } from "rxjs/operators";
import { Observable } from "rxjs";

export async function fromNow(
  chainable$: Observable<string>,
  context,
  payload,
  descriptor
) {
  return chainable$.pipe(map(() => Date.now().toString()));
}
