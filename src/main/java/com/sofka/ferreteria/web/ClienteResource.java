package com.sofka.ferreteria.web;

import com.sofka.ferreteria.domain.Cliente;
import com.sofka.ferreteria.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class ClienteResource {

    @Autowired
    private ClienteService clienteserv;

    //Postear una factura
    @PostMapping("/crearcliente")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Cliente> save(@RequestBody Cliente cliente){
        return this.clienteserv.save(cliente);
    }


    //Obtener todas las facturas
    @GetMapping("/obtenerclientes")
    private Flux<Cliente> findAllClientes(){
        return this.clienteserv.findAll();
    }

    //Obtener un solo cliente
    @GetMapping("/obtenercliente/{id}")
    @ResponseStatus(HttpStatus.OK)
    private Mono<Cliente> findCliente(@PathVariable("id") String id){
        return this.clienteserv.findById(id);
    }

    //Actualizar cliente
    @PutMapping("/cliente/actualizar/{id}")
    private Mono<ResponseEntity<Cliente>> updateCliente(@PathVariable("id") String id, @RequestBody Cliente cliente){
        return this.clienteserv.update(id, cliente)
                .flatMap(cli -> Mono.just(ResponseEntity.ok(cli)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));

    }

    //Eliminar clientes
    @DeleteMapping("cliente/eliminar/{id}")
    private Mono<ResponseEntity<Cliente>> deleteCliente(@PathVariable("id") String id){
        return this.clienteserv.delete(id)
                .flatMap(clid -> Mono.just(ResponseEntity.ok(clid)))
                .switchIfEmpty(Mono.just(ResponseEntity.notFound().build()));
    }

}
