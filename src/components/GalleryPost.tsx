import React from "react";
import style from "../styles/components/GalleryPost.module.css";
import Label from "./Label";

export default function GalleryPost() {
	return (
		<div className={style.galleryPost}>
			<section>
				<div>
					<h2>Nome do projeto</h2>
					<span>1 ano atrás</span>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Proin cursus dui eu turpis cursus, id dapibus quam
					efficitur. Proin urna dolor, tincidunt non magna eget,
					posuere auctor tortor.
				</p>
				<div className={style.tagList}>
					<Label>tag01</Label>
					<Label>tag02</Label>
					<Label>tag03</Label>
					<Label>tag04</Label>					
				</div>
			</section>
			<img src="images/augusto.jpg" alt="post" />
		</div>
	);
}
