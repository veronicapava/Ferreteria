package com.sofka.ferreteria.domain;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.UUID;

@Document(collection = "compra")
public class Compra {

    @Id
    private String id = UUID.randomUUID().toString().substring(0, 3);

    private int cantidad;

    @DBRef
    private Inventario articulo;


    //Getters y setters


    public Inventario getArticulo() {
        return articulo;
    }

    public void setArticulo(Inventario articulo) {
        this.articulo = articulo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}
