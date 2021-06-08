import React from 'react'
import './SearchPage.css'
import { useStateValue } from "./StateProvider"
import useGoogleSearch from './useGoogleSearch';
import Response from './response'
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	//Live API call
	const { data } = useGoogleSearch(term);
	
	//const data = Response;

	return (
		<div className="searchPage">
			<div className="searchPage__header">
				<Link to="/">
				<img
				className="searchPage__logo"
				src="https://user-images.githubusercontent.com/66418035/121262687-347e5200-c8bd-11eb-92db-c43e5faa8584.png"
				alt=""
				/>
				</Link>	
				<div className="searchPage__headerBody">
					<Search hideButtons />
					<div className="searchPage__options">
						<div className="searchPage__optionsLeft">
							<div className="searchPage__option">
								<SearchOutlinedIcon	/>
									<Link to="/all">All</Link>
							</div>
							<div className="searchPage__option">
								<ImageOutlinedIcon/>
									<Link to="/images">Images</Link>
							</div>
							<div className="searchPage__option">
								<OndemandVideoOutlinedIcon	/>
									<Link to="/vedio">Vedio</Link>
							</div>
							<div className="searchPage__option">
								<LocalMallOutlinedIcon	/>
									<Link to="/shopping">Shopping</Link>
							</div>
							<div className="searchPage__option">
								<MapOutlinedIcon/>
									<Link to="/map">Map</Link>
							</div>
							
							<div className="searchPage__option">
								<MoreVertOutlinedIcon/>
									<Link to="/more	">more</Link>
							</div>
						</div>
						<div className="searchPage__optionsRight">
							<div className="searchPage__option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="searchPage__option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{true && (
				<div className="searchPage___results">
					<p className="searchPage__resultCount">
						About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}seconds) for {term}
					</p>
					{	
						data?.items.map(item => 
							<div className="searchPage__result">
								<a href={item.link}>
									{item.pagemap?.cse_image?.length > 0 &&
									 item.pagemap?.cse_image[0]?.src && (
										< img
										className="searchPage__resultImage"
										src={item.pagemap?.cse_image?.length > 0 &&
											item.pagemap?.cse_image[0]?.src}
										alt=""
										/>
									 )}
									
									{item.displayLink}</a>
								<a
								className="searchPage__resultTitle"
								href={item.title} >
									<h2>
										{item.title}
									</h2>
								</a>
								<p className="searchPage__resultSnippet">
								{item.snippet}
								</p>
							</div>
							)
					}
				</div>
			)}
			
		</div>
	)
}

export default SearchPage
