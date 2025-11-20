# Frontend (React + Vite)

Aplicación web construida con React y Vite. Consume un backend para mostrar:

- Artículos de Wikipedia (`/api/wikipedia?count=...`).
- Recursos con pestañas: "Fotos" y "Países" (`/api/resources/photos`, `/api/resources/countries`).

## Tecnologías

- React 18 + Vite.
- Tailwind CSS para estilos.
- Axios para llamadas HTTP.
- ESLint para calidad de código.

## Requisitos

- `Node.js >= 18`
- `npm >= 9`

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

- Vite abrirá el servidor en `http://localhost:5173`.
- Si trabajas con backend local, define `VITE_API_BASE_URL` apuntando a tu servidor (ejemplo `http://localhost:5000`).

## Variables de entorno

- `VITE_API_BASE_URL`: URL base del backend.
  - Si no se define, el frontend usa:
    - Producción: `https://backend-parcial3-web2.vercel.app`
    - Desarrollo: `http://localhost:5000`

Esta lógica está en `src/services/api.js`.

## Endpoints del backend usados

- Wikipedia: ``/api/wikipedia?count=<n>``
- Fotos: ``/api/resources/photos``
- Países: ``/api/resources/countries``

> Nota: Los endpoints de Usuarios fueron eliminados del proyecto.

## Build y vista previa

```bash
npm run build
npm run preview
```

## Estructura básica

```
frontend/
├── src/
│   ├── components/        # Componentes de la UI
│   ├── services/          # Llamadas al backend (axios)
│   ├── App.jsx            # Rutas y páginas
│   └── main.jsx           # Punto de entrada de React
├── index.html
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## Despliegue (Vercel)

1. Configura la variable `VITE_API_BASE_URL` en Vercel apuntando a tu backend.
2. Haz push a `main` y espera el build.
3. Verifica la página de "Recursos": deben mostrarse solo "Fotos" y "Países".

## Problemas comunes

- CORS: Asegúrate que el backend permita el origen del frontend.
- 404 en API: Confirma que la URL de `VITE_API_BASE_URL` sea correcta.
- Datos inesperados: la UI filtra y valida lo que se renderiza para evitar errores de React.

## Scripts útiles

- `npm run dev`: desarrollo local.
- `npm run build`: compilar para producción.
- `npm run preview`: servidor de vista previa de la build.
