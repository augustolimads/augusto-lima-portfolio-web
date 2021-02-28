import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/components/ResponsiveBar.module.css";
import { HiDocumentText, HiMenu, HiPhotograph } from "react-icons/hi";
import { useResponsiveMenu } from "../contexts/ResponsiveContext";
export default function ResponsiveBar() {
	const [selectedFilter, setSelectedFilter] = useState<string>("");
	const {handleMenuActive} = useResponsiveMenu();

	function handleSelectedFilter(name: string) {
		if (name === selectedFilter) {
			setSelectedFilter("");
		} else {
			setSelectedFilter(name);
		}
	}

	return (
		<header className={style.responsiveBar}>
			<section className={style.header}>
				<Link href="/">
					<a>
						<img src="icons/logo.svg" alt="" />
					</a>
				</Link>
				<button onClick={handleMenuActive}>
					<HiMenu />
				</button>
			</section>

			<section className={style.filter}>
				{/* <div className={style.search}>
					<label htmlFor="search">
						<i>
							<HiSearch />
						</i>
					</label>
					<input
						id="search"
						name="search"
						type="text"
						placeholder="Pesquisar tag"
					/>
				</div> */}
				<ul>
					<li onClick={() => handleSelectedFilter("ARTIGOS")}>
						<div
							style={{
								width:
									selectedFilter === "ARTIGOS" ? ".5rem" : 0,
							}}
						></div>
						<i>
							<HiDocumentText />
						</i>
						<span>Artigos</span>
					</li>
					<li onClick={() => handleSelectedFilter("PORTFOLIO")}>
						<div
							style={{
								width:
									selectedFilter === "PORTFOLIO"
										? ".5rem"
										: 0,
							}}
						></div>
						<i>
							<HiPhotograph />
						</i>
						<span>Portfólio</span>
					</li>
				</ul>
			</section>
		</header>
	);
}
