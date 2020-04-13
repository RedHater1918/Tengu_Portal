package com.tengu.services;

import com.tengu.models.Purchase;
import com.tengu.models.Rate;

import java.util.Optional;
import java.util.UUID;

public interface OperationService {
    Purchase savePurchase(Purchase purchase);
    Rate saveRate(Rate rate);
    Rate findByStoryAndUser(UUID storyId, UUID userId);
}
