import React, { useState, useEffect } from 'react'
import API_KEY from './Keys'


const CONTEXT_KEY = "9c8b75fde03f8ff29"

const useGoogleSearch = (term) =>  {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async() => {
				fetch(
					`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
				)
				.then(res => res.json())
				.then(res => {
					setData(res)
				})
		}
		fetchData();
	}, [term])
	return { data }
};

export default useGoogleSearch
