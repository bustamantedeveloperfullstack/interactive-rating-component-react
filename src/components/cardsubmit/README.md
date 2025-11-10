### 📁 `cardsubmit/README.md`

````markdown
# CardSubmit

Vista principal para seleccionar una calificación y enviarla.

## Props

- `rating` (number): Valor actual seleccionado.
- `setRating` (function): Setter para actualizar el estado.
- `onSubmit` (function): Callback al enviar la calificación.

## Convenciones

- Genera 5 botones dinámicamente con `CardButton`.
- Imagen decorativa `icon-star.svg`.
- Botón `SUBMIT` con validación mínima (`rating !== null`).

## Ejemplo de uso

```jsx
<CardSubmit
  rating={rating}
  setRating={setRating}
  onSubmit={handleSubmit}
/>
```
````
