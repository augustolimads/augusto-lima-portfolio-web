import React, { useState, createContext, useContext, useEffect } from "react";

export const ResponsiveContext = createContext(undefined);

const ResponsiveProvider = ({ children }) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    
    function handleMenuActive(){
		setMenuActive(!menuActive)
	}

	return (
		<ResponsiveContext.Provider
			value={{
				handleMenuActive,
                menuActive
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
        menuActive
	} = context;
	return {
		handleMenuActive,
        menuActive
	};
};
