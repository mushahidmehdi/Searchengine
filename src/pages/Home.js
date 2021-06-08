import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Search from '../Search';


function Home() {
	return (
		<div className='home'>
			<div className="home__header">
				<div className="home__headerLeft">
					<Link to='/about'>About</Link>
					<Link to='/store'>Store</Link>
				</div>
				<div className="home__headerRight">
					<Link to='/images'>Gmail</Link>
					<PersonOutlineOutlinedIcon/>
				</div>
			</div>
			<div className="home__body">
				<img
					src="https://user-images.githubusercontent.com/66418035/121262687-347e5200-c8bd-11eb-92db-c43e5faa8584.png"
					alt="HagiaSearchLogo"/>
				<div className="home__inputContainer">
					<Search/>
				</div>
			</div>
		</div>
	)
}

export default Home
