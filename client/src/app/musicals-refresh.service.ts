import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MusicalsRefreshService {
  public refreshNeeded = new BehaviorSubject<boolean>(false);
  refreshNeeded$ = this.refreshNeeded.asObservable();

  requestRefresh() {
    this.refreshNeeded.next(true);
  }
}
