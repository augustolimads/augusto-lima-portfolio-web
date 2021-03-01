import React, { useState, createContext, useContext, useEffect } from "react";

export const FilterContext = createContext(undefined);

const FilterProvider = ({ children }) => {
	const [filterPost, setFilterPost] = useState("");

	function onFilterArticle() {
        const name = 'article';

		if (name === filterPost) {
			setFilterPost("");
		} else {
			setFilterPost(name);
		}
        console.log(filterPost)
	}

	function onFilterPortfolio() {
        const name = 'portfolio';
		if (name === filterPost) {
			setFilterPost("");
		} else {
			setFilterPost(name);
		}
        console.log(filterPost)
	}

	return (
		<FilterContext.Provider
			value={{
				onFilterArticle,
				onFilterPortfolio,
				filterPost,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterProvider;

export const useFilter = () => {
	const context = useContext(FilterContext);
	const { onFilterArticle, onFilterPortfolio, filterPost } = context;
	return {
		onFilterArticle,
		onFilterPortfolio,
		filterPost,
	};
};
