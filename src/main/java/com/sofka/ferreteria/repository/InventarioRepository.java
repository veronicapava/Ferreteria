package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.InventarioDTO;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface InventarioRepository extends ReactiveMongoRepository<InventarioDTO, String> {
}
