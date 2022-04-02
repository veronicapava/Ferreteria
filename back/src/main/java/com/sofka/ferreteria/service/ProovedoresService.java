package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.Proovedores;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProovedoresService {
    Mono<Proovedores> save(Proovedores proovedor);

    Flux<Proovedores> findAll();

    Mono<Proovedores> update(String id, Proovedores proovedor);

    Mono<Proovedores> delete(String id);
}
