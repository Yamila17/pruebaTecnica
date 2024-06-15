import React,{useState }from 'react'
import SearchBar from './../components/searchbar/SearchBar'
import SimpleCard from '../components/simpleCard/SimpleCard'


const LayoutHome = () => {
  const [results, setResults] = useState([]);

  return (
    <>
    <SearchBar showResults={results.length > 0} />
    {results.length > 0 && <SimpleCard />}
    </>
  )
}

export default LayoutHome
