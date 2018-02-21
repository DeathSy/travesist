package com.travesist.api.services;

import com.travesist.api.models.Fav;
import com.travesist.api.repositories.FavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavouriteService {

    @Autowired
    private FavouriteRepository favouriteRepository;

    private List<Fav> userFavList;

    public List getUserFavService (Long userId) {
        Iterable<Fav> userFavourites = favouriteRepository.findAll();
        this.userFavList = new ArrayList<>();
        for (Fav userFavs: userFavourites) {
            if (userFavs.getUserId() == userId) {
                this.userFavList.add(userFavs);
            }
        }
        return this.userFavList;
    }
}
