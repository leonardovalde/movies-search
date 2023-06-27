'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function FormComponent() {
    const [query, setQuery] = useState('');
    const handleInputChange = (event) => {
      setQuery(event.target.value);
    };  
    return (
      <form style={{ display: 'flex' }}>
        <input placeholder="Cars, Avengers..." value={query} onChange={handleInputChange} />
        <Link href={`/search/${query}`} >
          <button type="submit">Buscar</button>
        </Link>
      </form>
    );
  }
