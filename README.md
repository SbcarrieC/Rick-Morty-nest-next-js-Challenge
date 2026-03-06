# Rick & Morty Characters Aplication

Aplicación que consume la API de la serie **Rick & Morty** para mostrar personajes humanos en una interfaz web.

El proyecto está dividido en **backend y frontend**, siguiendo una arquitectura desacoplada donde el frontend no consume directamente la API externa.

## Tecnologías utilizadas

**Backend**
- NestJS
- Axios
- DTO para transformación de datos
- CORS habilitado

**Frontend**
- Next.js
- React
- Fetch API
- CSS Grid para visualización en tarjetas

## Arquitectura

Flujo de datos:

Next.js → NestJS → Rick & Morty API

El backend se encarga de:
- Consumir la API externa
- Filtrar personajes de especie Humana ("Human")
- Transformar los datos usando un DTO

## Endpoint Backend ----> GET /characters/humans

## Funcionalidades

- Visualización de personajes en **cards en formato grid**
- Indicador visual de estado (Spoilers):
  - 🟢 Vivo
  - 🔴 Desvivido
- Buscador en tiempo real por nombre
- Manejo de estados:
  - Loading
  - Error handling
  - Sin resultados
