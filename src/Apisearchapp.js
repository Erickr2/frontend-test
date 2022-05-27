import React, { useEffect, useState } from 'react'
import {Header} from '../src/components/ui/Header'
import {CharacterGrid} from '../src/components/charactres/characterGrid'
import Search from '../src/components/ui/Search'
import  '../src/styles/index.css';
import axios from "axios";


export const Apisearchapp = () => {

    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('')

    useEffect(() => {
     const fetchItmes = async () => {
         const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

         //console.log(res.data)
         setItems(res.data)
         setIsLoading(false)
     } 
     fetchItmes()
    }, [query])
    

  return (
    <>

     <div className='container'>
         <Header />
         <Search getQuery={(q) => setQuery(q)}/>
         <CharacterGrid isLoading={isLoading} items={items}/>
     </div>

  
   
    </>
  )
}

export default Apisearchapp
