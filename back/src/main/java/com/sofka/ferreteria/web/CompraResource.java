package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Compra;
import com.sofka.ferreteria.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/transaccion")
public class CompraResource {

    @Autowired
    private CompraService compraservice;

    //Postear una compra
    @PostMapping("/crearcompra")
    @ResponseStatus(HttpStatus.CREATED)
    private  Mono<ResponseEntity<Compra>> save(@RequestBody Compra compradto){
        return this.compraservice.save(compradto)
                .flatMap( compra -> Mono.just(ResponseEntity.ok(compra)))
                .switchIfEmpty(Mono.just(ResponseEntity.badRequest().build()));
    }

    //Obtener todas las compas
    @GetMapping("/obtenercompras")
    private Flux<Compra> findAllCompras(){
        return this.compraservice.findAll();
    }

    //Actualizar compra
    @PutMapping("/actualizar/{id}")
    private Mono<Compra> updateCliente(@PathVariable("id") String id, @RequestBody Compra compra){
        return this.compraservice.update(id, compra)
                .flatMap(comp -> {return Mono.just(comp);});
    }

    @DeleteMapping("/eliminar/{id}")
    private Mono<ResponseEntity<Compra>> deleteCliente(@PathVariable("id") String id){
        return this.compraservice.delete(id)
                .flatMap(compra -> Mono.just(ResponseEntity.ok(compra)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }
}
