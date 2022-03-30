package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Compra;
import com.sofka.ferreteria.repository.CompraRepository;
import com.sofka.ferreteria.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CompraServiceImpl implements CompraService {

    @Autowired
    private CompraRepository comprarepo;

    //Guardar una compra
    @Override
    public Mono<Compra> save(Compra compradto) {
        return this.comprarepo.save(compradto);
    }

    //Obtener las compras
    @Override
    public Flux<Compra> findAll() {
        return this.comprarepo.findAll();
    }
}
