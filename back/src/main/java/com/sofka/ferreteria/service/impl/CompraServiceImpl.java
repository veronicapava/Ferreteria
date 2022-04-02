package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Compra;
import com.sofka.ferreteria.domain.Inventario;
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
        Inventario inv = new Inventario();
            var articulo = compradto.getArticulo();
            var idArticulo = articulo.getId();
            var articuloEncontrado = servicioInv.findById(idArticulo);

            return articuloEncontrado
                    .flatMap(x -> {
                        return this.comprarepo.save(compradto);
                    })
                    .switchIfEmpty(Mono.empty());
    }

    //Obtener las compras
    @Override
    public Flux<Compra> findAll() {
        return this.comprarepo.findAll();
    }

    //Obtener compra por id
    @Override
    public Mono<Compra> findById(String id) {
        return this.comprarepo.findById(id);
    }

    @Override
    public Mono<Compra> update(String id, Compra compra){
        return this.comprarepo.findById(id)
                .flatMap(comp -> {
                    compra.setId(id);
                    return save(compra);
                }).switchIfEmpty(Mono.empty());
    }


    //Delete compra
    @Override
    public Mono<Compra> delete(String id) {
        return this.comprarepo
                .findById(id)
                .flatMap(c -> this.comprarepo.deleteById(c.getId()).thenReturn(c));
    }
}
