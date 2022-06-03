package com.ywalakamar.server.resolvers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ywalakamar.server.model.People;
import com.ywalakamar.server.service.PeopleService;

import graphql.kickstart.tools.GraphQLQueryResolver;

@Component
public class PeopleQueryResolver implements GraphQLQueryResolver {
    @Autowired
    PeopleService service;

    /*
     * Get all people query resolver method
     */
    public People getAllPeople() {
        return service.getPeople();
    }

    /*
     * Get people per page query resolver method
     */
    public People getPeoplePerPage(int page) {
        return service.getPeople(page);
    }
}
