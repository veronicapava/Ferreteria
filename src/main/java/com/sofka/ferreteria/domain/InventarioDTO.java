package com.sofka.ferreteria.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;

@Document(collection = "inventario")
public class InventarioDTO {


    @Id
    private String id = UUID.randomUUID().toString().substring(0, 3);
    private String nombreProducto;
    private int precioUnd;
    private int cantidadEnBodega;
    private int cantidadMin;
    private int cantidadMax;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombreProducto() {
        return nombreProducto;
    }

    public void setNombreProducto(String nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    public int getPrecioUnd() {
        return precioUnd;
    }

    public void setPrecioUnd(int precioUnd) {
        this.precioUnd = precioUnd;
    }

    public int getCantidadEnBodega() {
        return cantidadEnBodega;
    }

    public void setCantidadEnBodega(int cantidadEnBodega) {
        this.cantidadEnBodega = cantidadEnBodega;
    }

    public int getCantidadMin() {
        return cantidadMin;
    }

    public void setCantidadMin(int cantidadMin) {
        this.cantidadMin = cantidadMin;
    }

    public int getCantidadMax() {
        return cantidadMax;
    }

    public void setCantidadMax(int cantidadMax) {
        this.cantidadMax = cantidadMax;
    }

}

