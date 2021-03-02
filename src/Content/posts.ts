interface Posts {
	[index: number]: {
		id: number;
		link: string;
		type: "portfolio" | "article";
		title: string;
		date: string;
		content: string;
		img: string;
		labels: string[];
	};
};

const posts: Posts = [
	{
		id: 1,
		link: "https://app-conta-casal-git-main.augustolimads.vercel.app/",
		type: "portfolio",
		title: "Calculadora de finanças para casal",
		date: "05/12/2020",
		content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin cursus dui eu turpis cursus.`,
		img: "images/app-casal.png",
		labels: ["nextJS", "ReactJS", "TailwindCSS"],
	},
];

export default posts;
