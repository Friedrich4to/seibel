export type NewsletterLang = 'es' | 'en';

interface NewsletterTranslations {
	fields: {
		name:     { label: string; placeholder: string };
		email:    { label: string; placeholder: string };
		company:  { label: string; placeholder: string };
		position: { label: string; placeholder: string };
		country:  { label: string; defaultOption: string };
	};
	submit: string;
}

export const newsletterI18n: Record<NewsletterLang, NewsletterTranslations> = {
	es: {
		fields: {
			name:     { label: 'Nombre',  placeholder: 'Tu nombre completo' },
			email:    { label: 'Correo',  placeholder: 'correo@empresa.com' },
			company:  { label: 'Empresa', placeholder: 'Nombre de tu empresa' },
			position: { label: 'Cargo',   placeholder: 'Tu cargo o posición' },
			country:  { label: 'País',    defaultOption: 'Selecciona tu país' },
		},
		submit: 'Suscribirme',
	},
	en: {
		fields: {
			name:     { label: 'Name',     placeholder: 'Your full name' },
			email:    { label: 'E-mail',   placeholder: 'email@company.com' },
			company:  { label: 'Company',  placeholder: 'Your company name' },
			position: { label: 'Position', placeholder: 'Your job title' },
			country:  { label: 'Country',  defaultOption: 'Select your country' },
		},
		submit: 'Subscribe',
	},
} as const;
