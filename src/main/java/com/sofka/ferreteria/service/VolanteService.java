package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.VolanteDTO;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface VolanteService {

    Mono<VolanteDTO> save(VolanteDTO volantedto);

    Flux<VolanteDTO> findAll();
}
