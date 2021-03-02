import React from "react";
import style from "../styles/components/GalleryPost.module.css";
import Label from "./Label";

export default function GalleryPost({ post }) {
	return (
		<div className={style.galleryPost} key={post.id}>
			<div className={style.image}>
				<img src={post.img} alt="post" />
			</div>
			<section>
				<div>
					<h2>{post.title}</h2>
					<span>{post.time}</span>
				</div>
				<p>{post.content}</p>
				<div className={style.tagList}>
					{post.labels.map((label) => (
						<Label>{label}</Label>
					))}
				</div>
			</section>
		</div>
	);
}
