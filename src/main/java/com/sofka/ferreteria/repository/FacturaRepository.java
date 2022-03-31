package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.Factura;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface FacturaRepository extends ReactiveMongoRepository<Factura, String> {
}
