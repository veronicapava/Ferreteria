package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.VolanteDTO;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface VolanteRepository extends ReactiveMongoRepository<VolanteDTO, String> {
}
