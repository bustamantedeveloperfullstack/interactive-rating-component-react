# CardSubmit

# 🧠 Convención: Generación dinámica de arrays en React

En este proyecto se requiere generar botones numerados del 1 al 5 para seleccionar una calificación. En lugar de declarar manualmente un array como `[1, 2, 3, 4, 5]`, se optó por una solución funcional y escalable que evita variables innecesarias.

---

## ✅ Formas de generar arrays dinámicos

### 1. `Array.from({ length: n }, (_, i) => i + 1)`

```jsx
Array.from({ length: 5 }, (_, i) => (
  <CardButton
    key={i + 1}
    number={i + 1}
  />
));
```
