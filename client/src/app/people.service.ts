import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private apollo: Apollo) {}
}
