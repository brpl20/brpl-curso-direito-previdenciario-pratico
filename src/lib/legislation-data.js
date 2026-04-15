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
	]
};

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
