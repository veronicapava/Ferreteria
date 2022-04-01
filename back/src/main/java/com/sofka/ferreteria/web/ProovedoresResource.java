package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Proovedores;
import com.sofka.ferreteria.service.ProovedoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class ProovedoresResource {

    @Autowired
    private ProovedoresService proovedorService;

    //Postear un proovedor
    @PostMapping("/crearproovedor")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Proovedores> save(@RequestBody Proovedores proovedor){
        return this.proovedorService.save(proovedor);
    }


    //Obtener todos los proovedores
    @GetMapping("/obtenerproovedores")
    private Flux<Proovedores> findAllProovedores(){
        return this.proovedorService.findAll();
    }




}
