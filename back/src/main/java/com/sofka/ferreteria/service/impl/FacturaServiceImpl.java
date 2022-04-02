package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Factura;
import com.sofka.ferreteria.repository.FacturaRepository;
import com.sofka.ferreteria.service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class FacturaServiceImpl implements FacturaService {

    @Autowired
    private FacturaRepository facturepo;


    //Guardar una factura
    @Override
    public Mono<Factura> save(Factura facturadto) {
       return this.facturepo.save(facturadto);
    }

    //Obtener todas las facturas
    @Override
    public Flux<Factura> findAll() {
        return this.facturepo.findAll();
    }

    @Override
    public Mono<Factura> findById(String id) {
        return this.facturepo.findById(id);
    }
}
