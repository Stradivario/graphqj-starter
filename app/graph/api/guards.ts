import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export async function IsLogged(chainable$: Observable<string>) {
  // if (!context.user) {
  //   throw new Error('Unauthorized');
  // }
  return chainable$.pipe(map(() => 1));
}
