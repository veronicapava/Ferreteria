package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.InventarioDTO;
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
    private Mono<InventarioDTO> save(@RequestBody InventarioDTO inventario){
        return this.inventser.save(inventario);
    }


    //Obtener inventario
    @GetMapping("/obtenerinventario")
    private Flux<InventarioDTO> findAllInventario(){
        return this.inventser.findAll();
    }
}
