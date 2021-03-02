import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "../styles/components/Sidebar.module.css";
import { HiMenu, HiSearch, HiPhotograph, HiDocumentText } from "react-icons/hi";
import data from "../Content/data";
import { useResponsiveMenu } from "../contexts/ResponsiveContext";
import animation from "../styles/animations/Slider.module.css";
import { useFilter } from "../contexts/FilterContext";

export default function Sidebar() {
	const { menuActive, animationSlider } = useResponsiveMenu();
	const { onFilterArticle, onFilterPortfolio, filterPost } = useFilter();

	return (
		<div className={menuActive ? style.visible : style.invisible}>
			<div className={animation[animationSlider]} style={{ zIndex: 10 }}>
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
							<li onClick={onFilterArticle}>
								<div
									style={{
										width:
											filterPost === "article"
												? ".5rem"
												: 0,
									}}
								></div>
								<i>
									<HiDocumentText />
								</i>
								<span>Artigos</span>
							</li>
							<li onClick={onFilterPortfolio}>
								<div
									style={{
										width:
											filterPost === "portfolio"
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
		</div>
	);
}
