import React, { useState } from "react";
import GalleryPost from "../components/GalleryPost";
import Head from "next/head";
import posts from "../utils/posts";
import { useFilter } from "../contexts/FilterContext";

export default function Home() {
	const { filterPost } = useFilter();

	return (
		<>
			<Head>
				<title>Bem vindo!</title>
			</Head>
			{filterPost && posts.filter((el) => el.type === filterPost)
				.map((post) => (
					<GalleryPost post={post} />
				))}
			{!filterPost && posts.map((post) => (
					<GalleryPost post={post} />
				))}
		</>
	);
}
