"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Character {
  id: number
  name: string
  image: string
  status: string
  origin: string
}


export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {

    fetch("http://localhost:3001/characters/humans")
      .then(res => res.json())
      .then(data => {
        //para ver set datosssssss
        console.log("Characters recibidos:", data)
        //para ver set datosssssss
        setCharacters(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })

  }, [])

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  //Manejo de errores
  if (loading) {
    return <p style={{textAlign:"center"}}>Cargando personajes...</p>
  }

  if (error) {
    return <p style={{textAlign:"center"}}>Error al cargar los personajes</p>
  }
  //Manejo de errores

  return (

  <div className="container">

    <h1>Human Characters</h1>
    
    <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding:"10px",
          marginBottom:"30px",
          width:"300px",
          borderRadius:"5px",
          border:"1px solid #ccc"
        }}
      />

  <div className="grid">

    {filteredCharacters.length === 0 ? (

      <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
        No se encontraron personajes
      </p>

    ) : (

    filteredCharacters.map((character) => (

      <div key={character.id} className="card">

        <img src={character.image} width="200" />

        <h3>{character.name}</h3>

        <p>{character.origin}</p>

        <p style={{
          color: character.status === "Alive" ? "green" : "red"
        }}>
          {character.status}
        </p>

      </div>

    )))}

  </div>

  </div>

  );
}
