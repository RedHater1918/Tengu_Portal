package com.tengu.repositories;

import com.tengu.models.Purchase;
import com.tengu.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PurchaseRepository extends CrudRepository<Purchase, UUID> {

}
