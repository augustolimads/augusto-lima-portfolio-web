import React from "react";
import Link from "next/link";
import style from "../styles/components/Sidebar.module.css";
import { HiMenu, HiSearch, HiPhotograph, HiDocumentText } from "react-icons/hi";
import data from "../utils/data";

export default function Sidebar() {
	return (
		<aside className={style.sidebar}>
			<section className={style.header}>
				<Link href="/">
					<a>
						<img src="icons/logo.svg" alt="" />
					</a>
				</Link>
				<div>
					<i>
						<HiMenu />
					</i>
				</div>
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
					<li>
						<div style={{ width: ".5rem" }}></div>
						<i>
							<HiDocumentText />
						</i>
						<span>Artigos</span>
					</li>
					<li>
						<div style={{ width: ".5rem" }}></div>
						<i>
							<HiPhotograph />
						</i>
						<span>Portfólio</span>
					</li>
				</ul>
			</section>
		</aside>
	);
}
