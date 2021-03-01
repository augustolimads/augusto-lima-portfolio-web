import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/components/ResponsiveBar.module.css";
import { HiDocumentText, HiMenu, HiPhotograph } from "react-icons/hi";
import { useResponsiveMenu } from "../contexts/ResponsiveContext";
export default function ResponsiveBar() {
	const [selectedFilter, setSelectedFilter] = useState<string>("");
	const { handleMenuActive } = useResponsiveMenu();

	function handleSelectedFilter(name: string) {
		if (name === selectedFilter) {
			setSelectedFilter("");
		} else {
			setSelectedFilter(name);
		}
	}

	return (
		<header className={style.responsiveBar}>
			<Link href="/">
				<a>
					<img src="icons/logo.svg" alt="" />
				</a>
			</Link>
			<button onClick={handleMenuActive}>
				<HiMenu />
			</button>
		</header>
	);
}
