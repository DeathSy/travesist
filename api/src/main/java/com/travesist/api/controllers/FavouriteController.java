package com.travesist.api.controllers;

import com.travesist.api.services.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class FavouriteController {

    @Autowired
    private FavouriteService favouriteService;
}