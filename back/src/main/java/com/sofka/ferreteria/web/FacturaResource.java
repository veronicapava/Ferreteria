package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Factura;
import com.sofka.ferreteria.service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/facturas")
public class FacturaResource {

    @Autowired
    private FacturaService factuserv;

    //Postear una factura
    @PostMapping("/facturas")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Factura> save(@RequestBody Factura factudto){
         return this.factuserv.save(factudto);
    }


    //Obtener todas las facturas
    @GetMapping("/facturas")
    private Flux<Factura> findAllFacturas(){
        return this.factuserv.findAll();
    }

}
