import React, { useState } from "react";
import GalleryPost from "../components/GalleryPost";
import Head from "next/head";
import posts from "../Content/posts";
import { useFilter } from "../contexts/FilterContext";
import EmptyList from "../components/EmptyList";

export default function Home() {
	const { filterPost } = useFilter();

	return (
		<>
			<Head>
				<title>Bem vindo!</title>
			</Head>
			{filterPost &&
				posts
					.filter((el) => el.type === filterPost)
					.map((post) => <GalleryPost post={post} />)}
			{!filterPost && posts.map((post) => <GalleryPost post={post} />)}
			{filterPost && posts.filter((el) => el.type === filterPost).length === 0 && <EmptyList />}
		</>
	);
}
