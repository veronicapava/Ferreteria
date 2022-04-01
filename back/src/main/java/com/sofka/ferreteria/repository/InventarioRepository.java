package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.Cliente;
import com.sofka.ferreteria.domain.Inventario;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface InventarioRepository extends ReactiveMongoRepository<Inventario, String> {
    Mono<Inventario> findById(String id);

}
