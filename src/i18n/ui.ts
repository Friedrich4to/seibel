export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const routes: Record<string, Record<string, string>> = {
  en: {
    'la-firma': 'the-firm',
    'nuestro-equipo': 'our-team',
    'areas-de-practica': 'practice-areas',
    'carreras': 'careers',
    'compromiso-social': 'social-commitment',
    'recursos': 'resources',
  },
  es: {
    'the-firm': 'la-firma',
    'our-team': 'nuestro-equipo',
    'practice-areas': 'areas-de-practica',
    'careers': 'carreras',
    'social-commitment': 'compromiso-social',
    'resources': 'recursos',
  },
};

export const ui = {
  es: {
    // Nav
    'nav.la-firma': 'La Firma',
    'nav.nuestro-equipo': 'Nuestro Equipo',
    'nav.areas-de-practica': 'Áreas de Práctica',
    'nav.recursos': 'Recursos',
    'nav.carreras': 'Carreras',
    'nav.compromiso-social': 'Compromiso Social',

    // Footer
    'footer.ubicacion': 'Ubicación',
    'footer.direccion-postal': 'Dirección Postal Internacional',
    'footer.piantini': 'Piantini, Santo Domingo,',
    'footer.pais': 'República Dominicana',
    'footer.calle': 'Roberto Pastoriza',
    'footer.numero': 'No.454 - Piso 6',
    'footer.tel': 'Tel:',
    'footer.email': 'Email:',
    'footer.miami-1': 'Piantini, Santo 8374 NW 64th St',
    'footer.miami-2': 'Jet Pack No. 200580',
    'footer.miami-3': 'Miami, FL 33166-2624. EE.UU',

    // Homepage - Hero
    'home.hero.title': 'Transformamos el derecho <br class="md:hidden"> en desarrollo',
    'home.hero.subtitle': 'Más de tres décadas asesorando operaciones corporativas y controversias de alto impacto.',

    // Homepage - Stats
    'home.stats.casos': 'Casos atendidos',
    'home.stats.clientes': 'Clientes asesorados',
    'home.stats.anos': 'Años de experiencia',
    'home.stats.colaboraciones': 'Colaboraciones internacionales',

    // Homepage - La Firma
    'home.firma.title': 'LA FIRMA',
    'home.firma.p1': 'Establecida en Santo Domingo desde 2005, <span class="font-bold">Seibel Henríquez</span> es una firma legal de práctica general que brinda asesoría directa y práctica a clientes empresariales.',
    'home.firma.p2': 'La firma acompaña a sus clientes en entornos exigentes, combinando rigor jurídico, visión de negocio y una ejecución orientada a resultados.',
    'home.firma.cta': 'Conoce más',

    // Homepage - Clients
    'home.clients.title': 'CLIENTES QUE HAN CONFIADO EN NOSOTROS',

    // Homepage - Áreas
    'home.areas.title': 'ÁREAS DE PRÁCTICA',

    // Homepage - Socios
    'home.socios.title': 'SOCIOS',
    'home.socios.seibel-desc': 'Uno de los abogados líderes en Derecho Deportivo en la República Dominicana, con amplia experiencia en litigios civiles, comerciales, penales, laborales y mecanismos de resolución alternativa de conflictos.',
    'home.socios.fernando-desc': 'Más de treinta años de experiencia en la práctica del derecho, con una trayectoria destacada en resolución de controversias y en la estructuración y ejecución de asuntos transaccionales de alta complejidad.',
    'home.socios.ver-perfil': 'Ver perfil',

    // Homepage - Team
    'home.team.title': 'NUESTRO EQUIPO',
    'home.team.desc': 'Una nueva generación de abogados con formación local e internacional, comprometidos con rigor técnico y soluciones prácticas.',

    // Homepage - Alto Impacto
    'home.impacto.title': 'ALTO IMPACTO',
    'home.impacto.ver-proyectos': 'Ver proyectos',

    // Homepage - Práctica Responsable
    'home.practica.title': 'Utilizamos el derecho para contribuir a una mejor sociedad.',
    'home.practica.cta': 'Conoce nuestro compromiso',

    // Homepage - Insights
    'home.insights.title': 'INSIGHTS',
    'home.insights.desc': 'Artículos, análisis y actualidad legal sobre los temas que impactan a las empresas.',
    'home.insights.newsletter': 'Únete a nuestro newsletter - proximamente',

    // La Firma page
    'firm.title': 'La Firma',
    'firm.description': 'Acerca de La Firma Seibel Henríquez',
    'firm.p1': '<strong class="font-semibold">Seibel Henríquez</strong> es una firma de abogados de práctica general establecida en Santo Domingo, República Dominicana, reconocida por su compromiso ético, la lealtad hacia sus clientes y un servicio legal personalizado de alta calidad.',
    'firm.p2': '<strong class="font-semibold">La firma</strong> brinda asesoría legal precisa y práctica, con un enfoque directo y eficiente. Asiste a clientes empresariales en sus necesidades ordinarias y en asuntos de alta complejidad, incluyendo transacciones nacionales e internacionales, fusiones y adquisiciones, comercio internacional y litigios complejos.',
    'firm.p3': 'Fundada en 2005, se ha consolidado como asesor legal de referencia para clientes empresariales e institucionales, locales e internacionales.',
    'firm.enfoque.title': 'ENFOQUE Y ALCANCE',
    'firm.enfoque.p1': 'La práctica de Seibel Henríquez se desarrolla en entornos jurídicos exigentes y altamente regulados, asesorando a empresas y organizaciones que operan en sectores estratégicos de la economía.',
    'firm.enfoque.p2': 'La firma presta especial atención a los retos legales y culturales que enfrentan tanto clientes extranjeros como locales en el marco de transacciones y litigios transnacionales, ofreciendo soluciones jurídicas adaptadas a contextos multijurisdiccionales.',
    'firm.consultoria.title': 'CONSULTORÍA CORPORATIVA',
    'firm.consultoria.p1': 'Seibel Henríquez mantiene relaciones de trabajo y colaboración permanentes con prestigiosas firmas de abogados internacionales, principalmente en los Estados Unidos de América, Canadá, Europa y América Latina.',
    'firm.consultoria.p2': 'La experiencia combinada de la firma en asuntos que involucran múltiples jurisdicciones del sector público y privado, así como organismos bilaterales y multilaterales, junto con la constante exposición de su equipo a transacciones internacionales, consolidan a Seibel Henríquez como una firma con una visión global sólida y consistente.',
    'firm.mision.title': 'Nuestra Misión',
    'firm.mision.p1': 'Ofrecer un servicio legal de calidad y eficiencia que permita construir, junto a nuestros clientes, relaciones duraderas y mutuamente beneficiosas.',
    'firm.banner': 'NUESTRO COMPROMISO VA MÁS ALLÁ',
    'firm.banner.underline': 'DE LA PRÁCTICA PROFESIONAL REMUNERADA',

    // Nuestro Equipo page
    'team-page.title': 'Nuestro equipo',
    'team-page.description': 'Conoce a los socios y colaboradores de la firma.',
    'team-page.socios': 'SOCIOS',
    'team-page.equipo': 'NUESTRO EQUIPO',
    'team-page.seibel-desc': 'Líder en Derecho Deportivo, con experiencia en litigios y asesoría en derecho civil, comercial y laboral. Ofrece soluciones globales a clientes locales e internacionales, con énfasis en seguridad social y resolución de conflictos.',
    'team-page.fernando-desc': 'Abogado con más de 30 años de experiencia en transacciones y resolución de controversias. Asesora a empresas líderes en sectores estratégicos y participa en asuntos de alto impacto institucional.',

    // Áreas de Práctica page
    'areas-page.title': 'Áreas de práctica',
    'areas-page.description': 'Conoce a fondo las áreas en las que ejerce Seibel Henríquez',
    'areas-page.heading': 'Áreas de Práctica',

    // Carreras page
    'careers.title': 'Carreras',
    'careers.description': 'Descubre como es trabajar en nuestra firma.',
    'careers.heading': 'Carreras',
    'careers.p1': 'En <strong class="font-semibold">Seibel Henríquez</strong> formamos abogados que participan activamente en asuntos complejos, con una práctica orientada al rigor técnico, el criterio jurídico y la responsabilidad profesional.',
    'careers.p2': 'Nuestro trabajo se caracteriza por la cercanía con los socios, la participación directa en los asuntos y un alto nivel de exigencia profesional. Valoramos el análisis profundo, la claridad en los criterios y una relación de confianza construida sobre la seriedad y la ética.',
    'careers.p3': 'El ejercicio del derecho en la firma se sustenta en valores democráticos, institucionales y de transparencia, con una clara vocación de impacto positivo en nuestro entorno.',
    'careers.desarrollo': 'DESARROLLO...',
    'careers.desarrollo.p1': 'Desde etapas tempranas, nuestros abogados se integran en equipos que trabajan en operaciones y litigios relevantes, con exposición constante a clientes y a asuntos de alcance local e internacional.',
    'careers.desarrollo.p2': 'El aprendizaje práctico y el crecimiento sostenido forman parte esencial de nuestra cultura.',
    'careers.postulate': 'POSTÚLATE CON NOSOTROS',
    'careers.postulate.desc': 'Recibimos candidaturas de manera continua en:',
    'careers.banner': 'NUESTRO COMPROMISO VA MÁS ALLÁ',
    'careers.banner.underline': 'DE LA PRÁCTICA PROFESIONAL REMUNERADA',

    // Compromiso Social page
    'commitment.title': 'Compromiso social',
    'commitment.description': 'Aprende acerca de nuestro compromiso con una labor social constante',
    'commitment.heading': 'COMPROMISO SOCIAL',
    'commitment.p1': '<strong class="font-semibold">SeibelHenríquez</strong> se identifica con los valores democráticos, la institucionalidad, la transparencia y la solidaridad humana. Fomentamos la participación activa de nuestros colaboradores en la construcción de una mejor Nación.',
    'commitment.p2': 'Es por eso que gran parte del equipo de Seibel & Henríquez participa activamente en diversas organizaciones sociales, comunitarias y empresariales; desde donde promueven acciones y reformas en ámbitos tan diversos como la actividad empresarial responsable, el fortalecimiento del sistema de justicia, la seguridad jurídica, el desarrollo humano y familiar, la salud pública, la educación, la protección del medioambiente, el fortalecimiento de las actividades deportivas tradicionales y por medios electrónicos, la tecnología, entre otros.',
    'commitment.vocacion': 'VOCACIÓN HUMANA',
    'commitment.vocacion.desc': 'Este compromiso social conecta a nuestros colaboradores con la realidad de su entorno lo cual se refleja en un ejercicio profesional más concreto y orientado hacia el valor supremo que lo constituye el ser humano.',
    'commitment.banner': 'NUESTRO COMPROMISO VA MÁS ALLÁ',
    'commitment.banner.underline': 'DE LA PRÁCTICA PROFESIONAL REMUNERADA',

    // Recursos page
    'resources.title': 'Recursos',
    'resources.description': 'Explora nuestros casos de alto impacto',

    // Team member detail
    'member.idiomas': 'IDIOMAS',
    'member.educacion': 'EDUCACION',
    'member.ver-perfil': 'Ver perfil',

    // Shared
    'shared.banner': 'NUESTRO COMPROMISO VA MÁS ALLÁ',
    'shared.banner.underline': 'DE LA PRÁCTICA PROFESIONAL REMUNERADA',
  },
  en: {
    // Nav
    'nav.la-firma': 'The Firm',
    'nav.nuestro-equipo': 'Our Team',
    'nav.areas-de-practica': 'Practice Areas',
    'nav.recursos': 'Resources',
    'nav.carreras': 'Careers',
    'nav.compromiso-social': 'Social Commitment',

    // Footer
    'footer.ubicacion': 'Location',
    'footer.direccion-postal': 'International Mailing Address',
    'footer.piantini': 'Piantini, Santo Domingo,',
    'footer.pais': 'Dominican Republic',
    'footer.calle': 'Roberto Pastoriza',
    'footer.numero': 'No.454 - 6th Floor',
    'footer.tel': 'Phone:',
    'footer.email': 'Email:',
    'footer.miami-1': 'Piantini, Santo 8374 NW 64th St',
    'footer.miami-2': 'Jet Pack No. 200580',
    'footer.miami-3': 'Miami, FL 33166-2624. USA',

    // Homepage - Hero
    'home.hero.title': 'We transform law <br class="md:hidden"> into development',
    'home.hero.subtitle': 'Over three decades advising corporate operations and high-impact disputes.',

    // Homepage - Stats
    'home.stats.casos': 'Cases handled',
    'home.stats.clientes': 'Clients advised',
    'home.stats.anos': 'Years of experience',
    'home.stats.colaboraciones': 'International collaborations',

    // Homepage - La Firma
    'home.firma.title': 'THE FIRM',
    'home.firma.p1': 'Established in Santo Domingo since 2005, <span class="font-bold">Seibel Henríquez</span> is a full-service law firm that provides direct, practical counsel to corporate clients.',
    'home.firma.p2': 'The firm accompanies its clients in demanding environments, combining legal rigor, business vision, and results-oriented execution.',
    'home.firma.cta': 'Learn more',

    // Homepage - Clients
    'home.clients.title': 'CLIENTS WHO HAVE TRUSTED US',

    // Homepage - Áreas
    'home.areas.title': 'PRACTICE AREAS',

    // Homepage - Socios
    'home.socios.title': 'PARTNERS',
    'home.socios.seibel-desc': 'One of the leading attorneys in Sports Law in the Dominican Republic, with extensive experience in civil, commercial, criminal, and labor litigation, as well as alternative dispute resolution mechanisms.',
    'home.socios.fernando-desc': 'Over thirty years of experience in the practice of law, with a distinguished track record in dispute resolution and in the structuring and execution of highly complex transactional matters.',
    'home.socios.ver-perfil': 'View profile',

    // Homepage - Team
    'home.team.title': 'OUR TEAM',
    'home.team.desc': 'A new generation of attorneys with local and international training, committed to technical rigor and practical solutions.',

    // Homepage - Alto Impacto
    'home.impacto.title': 'HIGH IMPACT',
    'home.impacto.ver-proyectos': 'View projects',

    // Homepage - Práctica Responsable
    'home.practica.title': 'We use the law to contribute to a better society.',
    'home.practica.cta': 'Learn about our commitment',

    // Homepage - Insights
    'home.insights.title': 'INSIGHTS',
    'home.insights.desc': 'Articles, analysis, and legal updates on the issues that impact businesses.',
    'home.insights.newsletter': 'Join our newsletter - coming soon',

    // La Firma page
    'firm.title': 'The Firm',
    'firm.description': 'About the Firm Seibel Henríquez',
    'firm.p1': '<strong class="font-semibold">Seibel Henríquez</strong> is a full-service law firm established in Santo Domingo, Dominican Republic, recognized for its ethical commitment, loyalty to its clients, and high-quality personalized legal service.',
    'firm.p2': '<strong class="font-semibold">The firm</strong> provides precise and practical legal counsel, with a direct and efficient approach. It assists corporate clients in their ordinary needs and in highly complex matters, including national and international transactions, mergers and acquisitions, international trade, and complex litigation.',
    'firm.p3': 'Founded in 2005, it has established itself as a benchmark legal advisor for corporate and institutional clients, both local and international.',
    'firm.enfoque.title': 'APPROACH AND SCOPE',
    'firm.enfoque.p1': 'Seibel Henríquez\'s practice develops in demanding and highly regulated legal environments, advising companies and organizations operating in strategic sectors of the economy.',
    'firm.enfoque.p2': 'The firm pays special attention to the legal and cultural challenges faced by both foreign and local clients in the context of transnational transactions and litigation, offering legal solutions adapted to multi-jurisdictional contexts.',
    'firm.consultoria.title': 'CORPORATE CONSULTING',
    'firm.consultoria.p1': 'Seibel Henríquez maintains permanent working and collaborative relationships with prestigious international law firms, primarily in the United States of America, Canada, Europe, and Latin America.',
    'firm.consultoria.p2': 'The firm\'s combined experience in matters involving multiple jurisdictions in both the public and private sectors, as well as bilateral and multilateral organizations, together with its team\'s constant exposure to international transactions, consolidate Seibel Henríquez as a firm with a solid and consistent global vision.',
    'firm.mision.title': 'Our Mission',
    'firm.mision.p1': 'To provide a quality and efficient legal service that enables us to build, together with our clients, lasting and mutually beneficial relationships.',
    'firm.banner': 'OUR COMMITMENT GOES BEYOND',
    'firm.banner.underline': 'PAID PROFESSIONAL PRACTICE',

    // Nuestro Equipo page
    'team-page.title': 'Our Team',
    'team-page.description': 'Meet the partners and associates of the firm.',
    'team-page.socios': 'PARTNERS',
    'team-page.equipo': 'OUR TEAM',
    'team-page.seibel-desc': 'Leader in Sports Law, with experience in litigation and counsel in civil, commercial, and labor law. Provides global solutions to local and international clients, with emphasis on social security and dispute resolution.',
    'team-page.fernando-desc': 'Attorney with over 30 years of experience in transactions and dispute resolution. Advises leading companies in strategic sectors and participates in matters of high institutional impact.',

    // Áreas de Práctica page
    'areas-page.title': 'Practice Areas',
    'areas-page.description': 'Explore in depth the practice areas of Seibel Henríquez',
    'areas-page.heading': 'Practice Areas',

    // Carreras page
    'careers.title': 'Careers',
    'careers.description': 'Discover what it\'s like to work at our firm.',
    'careers.heading': 'Careers',
    'careers.p1': 'At <strong class="font-semibold">Seibel Henríquez</strong> we train attorneys who actively participate in complex matters, with a practice oriented towards technical rigor, legal judgment, and professional responsibility.',
    'careers.p2': 'Our work is characterized by closeness with the partners, direct participation in matters, and a high level of professional standards. We value deep analysis, clarity in criteria, and a relationship of trust built on seriousness and ethics.',
    'careers.p3': 'The practice of law at the firm is grounded in democratic, institutional, and transparency values, with a clear vocation for positive impact in our environment.',
    'careers.desarrollo': 'DEVELOPMENT...',
    'careers.desarrollo.p1': 'From early stages, our attorneys join teams working on relevant operations and litigation, with constant exposure to clients and matters of local and international scope.',
    'careers.desarrollo.p2': 'Practical learning and sustained growth are an essential part of our culture.',
    'careers.postulate': 'APPLY WITH US',
    'careers.postulate.desc': 'We receive applications on an ongoing basis at:',
    'careers.banner': 'OUR COMMITMENT GOES BEYOND',
    'careers.banner.underline': 'PAID PROFESSIONAL PRACTICE',

    // Compromiso Social page
    'commitment.title': 'Social Commitment',
    'commitment.description': 'Learn about our commitment to ongoing social responsibility',
    'commitment.heading': 'SOCIAL COMMITMENT',
    'commitment.p1': '<strong class="font-semibold">SeibelHenríquez</strong> identifies with democratic values, institutionality, transparency, and human solidarity. We encourage the active participation of our team members in building a better Nation.',
    'commitment.p2': 'That is why a large part of the Seibel & Henríquez team actively participates in various social, community, and business organizations; from which they promote actions and reforms in areas as diverse as responsible business activity, strengthening the justice system, legal security, human and family development, public health, education, environmental protection, strengthening traditional and electronic sports activities, technology, among others.',
    'commitment.vocacion': 'HUMAN VOCATION',
    'commitment.vocacion.desc': 'This social commitment connects our team members with the reality of their environment, which is reflected in a more concrete professional practice oriented towards the supreme value that constitutes the human being.',
    'commitment.banner': 'OUR COMMITMENT GOES BEYOND',
    'commitment.banner.underline': 'PAID PROFESSIONAL PRACTICE',

    // Recursos page
    'resources.title': 'Resources',
    'resources.description': 'Explore our high-impact cases',

    // Team member detail
    'member.idiomas': 'LANGUAGES',
    'member.educacion': 'EDUCATION',
    'member.ver-perfil': 'View profile',

    // Shared
    'shared.banner': 'OUR COMMITMENT GOES BEYOND',
    'shared.banner.underline': 'PAID PROFESSIONAL PRACTICE',
  },
} as const;
