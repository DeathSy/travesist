package com.travesist.api.repositories;

import com.travesist.api.models.History;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends CrudRepository<History, String> {
}
