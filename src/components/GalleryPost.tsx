import React from "react";
import style from "../styles/components/GalleryPost.module.css";
import Label from "./Label";

export default function GalleryPost({ post }) {
	return (
		<div className={style.galleryPost} key={post.id}>
			<a href={post.link} target="_blank">
				<div className={style.image}>
					<img src={post.img} alt="post" />
				</div>
			</a>
			<section>
				<div>
					<h2>{post.title}</h2>
					<span>{post.date}</span>
				</div>
				<p>{post.content}</p>
				<div className={style.groupButton}>
					<a href={post.link} target="_blank">Github</a>
					<a href={post.link} target="_blank">Demo</a>
				</div>
				{/* <div className={style.tagList}>
						{post.labels.map((label) => (
							<Label>{label}</Label>
						))}
					</div> */}
			</section>

		</div>
	);
}
