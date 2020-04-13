package com.tengu.services;

import com.tengu.models.Purchase;
import com.tengu.models.Rate;
import com.tengu.repositories.PurchaseRepository;
import com.tengu.repositories.RateRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class OperationServiceImpl implements OperationService {
    private PurchaseRepository purchaseRepository;
    private RateRepository rateRepository;

    public OperationServiceImpl(PurchaseRepository purchaseRepository, RateRepository rateRepository) {
        this.purchaseRepository = purchaseRepository;
        this.rateRepository = rateRepository;
    }

    @Override
    public Purchase savePurchase(Purchase purchase) {
        return this.purchaseRepository.save(purchase);
    }

    @Override
    public Rate saveRate(Rate rate) {
        return this.rateRepository.save(rate);
    }

    @Override
    public Rate findByStoryAndUser(UUID storyId, UUID userId) {
        return this.rateRepository.findByStoryAndUser(storyId, userId);
    }
}
