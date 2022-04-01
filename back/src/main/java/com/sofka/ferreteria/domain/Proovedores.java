package com.sofka.ferreteria.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection= "proovedores")
public class Proovedores {

    @Id
    private String id = UUID.randomUUID().toString().substring(0, 3);
    private String nombreProovedor;
    private String telefonoProovedor;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombreProovedor() {
        return nombreProovedor;
    }

    public void setNombreProovedor(String nombreProovedor) {
        this.nombreProovedor = nombreProovedor;
    }

    public String getTelefonoProovedor() {
        return telefonoProovedor;
    }

    public void setTelefonoProovedor(String telefonoProovedor) {
        this.telefonoProovedor = telefonoProovedor;
    }
}
