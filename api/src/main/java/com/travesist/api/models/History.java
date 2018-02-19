package com.travesist.api.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "Histories")
public class History {
    @Id
    private Long historyId;

    @Column
    private Long source;

    @Column
    private Long destination;

    @Column
    private Date created_at;

    @Column
    private Date updated_at;

    @Column
    private Long userId;

    public History() {
    }

    public History(Long historyId, Long source, Long destination, Date created_at, Date updated_at, Long userId) {
        this.historyId = historyId;
        this.source = source;
        this.destination = destination;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.userId = userId;
    }

    public Long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Long historyId) {
        this.historyId = historyId;
    }

    public Long getSource() {
        return source;
    }

    public void setSource(Long source) {
        this.source = source;
    }

    public Long getDestination() {
        return destination;
    }

    public void setDestination(Long destination) {
        this.destination = destination;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
