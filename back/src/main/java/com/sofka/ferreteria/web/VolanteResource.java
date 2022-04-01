package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Proovedores;
import com.sofka.ferreteria.domain.Volante;
import com.sofka.ferreteria.service.VolanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/volantes")
public class VolanteResource {

    @Autowired
    private VolanteService volanteserv;

    //Postear un volante
    @PostMapping("/crearvolante")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Volante> save(@RequestBody Volante volantedto){
        return this.volanteserv.save(volantedto);
    }


    //Obtener todos los volantes
    @GetMapping("/obtenervolantes")
    private Flux<Volante> findAllVolantes(){
        return this.volanteserv.findAll();
    }


    //Actualizar volante
    @PutMapping("/actualizar/{id}")
    private Mono<Volante> updateVolante(@PathVariable("id") String id, @RequestBody Volante volante){
        return this.volanteserv.update(id, volante)
                .flatMap(vol -> {return Mono.just(vol);});
    }

    //Eliminar volante
    @DeleteMapping("/eliminar/{id}")
    private Mono<ResponseEntity<Volante>> deleteVolante(@PathVariable("id") String id){
        return this.volanteserv.delete(id)
                .flatMap(vol -> Mono.just(ResponseEntity.ok(vol)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

}
