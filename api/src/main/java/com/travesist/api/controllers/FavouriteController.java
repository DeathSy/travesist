package com.travesist.api.controllers;

import com.travesist.api.services.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/favourite")
public class FavouriteController {

    @Autowired
    private FavouriteService favouriteService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List getAllFavourites (@RequestParam("userId") Long userId) {
        return favouriteService.getUserFavService(userId);
    }
}
