package com.sofka.ferreteria.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Document(collection= "facturas")
public class Factura {

    @Id
    private String id = UUID.randomUUID().toString().substring(0, 3);
    private String fecha;
    private String nombreCliente;
    private String nombreVendedor;

    @DBRef
    private List<Compra> productosComprados;


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

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getNombreVendedor() {
        return nombreVendedor;
    }

    public void setNombreVendedor(String nombreVendedor) {
        this.nombreVendedor = nombreVendedor;
    }

    public List<Compra> getProductosComprados() {
        return productosComprados;
    }

    public void setProductosComprados(List<Compra> productosComprados) {
        this.productosComprados = productosComprados;
    }
}
