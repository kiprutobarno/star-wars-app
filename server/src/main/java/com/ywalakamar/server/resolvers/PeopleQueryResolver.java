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

    public People getAllPeople() {
        return service.getPeople();
    }
}
