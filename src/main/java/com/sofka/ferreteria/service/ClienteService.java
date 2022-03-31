package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.Cliente;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ClienteService {
    Mono<Cliente> save(Cliente cliente);

    Flux<Cliente> findAll();

    //Obtener cliente por id
    Mono<Cliente> findById(String id);

    Mono<Cliente> delete(String id);

    Mono<Cliente> update(String id, Cliente cliente);
}
