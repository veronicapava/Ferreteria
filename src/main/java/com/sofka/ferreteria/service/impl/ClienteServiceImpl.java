package com.sofka.ferreteria.service.impl;

import com.sofka.ferreteria.domain.Cliente;
import com.sofka.ferreteria.repository.ClienteRepository;
import com.sofka.ferreteria.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    ClienteRepository clienterepo;

    //Guardar un cliente
    @Override
    public Mono<Cliente> save(Cliente cliente) {
        return this.clienterepo.save(cliente);
    }

    //Obtener todos los cliente

    @Override
    public Flux<Cliente> findAll() {
        return this.clienterepo.findAll();
    }

    //Obtener cliente por id
    @Override
    public Mono<Cliente> findById(String id){
        return this.clienterepo.findById(id);
    }


    @Override
    public Mono<Cliente> update(String id, Cliente cliente){
        return this.clienterepo.findById(id)
                .flatMap(cli -> {
                    cliente.setId(id);
                    cliente.setNombreCliente(cli.getNombreCliente());
                    cliente.setNumeroTelefono(cli.getNumeroTelefono());
                    return save(cliente);
                }).switchIfEmpty(Mono.empty());
    }


    @Override
    public Mono<Cliente> delete(String id) {
        return this.clienterepo
                .findById(id)
                .flatMap(c -> this.clienterepo.deleteById(c.getId()).thenReturn(c));
    }



}
