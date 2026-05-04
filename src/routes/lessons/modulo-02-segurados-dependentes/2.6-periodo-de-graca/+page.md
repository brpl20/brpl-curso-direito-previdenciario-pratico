<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Jurisprudencia from '$lib/components/Jurisprudencia.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
import VideoLink from '$lib/components/VideoLink.svelte';
</script>

# 2.6 — Período de graça

"Período de graça" é o **tempo durante o qual o segurado mantém a qualidade de segurado mesmo sem contribuir**. O termo não aparece na lei — é jargão prático. A lei fala em "manutenção da qualidade de segurado" (art. 15 da Lei 8.213/91). Dominar essa tabela é condição para não perder pensão por morte, auxílio-doença e salário-maternidade por pura falta de qualidade na data do fato gerador.

## Por que o período de graça importa

Todo benefício previdenciário exige, como regra, que o segurado esteja com a **qualidade vigente na data do fato gerador** (óbito, incapacidade, parto). Durante o período de graça, o segurado **não contribui**, mas ainda é tratado como se fosse segurado — e pode usufruir de todos os benefícios (inclusive para os dependentes, no caso de pensão por morte).

## As hipóteses do art. 15 — tabela completa

<Legislacao ref="Lei 8.213/91, art. 15">

"Mantém a qualidade de segurado, independentemente de contribuições:
**I** — sem limite de prazo, quem está em gozo de benefício, exceto auxílio-acidente;
**II** — até 12 meses após a cessação das contribuições, o segurado que deixar de exercer atividade remunerada abrangida pela Previdência Social ou estiver suspenso ou licenciado sem remuneração;
**III** — até 12 meses após cessar a segregação, o segurado acometido de doença de segregação compulsória;
**IV** — até 12 meses após o livramento, o segurado retido ou recluso;
**V** — até 3 meses após o licenciamento, o segurado incorporado às Forças Armadas para prestar serviço militar;
**VI** — até 6 meses após a cessação das contribuições, o segurado facultativo."

</Legislacao>

| Hipótese | Prazo base |
|----------|-----------|
| Em gozo de benefício previdenciário (exceto auxílio-acidente) | **Sem limite** |
| Segurado que deixa de exercer atividade remunerada | **12 meses** |
| Doença de segregação compulsória | **12 meses após cessar segregação** |
| Segurado preso | **12 meses após o livramento** |
| Militar licenciado | **3 meses** |
| Segurado facultativo que para de contribuir | **6 meses** |

<Atencao title="Não esqueça: auxílio-acidente não mantém qualidade">

O art. 15, I, fala em "gozo de benefício, **exceto** auxílio-acidente". Antes da Lei 13.846/2019, o auxílio-acidente mantinha qualidade — por isso, em processos antigos (pré-2019), sempre verifique a regra vigente na época do fato. Para benefícios atuais, auxílio-acidente **não** mantém qualidade de segurado. Isso é importante porque você pode converter um antigo auxílio acidente em uma aposentadoria por invalidez.

</Atencao>

### Sobre a segregação compulsória (inciso III)

A hipótese do inciso III é hoje rara — foi pensada para hanseníase, tuberculose ativa e outras doenças com isolamento legal obrigatório. Na prática moderna a tese aparece pouco, mas a pandemia de COVID-19 reabriu a discussão sobre o que conta como "segregação".

Vale o registro: **não houve lei específica de COVID** prorrogando o período de graça. O PL 1.113/2020 e normas correlatas dispensaram **carência** para benefícios por incapacidade decorrentes da COVID, mas não tocaram no art. 15. A jurisprudência então passou a tratar o segurado afetado pela pandemia (perda de emprego no setor + adoecimento) pela via clássica do **§2º (desemprego involuntário)**, e não pelo inciso III.

<Jurisprudencia fonte="TRF4, AC 5006499-62.2025.4.04.9999, 5ª Turma, j. 11/02/2026">

