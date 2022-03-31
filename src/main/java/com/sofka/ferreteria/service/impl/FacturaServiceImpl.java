package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.FacturaDTO;
import com.sofka.ferreteria.repository.FacturaRepository;
import com.sofka.ferreteria.service.CompraService;
import com.sofka.ferreteria.service.FacturaService;
import com.sofka.ferreteria.service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class FacturaServiceImpl implements FacturaService {

    @Autowired
    private FacturaRepository facturepo;

    @Autowired
    private CompraServiceImpl serviciocompra;

    //Guardar una factura
    @Override
    public Mono<FacturaDTO> save(FacturaDTO facturadto) {
       var compras = facturadto.getProductosComprados();
       return this.facturepo.save(facturadto);
    }

    //Obtener todas las facturas
    @Override
    public Flux<FacturaDTO> findAll() {
        return this.facturepo.findAll();
    }
}
