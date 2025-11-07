# 📦 Convención de componentes en React

### 🧩 Nomenclatura

- Todos los componentes se nombran en **PascalCase**: `CardSubmit`, `CardThankyou`, `CardButton`
- Esto facilita la lectura y distingue componentes de funciones o constantes

### 🚀 Exportación

- Se usa `export const NombreComponente` en cada archivo
- En `components/index.js` se centralizan las exportaciones:

```js
export * from './CardSubmit';
export * from './CardThankyou';
export * from './CardButton';
```
