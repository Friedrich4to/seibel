CREATE TABLE IF NOT EXISTS articles (
  id             TEXT PRIMARY KEY,
  slug           TEXT UNIQUE NOT NULL,
  order_num      INTEGER NOT NULL DEFAULT 0,
  title_es       TEXT NOT NULL,
  title_en       TEXT,
  description_es TEXT NOT NULL,
  description_en TEXT,
  image_key      TEXT NOT NULL,
  image_alt_es   TEXT NOT NULL,
  image_alt_en   TEXT,
  pdf_key        TEXT NOT NULL,
  created_at     TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at     TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Artículo existente migrado desde content collection
-- Los archivos deben subirse a R2 con: wrangler r2 object put seibel-recursos/images/dispute-resolution-2026-lg.jpg --file=public/assets/recursos/dispute-resolution-2026-lg.jpg
-- y: wrangler r2 object put seibel-recursos/pdfs/Chambers_Dispute-Resolution-2026_010_dominican_republic.pdf --file=public/recursos/Chambers_Dispute-Resolution-2026_010_dominican_republic.pdf
INSERT OR IGNORE INTO articles (id, slug, order_num, title_es, title_en, description_es, description_en, image_key, image_alt_es, image_alt_en, pdf_key)
VALUES (
  lower(hex(randomblob(16))),
  'resolucion-de-disputas-comerciales',
  1,
  'Dispute Resolution - Chambers & Partners Global Guides 2026 - Dominican Republic',
  'Dispute Resolution - Chambers & Partners Global Guides 2026 - Dominican Republic',
  'Descubre nuestra contribución como líderes expertos en República Dominicana a la Guía Global de Resolución de Disputas 2026 de Chambers and Partners.

Nuestros capítulos abordan la práctica legal, las tendencias y la evolución del sector, ofreciendo una visión integral del espectro completo de la resolución de disputas. Comparamos el litigio, el arbitraje y los métodos alternativos de solución de conflictos, analizando desde los plazos y el procedimiento judicial hasta la confidencialidad, las medidas cautelares y definitivas, los daños y perjuicios, el financiamiento y las costas. También cubrimos las acciones colectivas, la divulgación, el privilegio legal, la ejecución de sentencias y laudos, y los desafíos emergentes que plantea la inteligencia artificial.',
  'Discover our contribution as expert leaders in the Dominican Republic to the Chambers and Partners Global Dispute Resolution Guide 2026.

Our chapters address legal practice, trends, and sector developments, offering a comprehensive overview of the full spectrum of dispute resolution. We compare litigation, arbitration, and alternative dispute resolution methods, analyzing from limitation periods and court procedure to confidentiality, interim and final relief, damages, funding and costs. We also cover class actions, disclosure, legal privilege, enforcement of judgments and awards, and the emerging challenges posed by artificial intelligence.',
  'images/dispute-resolution-2026-lg.jpg',
  'Chambers Dispute Resolution 2026',
  'Chambers Dispute Resolution 2026',
  'pdfs/Chambers_Dispute-Resolution-2026_010_dominican_republic.pdf'
);
