package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.InventarioDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface InventarioService {

    Mono<InventarioDTO> save(InventarioDTO inventario);

    Flux<InventarioDTO> findAll();

    Mono<InventarioDTO> findById(String id);
}
