package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Volante;
import com.sofka.ferreteria.repository.VolanteRepository;
import com.sofka.ferreteria.service.VolanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class VolanteServiceImpl implements VolanteService {

    @Autowired
    private VolanteRepository volanterepo;

    @Override
    public Mono<Volante> save(Volante volantedto) {
        return this.volanterepo.save(volantedto);
    }

    @Override
    public Flux<Volante> findAll() {
        return this.volanterepo.findAll();
    }

    @Override
    public Mono<Volante> update(String id, Volante volante){
        return this.volanterepo.findById(id)
                .flatMap(cli -> {
                    volante.setId(id);
                    return save(volante);
                }).switchIfEmpty(Mono.empty());
    }

    @Override
    public Mono<Volante> delete(String id) {
        return this.volanterepo
                .findById(id)
                .flatMap(c -> this.volanterepo.deleteById(c.getId()).thenReturn(c));
    }
}