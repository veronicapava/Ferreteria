package com.sofka.ferreteria.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection= "volante")
public class Volante {

    @Id
    private String id = UUID.randomUUID().toString().substring(0, 3);
    private String fecha;

    @DBRef
    Proovedores proovedores;

    @DBRef
    private List<Compra> productosRecibidos;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Proovedores getProovedores() {
        return proovedores;
    }

    public void setProovedores(Proovedores proovedores) {
        this.proovedores = proovedores;
    }

    public List<Compra> getProductosRecibidos() {
        return productosRecibidos;
    }

    public void setProductosRecibidos(List<Compra> productosRecibidos) {
        this.productosRecibidos = productosRecibidos;
    }
}
