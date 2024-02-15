import MainLayout from "../layouts/MainLayout";
import mme from "../assets/MME_logo.jpg";
import nabu from "../assets/nabu.jpg";

export default function About() {
	return (
		<MainLayout>
			<div className="about-content">
				<h1>About this app</h1>
				<p>For the creation of this app the following sources were used:</p>
				<a href="http://www.mme.hu" target="_blank" rel="noopener noreferrer">
					MME (Hungarian Ornithological and Nature Conservation Society)
				</a>
				<img src={mme} alt="mme" />
				<br />
				<a href="http://www.nabu.de" target="_blank" rel="noopener noreferrer">
					NABU (German Nature And Biodiversity Conservation Union)
				</a>
				<img src={nabu} alt="nabu" />
				<br />
				<a
					href="https://www.allaboutbirds.org"
					target="_blank"
					rel="noopener noreferrer">
					The Cornell Lab of Ornithology
				</a>
				<img
					src="https://www.allaboutbirds.org/news/wp-content/themes/birdpress2/images/cornell-lab-logo.svg"
					alt="The Cornell Lab of Ornithology"
				/>
				<p>
					However, it does not and can not take in account all of the possible
					factors, that may help you come to a decision in the given situation.
					For details, or when in doubt, please consult a wildlife
					rehabilitator, zoo, animal welfare association or a vet.
				</p>
				<p className="footer">Created by Anna Hittaller © 2023</p>
			</div>
		</MainLayout>
	);
}
