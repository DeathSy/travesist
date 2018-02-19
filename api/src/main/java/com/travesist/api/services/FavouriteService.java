package com.travesist.api.services;

import com.travesist.api.repositories.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavouriteService {

    @Autowired
    private FavouriteRepository favouriteRepository;
}
