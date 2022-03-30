package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.FacturaDTO;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface FacturaRepository extends ReactiveMongoRepository<FacturaDTO, String> {
}
