package com.ywalakamar.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ywalakamar.server.model.People;

@Service
public class PeopleService {
    @Autowired
    RestTemplate restTemplate;
    private static final String URI = "https://swapi.dev/api/people/";

    public People getPeople() {
        return restTemplate.exchange(URI, HttpMethod.GET, null,
                new ParameterizedTypeReference<People>() {

                }).getBody();
    }
}
