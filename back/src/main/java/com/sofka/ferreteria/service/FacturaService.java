package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.Factura;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface FacturaService {
    Mono<Factura> save(Factura facturadto);

    Flux<Factura> findAll();

    Mono<Factura> findById(String id);
}
