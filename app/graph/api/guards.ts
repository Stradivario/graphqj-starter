import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function IsLogged(chainable$: Observable<any>, payload, context) {
  // if (!context.user) {
  //   throw new Error('Unauthorized');
  // }
  console.error('Only logged can see this');
  return chainable$.pipe(map(() => null));
}
