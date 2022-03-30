package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Compra;
import com.sofka.ferreteria.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class CompraResource {

    @Autowired
    private CompraService compraservice;

    //Postear una compra
    @PostMapping("/crearcompra")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Compra> save(@RequestBody Compra compradto){
        return this.compraservice.save(compradto);
    }

    //Obtener todas las compas
    @GetMapping("/obtenercompras")
    private Flux<Compra> findAllCompras(){
        return this.compraservice.findAll();
    }
}
