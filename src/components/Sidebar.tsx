import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/components/Sidebar.module.css";
import { HiMenu, HiSearch, HiPhotograph, HiDocumentText } from "react-icons/hi";
import data from "../utils/data";
import { useResponsiveMenu } from "../contexts/ResponsiveContext";

export default function Sidebar() {
	const [selectedFilter, setSelectedFilter] = useState<string>("");
	const {menuActive} = useResponsiveMenu();

	function handleSelectedFilter(name: string) {
		if (name === selectedFilter) {
			setSelectedFilter("");
		} else {
			setSelectedFilter(name);
		}
	}

	return (
		<div className={menuActive ? '' : style.invisible}>
			<aside className={style.sidebar}>
				<section className={style.header}>
					<Link href="/">
						<a>
							<img src="icons/logo.svg" alt="" />
						</a>
					</Link>
				</section>

				<section className={style.aboutMe}>
					<img src="images/augusto.jpg" alt="minha foto" />
					<p>{data.bio}</p>
					<a href={data.linkedin} target="_blank">
						<p>LinkedIn</p>
					</a>
					<a href={data.github} target="_blank">
						<p>Github</p>
					</a>
					<a href={data.resume} target="_blank">
						<p>Currículo</p>
					</a>

					<hr />
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
										selectedFilter === "ARTIGOS"
											? ".5rem"
											: 0,
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
			</aside>
		</div>
	);
}
