package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Inventario;
import com.sofka.ferreteria.service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class InventarioResource {

    @Autowired
    private InventarioService inventser;

    //Postear inventario
    @PostMapping("/crearinventario")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Inventario> save(@RequestBody Inventario inventario){
        return this.inventser.save(inventario);
    }


    //Obtener inventario
    @GetMapping("/obtenerinventario")
    private Flux<Inventario> findAllInventario(){
        return this.inventser.findAll();
    }

    //Obtener inventario por id
    @GetMapping("/obtenerinventario/{id}")
    private Mono<Inventario> findAllInventario(@PathVariable("id") String id){
        return this.inventser.findById(id);
    }
}
