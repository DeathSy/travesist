package com.travesist.api.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Favs")
public class Fav {

    @Id
    private Long favId;

    @Column
    private Long locationId;

    @Column
    private Integer frequency;

    @Column
    private Long userId;

    public Fav() {
    }

    public Fav(Long favId, Long locationId, Integer frequency, Long userId) {
        this.favId = favId;
        this.locationId = locationId;
        this.frequency = frequency;
        this.userId = userId;
    }

    public Long getFavId() {
        return favId;
    }

    public void setFavId(Long favId) {
        this.favId = favId;
    }

    public Long getLocationId() {
        return locationId;
    }

    public void setLocationId(Long locationId) {
        this.locationId = locationId;
    }

    public Integer getFrequency() {
        return frequency;
    }

    public void setFrequency(Integer frequency) {
        this.frequency = frequency;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
