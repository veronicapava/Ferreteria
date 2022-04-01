package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.Inventario;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface InventarioService {

    Mono<Inventario> save(Inventario inventario);

    Flux<Inventario> findAll();

    Mono<Inventario> findById(String id);

    Mono<Inventario> delete(String id);

    Mono<Inventario> update(String id, Inventario cliente);
}
