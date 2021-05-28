import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import jsCookie from 'js-cookie';

const languages = [
	{ code: 'en', name: 'English', country_code: 'gb' },
	{ code: 'fr', name: 'Français', country_code: 'fr' },
	{ code: 'ar', name: 'العربية', country_code: 'sa', dir: 'rtl' },
]

function App() {
	const currentLanguageCode = jsCookie.get('i18next') || 'en';
	const currentLanguage = languages.find(language => language.code === currentLanguageCode);
	const { t } = useTranslation();

	useEffect(() => {
		document.body.dir = currentLanguage?.dir ?? 'ltr';
		document.title = t('app_title');
	}, [currentLanguage?.dir, t]);

	return (
		<div className="container">
			<div className="d-flex justify-content-end">
				<div className="dropdown">
					<button className="btn btn-link dropdown-toggle" id="dropdownMenuLink"
					        data-bs-toggle="dropdown" aria-expanded="false">
						Language
					</button>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{languages.map(language => (
							<li key={language.code}>
								<button className="dropdown-item" onClick={() => i18next.changeLanguage(language.code)}
								        disabled={currentLanguageCode === language.code}>
									<span className={`flag-icon flag-icon-${language.country_code} mx-2`}
									      style={{ opacity: currentLanguageCode === language.code ? 0.5 : 1 }}/>{language.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="d-flex flex-column align-items-start">
				<h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
				<p>{t('days_since_release', { number_of_days: '34' })}</p>
			</div>
		</div>
	)
}

export default App;