"A qualidade de segurado do autor na DER (27/07/2021) foi reconhecida, pois a situação de desemprego involuntário, comprovada pela ausência de novos registros na CTPS, **problemas de saúde (COVID-19 e internação) e o impacto da pandemia no setor de transporte**, justifica a prorrogação do período de graça por mais 12 meses, conforme o art. 15, § 2º, da Lei nº 8.213/1991."

</Jurisprudencia>

<Dica title="Como construir a tese COVID na prática">

Para clientes que perderam contribuição por causa da pandemia (motorista de aplicativo, profissional do setor de eventos, comércio, autônomos do turismo), o caminho não é o inciso III (segregação) — é o **§2º (desemprego involuntário)** combinado com **prova oral + prontuário médico** (TRF4 AC 5002148-41.2020 já citada acima). Junte: ausência de novos vínculos no CNIS, atestado de COVID/internação, recortes de notícias sobre o impacto no setor, depoimentos.

</Dica>

## Prorrogações do prazo de 12 meses (art. 15, §§ 1º e 2º)

O prazo base de 12 meses do inciso II pode ser **estendido**:

### +12 meses se tiver 120 contribuições

<Legislacao ref="Lei 8.213/91, art. 15, §1º">

"O prazo do inciso II será prorrogado para até 24 meses se o segurado já tiver pago mais de 120 contribuições mensais sem interrupção que acarrete perda da qualidade de segurado."

</Legislacao>

### +12 meses adicionais se comprovar desemprego

<Legislacao ref="Lei 8.213/91, art. 15, §2º">

"Os prazos do inciso II ou do §1º serão acrescidos de 12 meses para o segurado desempregado, desde que comprovada essa situação pelo registro no órgão próprio do Ministério do Trabalho e Emprego."

</Legislacao>

### Resumo das combinações

| Situação | Prazo total |
|----------|-------------|
| Trabalhou menos de 10 anos, não comprova desemprego | **12 meses** |
| Trabalhou menos de 10 anos, comprova desemprego | **24 meses** (12 + 12) |
| Trabalhou 120+ contribuições, não comprova desemprego | **24 meses** (12 + 12) |
| Trabalhou 120+ contribuições, comprova desemprego | **36 meses** (12 + 12 + 12) |

<Dica title="Como comprovar desemprego">

O INSS exige, em regra, **anotação de baixa na CTPS + registro no Sine/Ministério do Trabalho**. A jurisprudência (TNU, Súmula 27) flexibilizou: admite-se prova testemunhal, decisão de arquivamento de reclamação trabalhista, extratos bancários indicando ausência de renda, entre outros. Na dúvida, junte **tudo** ao processo administrativo — o indeferimento por falta de prova é frequente.

</Dica>

<Jurisprudencia fonte="Súmula 27 TNU">

"A ausência de registro em órgão do Ministério do Trabalho não impede a comprovação do desemprego por outros meios admitidos em Direito."

</Jurisprudencia>

<Jurisprudencia fonte="TRF4, AC 5002148-41.2020.4.04.7212, 9ª Turma, Rel. Paulo Afonso Brum Vaz, julgado em 15/04/2026">

"PENSÃO POR MORTE. QUALIDADE DE SEGURADO. DESEMPREGO INVOLUNTÁRIO POR DOENÇA. PERÍODO DE GRAÇA AMPLIADO. [...] Após a última contribuição em 03/2011, o de cujus encontrava-se em situação de **desemprego involuntário devido a doença (alcoolismo e pancreatite)**, conforme comprovado por prova oral e prontuários médicos. Essa situação estende o período de graça por mais 12 meses, nos termos do art. 15, §2º, da Lei 8.213/91. **A prova oral é meio hábil para comprovar o desemprego** involuntário."

Tese de ouro para causas onde o segurado parou de contribuir por doença (sem afastamento formal registrado). Combinar com a Súmula 27 TNU: prova oral + prontuário médico = prorrogação dos 12 meses adicionais mesmo sem registro no Sine.

