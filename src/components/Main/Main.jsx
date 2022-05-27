import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "../../pages/Details/MovieDetails";
import SeriesDetails from "../../pages/Details/SeriesDetails/SeriesDetails";
import Home from "../../pages/Home/Home";
import Movies from "../../pages/Movies/Movies";
import Series from "../../pages/Series/Series";

function Main() {
	return (
		<main>
			<Routes>
				<Route index element={<Home />} />
				<Route path="Movies" element={<Movies />} />
				<Route path="Movies/:id" element={<MovieDetails />} />
				<Route path="Series" element={<Series />} />
				<Route path="Series/:id" element={<SeriesDetails />} />
			</Routes>
		</main>
	);
}

export default Main;
