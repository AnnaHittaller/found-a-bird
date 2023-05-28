import React, { useState, useEffect } from "react";

import "../styles/searchInput.css";

function SearchInput() {
	const [location, setLocation] = useState("");
	const [translatedQueries, setTranslatedQueries] = useState({
		en: "help for birds",
		fr: "aide aux oiseaux",
		es: "ayuda para las aves",
		de: "Hilfe für Vögel",
		it: "aiuto per l'uccelli",
		hu: "segítség madaraknak",
	});
	const [translatedQuery, setTranslatedQuery] = useState("");

	useEffect(() => {
		const detectUserLanguage = () => {
			const userLanguage = navigator.language || navigator.userLanguage;
			return userLanguage.split("-")[0];
		};

		const translateQuery = async () => {
			const userLanguage = detectUserLanguage();
			if (translatedQueries[userLanguage]) {
				setTranslatedQuery(translatedQueries[userLanguage]);
			} else {
				setTranslatedQuery(translatedQueries.en); // Fallback to English
			}
		};

		translateQuery();
	}, [translatedQueries]);

	const handleSearch = () => {
		const queryToSearch = `${translatedQuery} ${location}`;
		const url = `https://www.google.com/search?q=${encodeURIComponent(
			queryToSearch
		)}`;
		window.open(url, "_blank");
	};

	return (
		<form>
			<label htmlFor="search">
				If you need assistance in finding help, please enter your loaction and
				then click search:
			</label>
			<input
				id="search"
				name="search"
                type="text"
				placeholder="My location is..."
				value={location}
				onChange={(e) => setLocation(e.target.value)}></input>
			<button className="primary" onClick={handleSearch}>
				Where can I get help nearby?
			</button>
		</form>
	);
}

export default SearchInput;
