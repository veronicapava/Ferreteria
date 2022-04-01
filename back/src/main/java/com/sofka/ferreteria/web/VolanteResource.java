package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Volante;
import com.sofka.ferreteria.service.VolanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

}
