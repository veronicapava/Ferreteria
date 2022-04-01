package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Cliente;
import com.sofka.ferreteria.domain.Inventario;
import com.sofka.ferreteria.domain.Proovedores;
import com.sofka.ferreteria.service.ProovedoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/proovedores")
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


    //Actualizar proovedor
    @PutMapping("/actualizar/{id}")
    private Mono<Proovedores> updateProovedor(@PathVariable("id") String id, @RequestBody Proovedores proovedores){
        return this.proovedorService.update(id, proovedores)
                .flatMap(proov -> {return Mono.just(proov);});
    }

    //Eliminar proovedor
    @DeleteMapping("/eliminar/{id}")
    private Mono<ResponseEntity<Proovedores>> deleteProovedor(@PathVariable("id") String id){
        return this.proovedorService.delete(id)
                .flatMap(proov -> Mono.just(ResponseEntity.ok(proov)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }


}
