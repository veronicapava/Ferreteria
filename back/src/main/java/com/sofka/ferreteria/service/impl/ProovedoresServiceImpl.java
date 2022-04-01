package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Proovedores;
import com.sofka.ferreteria.repository.ProovedoresRepository;
import com.sofka.ferreteria.service.ProovedoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProovedoresServiceImpl implements ProovedoresService {

    @Autowired
    ProovedoresRepository proovrepo;

    @Override
    public Mono<Proovedores> save(Proovedores proovedor) {
        return this.proovrepo.save(proovedor);
    }

    @Override
    public Flux<Proovedores> findAll() {
        return this.proovrepo.findAll();
    }

    @Override
    public Mono<Proovedores> update(String id, Proovedores proovedor){
        return this.proovrepo.findById(id)
                .flatMap(cli -> {
                    proovedor.setId(id);
                    return save(proovedor);
                }).switchIfEmpty(Mono.empty());
    }


    @Override
    public Mono<Proovedores> delete(String id) {
        return this.proovrepo
                .findById(id)
                .flatMap(c -> this.proovrepo.deleteById(c.getId()).thenReturn(c));
    }

}
