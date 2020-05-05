import React from 'react';
import './App.css';
import CatList from './components/CatList';
import CatBox from './components/CatBox';



function App() {
	return (	
			<div className="App">
				<h2>Cats</h2>
				<CatList />
				<CatBox />
			</div>
	
	);
}

export default App;