import React, { useState } from 'react'
import './Search.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'


function Search({ hideButtons = false }) {
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState('')
	const history = useHistory();

	const search = e => {
		e.preventDefault();


		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input
		})


		history.push('/search')
	};


	return (
		<>
		<form className='search'>
			<div className="search__input">
				<SearchOutlinedIcon className="search__inputIcon"/>
				<input value={input} onChange={e => setInput(e.target.value)}/>
				<MicNoneOutlinedIcon/>
			</div>

			{!hideButtons ? (
				<div className="search__buttons">
				<Button type="submit" onClick={search} variant="outlined">Search Results</Button>
				<Button variant="outlined">I'm Felling Lucky</Button>
			</div>
			) : (
				<div className="search__buttons">
				<Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Search Results</Button>
				<Button className="search__buttonsHidden" variant="outlined">I'm Felling Lucky</Button>
			</div>
			
			)
		}
		</form>
		</>

	)
}

export default Search
