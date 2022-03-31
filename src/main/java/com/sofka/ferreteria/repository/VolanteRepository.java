package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.Volante;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface VolanteRepository extends ReactiveMongoRepository<Volante, String> {
}
