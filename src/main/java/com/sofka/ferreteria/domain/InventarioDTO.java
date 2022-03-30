package com.sofka.ferreteria.domain;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "inventario")
public class InventarioDTO {

    @DBRef
    private List<ProovedoresDTO> proov;

    private int cantidadMin;

    private int cantidadMax;

    public List<ProovedoresDTO> getProov() {
        return proov;
    }

    public void setProov(List<ProovedoresDTO> proov) {
        this.proov = proov;
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

    @Override
    public String toString() {
        return "InventarioDTO{" +
                "proov=" + proov +
                ", cantidadMin=" + cantidadMin +
                ", cantidadMax=" + cantidadMax +
                '}';
    }
}
