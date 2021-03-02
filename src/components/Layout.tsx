import React from "react";
import Sidebar from "./Sidebar";
import style from "../styles/components/Layout.module.css";
import ResponsiveBar from "./ResponsiveBar";

export default function Layout({ children }) {
	return (
		<div className={style.container}>
			<ResponsiveBar />
			<Sidebar />
			<main className={style.block}>
				<section className={style.masonry}>{children}</section>
				<footer>
					<p>
						Desenvolvido por ©Augusto Lima -{" "}
						{new Date().getFullYear()}
					</p>
				</footer>
			</main>
		</div>
	);
}
