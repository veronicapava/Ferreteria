package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.Proovedores;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ProovedoresRepository extends ReactiveMongoRepository<Proovedores, String> {
}
