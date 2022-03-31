package com.sofka.ferreteria.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection= "proovedores")
public class ProovedoresDTO {

    @Id
    private String id = UUID.randomUUID().toString().substring(0, 10);
    private String nombreProovedor;
    private String fechaEntrega;

    private List<String> productosAIngresar;

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

    public String getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(String fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public List<String> getProductosAIngresar() {
        return productosAIngresar;
    }

    public void setProductosAIngresar(List<String> productosAIngresar) {
        this.productosAIngresar = productosAIngresar;
    }

    @Override
    public String toString() {
        return "ProovedoresDTO{" +
                "id='" + id + '\'' +
                ", nombreProovedor='" + nombreProovedor + '\'' +
                ", fechaEntrega='" + fechaEntrega + '\'' +
                ", productosAIngresar=" + productosAIngresar +
                '}';
    }
}
