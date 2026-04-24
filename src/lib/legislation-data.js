/**
 * Pontos legislativos que aparecem no drawer direito conforme o curso avança.
 * Cada entrada mapeia um slug de lição para os dispositivos legais relevantes.
 */
export const legislationByLesson = {
	'1.1-seguridade-social': [
		{
			type: 'cf',
			ref: 'CF/88, arts. 194–204',
			text: 'Ordem Social — Seguridade Social. Define saúde, previdência e assistência como pilares da seguridade.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 194',
			text: 'A seguridade social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 196',
			text: 'A saúde é direito de todos e dever do Estado.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 201',
			text: 'A previdência social será organizada sob a forma do RGPS, de caráter contributivo e de filiação obrigatória.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 203',
			text: 'A assistência social será prestada a quem dela necessitar, independentemente de contribuição.'
		},
		{
			type: 'lei',
			ref: 'Lei 8.213/91',
			text: 'Dispõe sobre os Planos de Benefícios da Previdência Social — lei de referência para todos os benefícios do RGPS.'
		},
		{
			type: 'lei',
			ref: 'Lei 8.212/91',
			text: 'Dispõe sobre a organização da Seguridade Social e institui Plano de Custeio — define contribuições e financiamento.'
		},
		{
			type: 'lei',
			ref: 'EC 103/2019',
			text: 'Reforma da Previdência — altera regras de aposentadoria, pensão, contribuições e cálculo de benefícios.'
		},
		{
			type: 'lei',
			ref: 'Lei 13.146/2015 (Estatuto da Pessoa com Deficiência)',
			text: 'Institui a Lei Brasileira de Inclusão da Pessoa com Deficiência — impacta o BPC/LOAS e avaliação biopsicossocial.'
		}
	],
	'1.2-principios-constitucionais': [
		{
			type: 'cf',
			ref: 'CF/88, art. 194, parágrafo único',
			text: 'Princípios da seguridade: universalidade, uniformidade, seletividade, irredutibilidade, equidade, diversidade, caráter democrático e descentralizado.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 195',
			text: 'Financiamento da seguridade social por toda a sociedade.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 195, §5º',
			text: 'Nenhum benefício ou serviço da seguridade social poderá ser criado, majorado ou estendido sem a correspondente fonte de custeio total.'
		}
	],
	'1.3-organizacao-rgps-rpps': [
		{
			type: 'cf',
			ref: 'CF/88, art. 201',
			text: 'Regime Geral de Previdência Social — filiação obrigatória, caráter contributivo.'
		},
		{
			type: 'cf',
			ref: 'CF/88, art. 40',
			text: 'Regime Próprio de Previdência Social dos servidores públicos.'
		},
		{
			type: 'decreto',
			ref: 'Decreto 3.048/99',
			text: 'Aprova o Regulamento da Previdência Social.'
		}
	],
	'1.4-previdencia-complementar': [
		{
			type: 'cf',
			ref: 'CF/88, art. 202',
			text: 'O regime de previdência privada, de caráter complementar e organizado de forma autônoma.'
		},
		{
			type: 'lei',
			ref: 'LC 109/2001',
			text: 'Regime de Previdência Complementar — entidades fechadas (EFPC) e abertas (EAPC).'
		},
		{
			type: 'lei',
			ref: 'LC 108/2001',
			text: 'Relação entre a União, Estados, DF e Municípios e suas respectivas entidades fechadas.'
		}
	],
	'2.2-contribuinte-individual': [
		{
			type: 'lei',
			ref: 'Lei 8.213/91, art. 11, V',
			text: 'Define as espécies de contribuinte individual: autônomo, profissional liberal, titular de firma individual, sócio/diretor com pró-labore, síndico remunerado, ministro religioso, garimpeiro, produtor rural > 4 módulos, entre outros.'
		},
		{
			type: 'lei',
			ref: 'Lei 8.213/91, art. 55, §3º',
			text: 'A comprovação de tempo de serviço para efeitos desta Lei só produzirá efeito quando baseada em início de prova material, não admitida prova exclusivamente testemunhal, salvo motivo de força maior ou caso fortuito.'
		},
		{
			type: 'lei',
			ref: 'Lei 8.212/91, art. 21',
			text: 'Alíquotas do CI: 20% (plano normal), 11% (plano simplificado — SM), 5% (MEI e baixa renda — SM).'
		},
		{
			type: 'decreto',
			ref: 'Decreto 3.048/99, art. 216, §26',
			text: 'O síndico ou administrador eleito para exercer atividade de direção condominial, desde que receba remuneração (inclusive isenção de cota condominial), está sujeito ao desconto e recolhimento pelo condomínio, à alíquota de 11%.'
		},
		{
			type: 'jurisprudencia',
			ref: 'STJ, REsp 411.832/RS',
			text: 'Rel. Min. Francisco Falcão. A isenção da taxa condominial concedida ao síndico é juridicamente equiparada a remuneração para fins de incidência de contribuição previdenciária.'
		},
		{
			type: 'jurisprudencia',
			ref: 'TRF1, 8ª Turma, Rel. Leomar Amorim, j. 14/10/2010',
			text: '"É devida a contribuição social sobre o pagamento do pró-labore aos síndicos de condomínios imobiliários, assim como sobre a isenção da taxa condominial devida a eles."'
		},
		{
			type: 'jurisprudencia',
			ref: 'TRF1, CRP/JF, Proc. 0011388-39.2004.4.01.3800, j. 17/06/2020',
			text: '1ª Câmara Regional Previdenciária de Juiz de Fora, Rel. JF Ubirajara Teixeira — reconhece mais de três anos de tempo de contribuição como síndico, aceitando como prova material recibos de remuneração e atas de assembleia (retificação de categoria pelo art. 55, §3º, da Lei 8.213/91).'
		},
		{
			type: 'jurisprudencia',
			ref: 'TRF4, AC 5060653-11.2022.4.04.7000, 10ª Turma, Rel. Leonardo Castanho Mendes, j. 18/11/2025',
			text: 'Consolidou que "o síndico ou administrador eleito para exercer atividade de direção condominial, desde que recebam remuneração", é contribuinte individual obrigatório pelo art. 11, V, "f", da Lei 8.213/91.'
		}
	]
};

/** Gera um id DOM determinístico para um item do drawer a partir do seu `ref` */
export function legislationItemId(ref) {
	const normalized = String(ref)
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
	return `leg-${normalized}`;
}

/** Retorna todos os pontos legislativos acumulados até a lição atual */
export function getLegislationUpTo(currentSlug) {
	const allLessons = Object.keys(legislationByLesson);
	const currentIndex = allLessons.indexOf(currentSlug);
	if (currentIndex === -1) return [];

	const accumulated = [];
	const seen = new Set();

	for (let i = 0; i <= currentIndex; i++) {
		const items = legislationByLesson[allLessons[i]] || [];
		for (const item of items) {
			if (!seen.has(item.ref)) {
				seen.add(item.ref);
				accumulated.push(item);
			}
		}
	}

	return accumulated;
}
