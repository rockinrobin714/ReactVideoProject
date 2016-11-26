import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCmIv1u3TcrSMHTh1TlP0BuQXhKdDRpmnI';



// Create a new component.
//This component should produce some html
class App extends Component {
	constructor(props){
		super(props);
		this.state = { videos: [] };
		YTSearch({key: API_KEY, term: 'stupid cats'}, (videos) => {
			this.setState({videos});
//because the keyword matches,
//this resolves as this.setState({videos:videos})
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}
//Take this component's generated HTML and 
//put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));