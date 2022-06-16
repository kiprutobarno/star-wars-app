import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

/*
 * Typescript type declared to represent query results
 */

const GET_PEOPLE = gql`
  query getPeoplePerPage($page: Int!) {
    getPeoplePerPage(page: $page) {
      count
      next
      results {
        name
        gender
        height
        mass
        homeworld
      }
    }
  }
`;

const SEARCH = gql`
  query getPeopleByName($name: String!) {
    getPeopleByName(name: $name) {
      results {
        name
        gender
        height
        mass
        homeworld
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private apollo: Apollo) {}

  /**
   *
   * Get people per page
   *
   * @param page int
   * @returns People
   */

  getPeople(page: number): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_PEOPLE,
      variables: {
        page: page,
      },
    }).valueChanges;
  }

  /**
   *
   * Search for a person using name
   * @param name string
   * @returns People
   */

  searchPerson(name: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: SEARCH,
      variables: {
        name: name,
      },
    }).valueChanges;
  }
}
