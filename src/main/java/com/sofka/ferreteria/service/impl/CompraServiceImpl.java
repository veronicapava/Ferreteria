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

    @Autowired
    InventarioServiceImpl servicioInv;


    //Guardar una compra
    @Override
    public Mono<Compra> save(Compra compradto)  {

            var articulo = compradto.getArticulo();
            var idArticulo = articulo.getId();
            var articuloEncontrado = servicioInv.findById(idArticulo);

            return articuloEncontrado
                    .flatMap(x -> this.comprarepo.save(compradto))
                    .switchIfEmpty(Mono.empty());

    }

    //Obtener las compras
    @Override
    public Flux<Compra> findAll() {
        return this.comprarepo.findAll();
    }

    @Override
    public Mono<Compra> findById(String id) {
        return this.comprarepo.findById(id);
    }
}
