package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.FacturaDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface FacturaService {
    Mono<FacturaDTO> save(FacturaDTO facturadto);

    Flux<FacturaDTO> findAll();
}
