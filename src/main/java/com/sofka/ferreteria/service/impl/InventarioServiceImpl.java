package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Inventario;
import com.sofka.ferreteria.repository.InventarioRepository;
import com.sofka.ferreteria.service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class InventarioServiceImpl implements InventarioService {

    @Autowired
    InventarioRepository invenrepo;

    //Guardar inventario
    @Override
    public Mono<Inventario> save(Inventario invendto){
        return this.invenrepo.save(invendto);
    }

    //Obtener el inventario
    @Override
    public Flux<Inventario> findAll() {
        return this.invenrepo.findAll();
    }

    @Override
    public Mono<Inventario> findById(String id) {
        return this.invenrepo.findById(id);
    }


}
