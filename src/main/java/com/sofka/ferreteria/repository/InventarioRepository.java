package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.Inventario;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface InventarioRepository extends ReactiveMongoRepository<Inventario, String> {


}
