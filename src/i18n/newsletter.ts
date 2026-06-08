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
	submitting: string;
	success: string;
	errors: {
		already_subscribed: string;
		generic: string;
	};
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
		submitting: 'Enviando...',
		success: '¡Gracias! Te has suscrito correctamente.',
		errors: {
			already_subscribed: 'Este correo ya está suscrito a nuestra lista.',
			generic: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
		},
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
		submitting: 'Sending...',
		success: 'Thank you! You have been successfully subscribed.',
		errors: {
			already_subscribed: 'This email is already subscribed to our list.',
			generic: 'An error occurred. Please try again.',
		},
	},
} as const;
