package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Cliente;
import com.sofka.ferreteria.domain.Inventario;
import com.sofka.ferreteria.service.InventarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    //Obtener articulo de inventario por id
    @GetMapping("/obtenerinventario/{id}")
    private Mono<Inventario> findAllInventario(@PathVariable("id") String id){
        return this.inventser.findById(id);
    }


    //Actualizar articulo del inventario
    @PutMapping("/inventario/actualizar/{id}")
    private Mono<ResponseEntity<Inventario>> updateArticulo(@PathVariable("id") String id, @RequestBody Inventario inventario){
        return this.inventser.update(id, inventario)
                .flatMap(inv -> Mono.just(ResponseEntity.ok(inv)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));

    }

    //Eliminar articulo del inventario
    @DeleteMapping("inventario/eliminar/{id}")
    private Mono<ResponseEntity<Inventario>> deleteArticulo(@PathVariable("id") String id){
        return this.inventser.delete(id)
                .flatMap(clid -> Mono.just(ResponseEntity.ok(clid)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }


}