</Jurisprudencia>

<Atencao title="O que mais mata a tese!">

Nos casos de desemprego o que mais acaba com as teses de desemprego involuntário é: "Estava fazendo bicos", isso derroga totalmente a condição de desempregado. Lembra que o segurado não pode estar vinculado a duas categorias ao mesmo tempo? O mesmo vale para o desemprego, ou está desempregado ou está trabalhando como contribuinte individual. Mesmo que ele receba pouco nos seus bicos. Então é fundamental a instrução séria de testemunhas e do próprio segurado nestes casos. Especialmente na pensão por morte isso é muito sério pois pode impedir que a família usufrua o benefício.

</Atencao>

## Extensão fina: o "+1" do art. 15, §4º

Depois de contar os 12, 24 ou 36 meses, a qualidade **só se perde no dia seguinte ao prazo legal de recolhimento da competência imediatamente posterior**. Como o prazo de recolhimento do CI e facultativo vence no **dia 15 do mês seguinte**, na prática a qualidade se estende um pouquinho além dos 12/24/36 meses completos.

<Legislacao ref="Lei 8.213/91, art. 15, §4º">

"A perda da qualidade de segurado ocorrerá no dia seguinte ao do término do prazo fixado [...] para recolhimento da contribuição referente ao mês imediatamente posterior ao final dos prazos fixados neste artigo e seus parágrafos."

</Legislacao>

<Atencao title="O §4º se aplica também ao facultativo">

A redação do §4º é genérica: fala em "prazos fixados **neste artigo e seus parágrafos**" — abrange portanto todos os incisos do art. 15, **inclusive o VI (facultativo)**. Não há distinção legal entre obrigatório e facultativo para fins da extensão fina, e essa é a interpretação adotada pelo INSS administrativamente e pela jurisprudência uniforme. Para o facultativo: 6 meses do inciso VI + mês seguinte + dia 15 do mês posterior = a qualidade só se perde no dia 16 do **oitavo mês** após a última contribuição.

Não localizei precedente do TRF4 que discuta especificamente a aplicação do §4º ao facultativo — provavelmente porque a aplicação é tão consensual que nunca virou litígio. A doutrina majoritária (Castro/Lazzari, Ibrahim) e os manuais técnicos do INSS confirmam.

</Atencao>

<Dica title="Exemplo prático da extensão">

Trabalhador empregado cuja última contribuição foi em **janeiro de 2025**. Fica desempregado. Sem prorrogação, teria 12 meses — até **31/01/2026**. Mas o §4º estende: contando o mês seguinte (fevereiro/26) + prazo de recolhimento (até 15/03/2026), a qualidade só se perde em **16/03/2026**. Se a morte ocorrer em 14/03/2026, **há pensão por morte**. Em muitos casos isso salva o benefício.

</Dica>

## O que **não** mantém qualidade de segurado

Erro recorrente no escritório: cliente acha que está protegido porque recebe algum benefício. Nem todo benefício mantém qualidade.

| Benefício | Mantém qualidade? |
|-----------|-------------------|
| Aposentadoria (todas as espécies) | Sim (art. 15, I) |
| Auxílio-doença / incapacidade temporária | Sim |
| Salário-maternidade | Sim (período da licença) |
| Pensão por morte (recebida por dependente) | **Não** (dependente não é segurado pela pensão) |
| **Auxílio-acidente** | **Não** (art. 15, I, parte final) |
| **BPC/LOAS** | **Não** (benefício assistencial, não previdenciário) |
| **Seguro-desemprego** | **Não** (benefício trabalhista) |
| **Pis/Pasep** | **Não** (abono salarial) |

<Atencao title="A armadilha do BPC">

Beneficiário de BPC/LOAS que acha que está "protegido" porque recebe do INSS está em erro grave. BPC **não** é benefício previdenciário — não mantém qualidade, não gera pensão, não gera 13º. Se o titular do BPC tem dependentes e quer deixar pensão por morte, tem que contribuir como **facultativo** à parte. Esse é um dos temas mais graves do atendimento ao público de baixa renda.

