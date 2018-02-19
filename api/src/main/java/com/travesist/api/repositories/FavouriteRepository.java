package com.travesist.api.repositories;

import com.travesist.api.models.Fav;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavouriteRepository extends CrudRepository<Fav, String> {
}
