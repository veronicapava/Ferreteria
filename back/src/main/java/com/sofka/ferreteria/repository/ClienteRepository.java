package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.Cliente;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface ClienteRepository extends ReactiveMongoRepository<Cliente, String> {
    Mono<Cliente> findById(String id);

}
