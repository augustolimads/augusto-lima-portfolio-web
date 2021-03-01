import React, { useState, createContext, useContext, useEffect } from "react";

export const ResponsiveContext = createContext(undefined);

const ResponsiveProvider = ({ children }) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
	const [animationSlider, setAnimationSlider] = useState('');
    
    function handleMenuActive(){
		if(menuActive) {
			setAnimationSlider('exit')
			setTimeout(() => {
				setMenuActive(!menuActive)
			},200)
		} else {
			setAnimationSlider('entrance')
			setMenuActive(!menuActive)
		}
	}

	return (
		<ResponsiveContext.Provider
			value={{
				handleMenuActive,
                menuActive,
				animationSlider
			}}
		>
			{children}
		</ResponsiveContext.Provider>
	);
};

export default ResponsiveProvider;

export const useResponsiveMenu = () => {
	const context = useContext(ResponsiveContext);
	const {
		handleMenuActive,
        menuActive,
		animationSlider
	} = context;
	return {
		handleMenuActive,
        menuActive,
		animationSlider
	};
};
