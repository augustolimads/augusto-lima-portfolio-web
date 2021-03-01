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
				{children}
			</main>
		</div>
	);
}
