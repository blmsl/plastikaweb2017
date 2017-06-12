import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { ISocial } from '../../models/contact.model';

@Injectable()
export class ContactService {

  constructor(private db: AngularFireDatabase) {
  }

  findContactData(type: string): Observable<string> {
    return this.db.object(`/contact/${type}`)
      .map(data => data.$value)
      .first();
  }

  findSocialData(section = 'contact'): Observable<ISocial[]> {
    return this.db.list('/contact/social', {
      query: { orderByChild: 'section', equalTo: section }
    })
      .first();
  }

  findInterests(): Observable<string[]> {
    return this.db.list('/contact/interests')
      .first();
  }

}