</Atencao>



<Pergunta pergunta="Seguro-desemprego pode ser usado como prova de desemprego para prorrogar o período de graça?">

Sim. O recebimento de seguro-desemprego é **prova direta** de desemprego involuntário perante o Ministério do Trabalho — supre com sobra a exigência do art. 15, §2º. Sempre peça ao cliente os comprovantes de recebimento. Além disso, demonstra que não houve atividade informal concomitante (o seguro é cessado em caso de nova atividade remunerada).

</Pergunta>

## Readquirir qualidade perdida

Depois de perder a qualidade, o segurado pode **reingressar** no sistema. A regra é importante:

<Legislacao ref="Lei 8.213/91, art. 27-A (redação Lei 13.846/2019)">

"Na hipótese de perda da qualidade de segurado, para efeito de carência para a concessão dos benefícios de auxílio por incapacidade temporária, aposentadoria por incapacidade permanente, salário-maternidade e auxílio-reclusão, o segurado deverá contar, a partir da nova filiação à Previdência Social, com os períodos previstos nos incisos I, III e IV do caput do art. 25 desta Lei."

</Legislacao>

Ou seja: quem perdeu a qualidade e voltou a contribuir precisa cumprir **carência do zero** (conforme o benefício).

<Atencao title="A regra que mudou em 2019">

Antes da Lei 13.846/2019, havia previsão de "metade da carência" quando o segurado reingressava após perda. Essa regra **foi extinta**. Hoje, reingressou = carência integral. Cuidado para não confundir processos antigos com regra atual, em especial no auxílio-doença — é onde mais se erra.

</Atencao>

## Segurado especial e período de graça

O segurado especial também mantém qualidade durante afastamentos da atividade rural, aplicando-se o mesmo prazo do inciso II (12 meses + prorrogações). É útil quando há hospitalização, cuidado familiar de doente, ou afastamento sazonal acima do normal.

## Exemplo de cálculo

<Dica title="Pensão por morte com qualidade no limite">

Segurado morre em **20/03/2026**. Última contribuição foi em **15/01/2024** (empregado). Já tinha 8 anos de contribuição (menos de 120). Não comprovou desemprego formal.

- Prazo-base: 12 meses → perde em 16/01/2025
- Extensão do §4º: +1 mês + dia 15 → 16/02/2025
- Sem prorrogação do §1º (não tinha 120) nem do §2º (sem prova de desemprego)
- **Conclusão: qualidade perdida em 16/02/2025. Óbito em 20/03/2026 — sem pensão, a menos que se construa prova de desemprego para ampliar para 24 meses.**

</Dica>

## Vídeos relacionados

Para aprofundar no canal @brunopellizzetti:

<ul class="yt-videos">
  <VideoLink slug="YT-2024-08-27-Entenda_o_PERIODO_DE_GRACA_no_INSS_-_Seus_direitos_e_como_manter_a_qualidade_de_segurado" title="Entenda o período de graça no INSS" descricao="panorama completo com todas as hipóteses" />
  <VideoLink slug="YT-2021-02-02-A_importancia_do_recolhimento_previdenciario_para_o_beneficiario_do_LOAS_BPC_que_tem_dependentes" title="A importância do recolhimento previdenciário para o beneficiário do LOAS/BPC" descricao="por que BPC não mantém qualidade e o que fazer" />
  <VideoLink slug="YT-2021-05-27-LOAS_BPC_-_5_dicas_para_evitar_o_pente_fino_do_INSS" title="LOAS/BPC — 5 dicas para evitar o pente-fino do INSS" descricao="cuidados com o titular do BPC" />
  <VideoLink slug="YT-2024-05-07-Posso_pagar_o_INSS_em_atraso_para_me_aposentar" title="Posso pagar o INSS em atraso para me aposentar?" descricao="a relação entre atraso e qualidade de segurado" />
</ul>
