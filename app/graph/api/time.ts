import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export async function fromNow(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chainable$: Observable<string>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    payload,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    descriptor,
  ) {
    return chainable$.pipe(map(() => Date.now().toString()));
  }
  