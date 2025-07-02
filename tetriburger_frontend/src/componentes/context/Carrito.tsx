import { createContext, useContext, useState, ReactNode } from "react";

type Producto = {
  id: number;
  precio: number;
  // agrega otros campos si es necesario
};

type CarritoItem = {
  idCarritoItem: number;
  producto: Producto;
  cantidad: number;
  total: number;
};

type CarritoContextType = {
  items: CarritoItem[];
  addItem: (item: CarritoItem) => void;
  removeItem: (idCarritoItem: number) => void;
  updateCantidad: (idCarritoItem: number, cantidad: number) => void;
};

export const CarritoContext = createContext<CarritoContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateCantidad: () => {},
});

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CarritoItem[]>([]);

  const addItem = (item) => {
    // Si el producto ya está en el carrito, suma la cantidad
    const existe = items.find((i) => i.producto.id === item.producto.id);
    if (existe) {
      setItems(
        items.map((i) =>
          i.producto.id === item.producto.id
            ? { ...i, cantidad: i.cantidad + 1, total: (i.cantidad + 1) * i.producto.precio }
            : i
        )
      );
    } else {
      setItems([...items, item]);
    }
  };

  const removeItem = (idCarritoItem) => {
    setItems(items.filter((i) => i.idCarritoItem !== idCarritoItem));
  };

  const updateCantidad = (idCarritoItem, cantidad) => {
    setItems(
      items.map((i) =>
        i.idCarritoItem === idCarritoItem ? { ...i, cantidad, total: cantidad * i.producto.precio } : i
      )
    );
  };

  return (
    <CarritoContext.Provider value={{ items, addItem, removeItem, updateCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
}

export const useCarrito = () => useContext(CarritoContext);