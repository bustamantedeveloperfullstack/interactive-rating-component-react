# CardButton

Botón circular para seleccionar una calificación del 1 al 5.

## Props

- `number` (number): Valor numérico del botón.
- `selected` (boolean): Indica si el botón está activo.
- `onClick` (function): Callback al hacer clic.

## Convenciones

- Estilo modular en `CardButton.css`.
- Clase `selected` activa estilos visuales.
- Reutilizable en cualquier componente de calificación.

## Ejemplo de uso

```jsx
<CardButton
  number={3}
  selected={true}
  onClick={() => setRating(3)}
/>
```
