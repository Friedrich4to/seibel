export interface Article {
	id: string;
	slug: string;
	order_num: number;
	title_es: string;
	title_en: string | null;
	description_es: string;
	description_en: string | null;
	image_key: string;
	image_alt_es: string;
	image_alt_en: string | null;
	pdf_key: string;
	created_at: string;
	updated_at: string;
}

export function getTitle(article: Article, lang: 'es' | 'en'): string {
	return (lang === 'en' && article.title_en) ? article.title_en : article.title_es;
}

export function getDescription(article: Article, lang: 'es' | 'en'): string {
	return (lang === 'en' && article.description_en) ? article.description_en : article.description_es;
}

export function getImageAlt(article: Article, lang: 'es' | 'en'): string {
	return (lang === 'en' && article.image_alt_en) ? article.image_alt_en : article.image_alt_es;
}

export async function getArticles(db: D1Database, lang: 'es' | 'en'): Promise<Article[]> {
	const result = await db.prepare('SELECT * FROM articles ORDER BY order_num ASC').all<Article>();
	return result.results;
}

export async function getArticle(db: D1Database, slug: string): Promise<Article | null> {
	const result = await db.prepare('SELECT * FROM articles WHERE slug = ?').bind(slug).first<Article>();
	return result ?? null;
}

export async function getArticleById(db: D1Database, id: string): Promise<Article | null> {
	const result = await db.prepare('SELECT * FROM articles WHERE id = ?').bind(id).first<Article>();
	return result ?? null;
}

export async function createArticle(db: D1Database, data: {
	slug: string;
	order_num: number;
	title_es: string;
	title_en: string | null;
	description_es: string;
	description_en: string | null;
	image_key: string;
	image_alt_es: string;
	image_alt_en: string | null;
	pdf_key: string;
}): Promise<string> {
	const id = crypto.randomUUID();
	await db.prepare(`
		INSERT INTO articles (id, slug, order_num, title_es, title_en, description_es, description_en, image_key, image_alt_es, image_alt_en, pdf_key)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
	`).bind(
		id, data.slug, data.order_num,
		data.title_es, data.title_en,
		data.description_es, data.description_en,
		data.image_key, data.image_alt_es, data.image_alt_en,
		data.pdf_key
	).run();
	return id;
}

export async function updateArticle(db: D1Database, id: string, data: {
	order_num: number;
	title_es: string;
	title_en: string | null;
	description_es: string;
	description_en: string | null;
	image_key: string;
	image_alt_es: string;
	image_alt_en: string | null;
	pdf_key: string;
}): Promise<void> {
	await db.prepare(`
		UPDATE articles SET
			order_num = ?, title_es = ?, title_en = ?,
			description_es = ?, description_en = ?,
			image_key = ?, image_alt_es = ?, image_alt_en = ?,
			pdf_key = ?, updated_at = datetime('now')
		WHERE id = ?
	`).bind(
		data.order_num, data.title_es, data.title_en,
		data.description_es, data.description_en,
		data.image_key, data.image_alt_es, data.image_alt_en,
		data.pdf_key, id
	).run();
}

export async function deleteArticle(db: D1Database, id: string): Promise<void> {
	await db.prepare('DELETE FROM articles WHERE id = ?').bind(id).run();
}
