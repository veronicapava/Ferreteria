package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.Compra;
import com.sofka.ferreteria.domain.FacturaDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface CompraService {

    Mono<Compra> save(Compra compradto);

    Flux<Compra> findAll();
}
