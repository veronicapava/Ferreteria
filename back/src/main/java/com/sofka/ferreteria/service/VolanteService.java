package com.sofka.ferreteria.service;

import com.sofka.ferreteria.domain.Proovedores;
import com.sofka.ferreteria.domain.Volante;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface VolanteService {

    Mono<Volante> save(Volante volantedto);

    Flux<Volante> findAll();

    Mono<Volante> update(String id, Volante volante);

    Mono<Volante> delete(String id);
}
