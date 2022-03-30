package com.sofka.ferreteria.repository;

import com.sofka.ferreteria.domain.ProovedoresDTO;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ProovedoresRepository extends ReactiveMongoRepository<ProovedoresDTO, String> {
}
