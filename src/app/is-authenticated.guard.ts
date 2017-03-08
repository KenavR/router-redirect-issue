import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

    constructor(private _router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        window.location.replace('/signin.html');
        return Observable.of(false);
    }

}
