import FilterContext from "./FilterContext";
import ResponsiveContext from "./ResponsiveContext";

export default function Storage({ children }) {
	return (
		<FilterContext>
			<ResponsiveContext>{children}</ResponsiveContext>
		</FilterContext>
	);
}
