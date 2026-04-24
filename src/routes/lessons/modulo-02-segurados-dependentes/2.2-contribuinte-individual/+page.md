<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Jurisprudencia from '$lib/components/Jurisprudencia.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
import VideoLink from '$lib/components/VideoLink.svelte';
</script>

# 2.2 — Contribuinte individual e MEI

O contribuinte individual (CI) é o segurado que trabalha **por conta própria** ou que presta serviço a várias empresas **sem vínculo empregatício**. É a categoria mais heterogênea do sistema e, junto com o MEI, concentra boa parte dos problemas de recolhimento em atraso que chegam ao escritório.

## Conceito

<Legislacao ref="Lei 8.213/91, art. 11, V">

"São segurados obrigatórios da Previdência Social: V — como contribuinte individual: a) a pessoa física, proprietária ou não, que explora atividade agropecuária, a qualquer título, em caráter permanente ou temporário, em área superior a 4 módulos fiscais; [...] g) quem presta serviço de natureza urbana ou rural, em caráter eventual, a uma ou mais empresas, sem relação de emprego; h) a pessoa física que exerce, por conta própria, atividade econômica de natureza urbana, com fins lucrativos ou não."

</Legislacao>

## Quem é CI na prática do escritório

- **Autônomo** (eletricista, diarista não doméstica, corretor, representante comercial)
- **Profissional liberal** sem vínculo (advogado sem CLT, dentista de consultório próprio)
- **Sócio e titular de empresa** que recebe pró-labore
- **Diretor não empregado** (apenas estatutário, sem subordinação)
- **Pastor, padre, ministro religioso**
- **Motorista de aplicativo** (Uber, 99, iFood — tema 1 do STJ ainda em debate, mas o INSS os enquadra como CI)
- **Produtor rural pessoa física** em área superior a 4 módulos fiscais
- **Trabalhador de cooperativa** de trabalho

## Filiação e inscrição

Diferente do empregado, o CI precisa se **inscrever ativamente** no INSS (obter o NIT) e **recolher** a contribuição por conta própria. A omissão gera lacuna no CNIS, que só se resolve com recolhimento retroativo (indenização do período, quando cabível).

<Atencao title="CI sem inscrição — o que dá e o que não dá para recuperar">

A filiação do CI é obrigatória desde o início da atividade remunerada (CF/88, art. 201; Lei 8.213, art. 11), **independentemente** de o segurado ter feito a inscrição (NIT) ou recolhido em dia. Isso significa que o **vínculo existe** mesmo sem CNIS — o que falta é a inscrição (ato administrativo) e o recolhimento (obrigação financeira).

Na prática: não se pagam contribuições retroativas como CI em GPS comum, mas é possível **indenizar o INSS** do período trabalhado como CI (art. 45-A da Lei 8.212), com juros, multa e correção. O que se indeniza é o tempo de atividade comprovado por prova material — contratos, recibos, NFS-e, declarações de entidades de classe. A jurisprudência é pacífica no sentido de que o tempo de atividade remunerada é reconhecido desde que comprovado, mesmo sem recolhimento prévio.

</Atencao>

<Jurisprudencia fonte="TRF4, AC 5013244-05.2023.4.04.7000, 10ª Turma, Rel. Luiz Fernando Wowk Penteado, julgado em 24/03/2026">

"RECONHECIMENTO DE TEMPO DE CONTRIBUIÇÃO. CONTRIBUINTE INDIVIDUAL. RECOLHIMENTOS SOB CÓDIGO DE EMPRESA. APELAÇÃO DO INSS DESPROVIDA. [...] **A comprovação do tempo de contribuição do segurado contribuinte individual é possível mesmo quando os recolhimentos foram efetuados sob código equivocado ou de empresa**, desde que demonstrada a atividade remunerada no período." Precedente útil contra a tese do INSS de que "sem NIT, sem tempo".

</Jurisprudencia>

## Alíquotas — o quadro que todo advogado precisa saber

| Situação | Base | Alíquota | Observação |
|----------|------|----------|-------------|
| **CI sem prestação a empresa** (autônomo pleno) | Escolha entre salário mínimo e teto | **20%** | Plano normal |
| **CI de baixa renda** (dona de casa pobre, CadÚnico) | Salário mínimo | **5%** | Não conta para aposentadoria por tempo de contribuição, apenas idade, invalidez, pensão |
| **CI plano simplificado** | Salário mínimo | **11%** | Não conta para tempo de contribuição — apenas idade/invalidez/pensão. Pode complementar depois para tempo |
| **CI que presta serviço a PJ** | Remuneração do contrato | **11%** desconto pela tomadora + eventual complemento | Empresa recolhe 20% patronal |
| **MEI** | Salário mínimo | **5%** sobre SM (INSS) | Lei Complementar 123/2006 |
| **Produtor rural PF contribuinte individual** | Receita bruta ou SM | Regras específicas | Não confundir com segurado especial |

<Dica title="O truque do complemento (art. 21, §3º, Lei 8.212)">

O CI que recolheu na alíquota reduzida (5% ou 11%) e quer aproveitar esse tempo para aposentadoria **por tempo de contribuição** pode complementar até 20% com **juros e correção**. Esse complemento tem que ser feito antes da DER — se postergar, perde o tempo. É rotina de escritório bem conduzido.

Tutorial operacional do Bruno mostrando como complementar pelo Meu INSS, com os códigos de GPS e o passo a passo:

<ul class="yt-videos">
  <VideoLink slug="YT-2021-10-28-Como_complementar_as_contribuicoes_previdenciarias_do_MEI_e_baixa_renda_para_Aposentadoria" title="Como complementar contribuições previdenciárias do MEI e baixa renda" descricao="tutorial operacional de complemento para 20% pelo Meu INSS" />
</ul>

</Dica>

## MEI — o microempreendedor individual

O MEI é CI com regime especial instituído pela **LC 123/2006**. Paga INSS de 5% sobre o salário mínimo via DAS mensal.

<Legislacao ref="LC 123/2006, art. 18-A, §3º, V">

O MEI contribui mensalmente com valor fixo mensal, correspondente à soma de: a) contribuição previdenciária (5% do limite mínimo mensal do salário de contribuição); b) ICMS ou ISS, conforme o caso.

</Legislacao>

### O que o MEI tem direito

- Aposentadoria **por idade**
- Aposentadoria **por incapacidade permanente** (ex-invalidez)
- Auxílio **por incapacidade temporária** (ex-auxílio-doença)
- **Salário-maternidade**
- **Pensão por morte** (para dependentes)

### O que o MEI **não** tem

- Aposentadoria **por tempo de contribuição** (exceto se complementar para 20%)

### Auxílio-acidente — o contribuinte individual não tem direito

O auxílio-acidente é benefício de **prestação continuada** (permanente, indenizatório) pago à **sequela definitiva** que reduz a capacidade laboral. O art. 18, §1º, da Lei 8.213/91 lista taxativamente os beneficiários: empregado, empregado doméstico, trabalhador avulso e segurado especial. **Contribuinte individual e facultativo estão expressamente excluídos** — isso inclui o MEI, o sócio, o profissional liberal e todas as demais espécies de CI.

O CI tem direito apenas ao **auxílio por incapacidade temporária** (ex-auxílio-doença), que é benefício transitório, pago enquanto durar a incapacidade. Não existe equivalente permanente para a categoria.

<Jurisprudencia fonte="TRF4, AC 5000721-14.2025.4.04.9999, 9ª Turma, Rel. Sebastião Ogê Muniz, julgado em 04/12/2025">

"AUXÍLIO-ACIDENTE. QUALIDADE DE SEGURADO. CONTRIBUINTE INDIVIDUAL. ARTIGO 18, §1º, LEI 8.213/1991. À época do acidente, o autor vertia contribuições ao RGPS como contribuinte individual, **não possuindo, portanto, a qualidade de segurado beneficiário do auxílio-acidente**, nos termos do artigo 18, §1º, da Lei nº 8.213/1991, na medida em que o benefício somente é devido ao empregado, empregado doméstico, trabalhador avulso e segurado especial."

</Jurisprudencia>

### Aposentadoria especial do contribuinte individual — conquista na Justiça

Por muito tempo o INSS indeferiu aposentadoria especial para CI com base no mesmo art. 18 da Lei 8.213/91. A Justiça, porém, passou a reconhecer o direito **desde que comprovada a exposição efetiva e habitual a agentes nocivos**, aplicando diretamente a CF/88 e a Lei 8.213 (arts. 57-58). Os casos práticos mais consolidados envolvem categorias como **dono de posto de combustíveis** (exposição a benzeno e hidrocarbonetos), **técnico em prótese dentária** (exposição a agentes químicos), **médicos e dentistas autônomos** (agentes biológicos) e similares.

<ul class="yt-videos">
  <VideoLink slug="YT-2023-06-15-Aposentadoria_Especial_-_Para_Dono_de_Posto_de_Combustiveis" title="Aposentadoria especial para dono de posto de combustíveis" descricao="empresário/CI conquistando especial na Justiça — caso paradigmático" />
  <VideoLink slug="YT-2025-01-14-Aposentadoria_Especial_do_Tecnico_de_Protese_Dentaria" title="Aposentadoria especial do técnico de prótese dentária" descricao="profissional autônomo (CI) com exposição comprovada a agentes químicos" />
</ul>

## Recolhimento em atraso — o tema mais prático do escritório

O CI e o MEI podem regularizar contribuições em atraso **desde que dentro dos prazos de decadência e respeitando a forma legal**.

<Legislacao ref="Lei 8.212/91, art. 45-A">

"O contribuinte individual que pretenda contar como tempo de contribuição [...] o período correspondente ao exercício de atividade remunerada alcançada pela decadência, deverá indenizar o INSS."

</Legislacao>

### Como se faz

1. **Cálculo do período**: mês a mês, pela base de contribuição vigente em cada competência
2. **Atualização**: juros + multa conforme a época
3. **Guia**: GPS (código específico para indenização — 1473)
4. **Pagamento**: em uma ou mais guias, com protocolo no INSS para cômputo

<Dica title="A regra dos 5 anos">

Tempo **dentro dos últimos 5 anos** pode ser recolhido em GPS comum com **apenas juros e multa de mora** (mais barato). Tempo **acima de 5 anos** exige indenização formal do art. 45-A, com cálculo mais pesado. Esse recorte cronológico faz **muita diferença** no custo final do planejamento.

</Dica>

<Dica title="Pagar 'em atraso' não é pagar em atraso — é indenizar">

Tecnicamente, **não é possível recolher em atraso** contribuição de período já decaído. Porém, se você teve atividade remunerada em uma **categoria obrigatória** (CI típico — autônomo, sócio, profissional liberal), é possível **indenizar o INSS** pagando juros, multa e correção monetária correspondente ao período. Na prática, parece pagar "em atraso", mas a natureza jurídica é outra: **você assume que está em dívida com o INSS** referente a contribuições que já deveriam ter sido recolhidas.

Antes de qualquer pagamento, **pare e calcule**: será que a indenização realmente fará diferença na aposentadoria? Esse é um raciocínio obrigatório do escritório — há casos em que pagar não adianta, porque o segurado já cumpriria carência e tempo por outras vias.

</Dica>

<Atencao title="Tema 1329 STF — suspensão que muda o cálculo">

Existe controvérsia relevante, **ainda não pacificada**, sobre o uso de contribuições indenizadas ou complementares **após** a EC 103/2019 para enquadramento em regras de transição que exigem tempo mínimo até **12/11/2019** (data da reforma). A questão chegou ao STF como **Tema 1.329 de repercussão geral** (RE 1.508.285), com julgamento **suspenso em 19/12/2023** por pedido de vista do Ministro Alexandre de Moraes.

Em resumo: se o cliente indenizou em 2024 período de atividade anterior a 2019, esse tempo **pode ou não** ser usado para regra de transição — depende do julgamento final. A TNU já vinha decidindo favoravelmente ao segurado, mas é preciso cautela antes de recomendar pagamento vultoso até o tema ser definido. **No contrato de honorários, advirta expressamente** do risco de o STF decidir contra essa possibilidade.

</Atencao>

### Quem pode indenizar — os casos práticos que chegam ao escritório

A indenização do art. 45-A é especialmente relevante para categorias de CI tipicamente profissionais que passaram anos sem NIT ativo ou com contribuições inconsistentes: **advogados**, **contadores**, **dentistas**, **médicos**, **empresários/sócios** que tiraram distribuição de lucro em vez de pró-labore, e similares. Cada categoria tem particularidades que o Bruno aborda em vídeos específicos:

<ul class="yt-videos">
  <VideoLink slug="YT-2024-05-07-Posso_pagar_o_INSS_em_atraso_para_me_aposentar" title="Posso pagar o INSS em atraso para me aposentar?" descricao="panorama geral sobre o recolhimento retroativo e indenização" />
  <VideoLink slug="YT-2023-02-10-Como_recolher_contribuicao_em_atraso_sendo_ADVOGADO" title="Como recolher contribuição em atraso sendo advogado" descricao="caso específico do advogado autônomo, com OAB ativa e sem recolhimento" />
  <VideoLink slug="YT-2024-10-29-Recolhimento_em_Atraso_do_Socio_Quotista_-_Um_caso_unico_ou_uma_realidade" title="Recolhimento em atraso do sócio quotista" descricao="sócio-empresário sem pró-labore, indenização e prova da atividade" />
  <VideoLink slug="YT-2021-09-28-Sou_MEI_microempreendedor_individual_posso_me_aposentar" title="Sou MEI: posso me aposentar?" descricao="regras específicas do MEI e caminhos de complementação" />
</ul>

## Sócio e pró-labore

O sócio que recebe **pró-labore** é CI e contribui sobre esse valor. O sócio que recebe apenas **distribuição de lucros** (sem pró-labore) **não contribui** — e isso pode virar problema na aposentadoria.

<Atencao title="Sócio sem pró-labore = sócio sem INSS">

Muitos sócios de pequenas empresas tiram apenas distribuição de lucros para economizar no INSS. Anos depois, descobrem que não têm tempo de contribuição algum. O planejamento certo é **pro-labore mínimo de 1 SM** recolhido mensalmente — caro para o caixa da empresa, mas barato perto da alternativa (ficar sem benefício).

</Atencao>

## Jurisprudência essencial

<Jurisprudencia fonte="STJ, Tema 1.018">

O segurado pode, dentro do mesmo período de contribuição, receber **dois benefícios distintos** quando preenchidos requisitos próprios (ex.: aposentadoria + pensão por morte; auxílio-acidente + aposentadoria). Tema relevante para o CI que tem múltiplas janelas de benefício.

</Jurisprudencia>

<Jurisprudencia fonte="TRF4, AC 5004985-63.2024.4.04.7104, 5ª Turma, Rel. Hermes Siedler da Conceição Júnior, julgado em 16/04/2026">

"APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. PERÍODO RURAL INDENIZADO. DIB E DIP NA DER. REAFIRMAÇÃO DA DER AUTÔNOMA. MULTA E JUROS. CONSECTÁRIOS." Fixa que, **quando o INSS se omite na emissão das guias de indenização (art. 45-A)**, a DIB e DIP devem retroagir à DER do requerimento administrativo — o segurado não pode ser prejudicado pela inércia da autarquia. Precedente útil sempre que a indenização é pleiteada em juízo.

</Jurisprudencia>

<Jurisprudencia fonte="Súmula 272 TST">

"O trabalhador rural, ora safrista, não se equipara ao trabalhador rural com vínculo empregatício permanente, para fins de aposentadoria." (Útil para diferenciar CI rural do empregado rural e do segurado especial — tema da próxima aula.)

</Jurisprudencia>

## Mapa legislativo

| Dispositivo | Conteúdo |
|-------------|----------|
| **Lei 8.213/91, art. 11, V** | Definição do contribuinte individual |
| **Lei 8.212/91, art. 21** | Alíquotas (20%, 11%, 5%) e plano simplificado |
| **Lei 8.212/91, art. 21, §3º** | Complemento do plano simplificado |
| **Lei 8.212/91, art. 45-A** | Indenização de período decaído |
| **LC 123/2006, art. 18-A** | Regime do MEI |
| **Decreto 3.048/99, art. 9º, V** | Detalhamento das espécies de CI |

## Checklist do primeiro atendimento — CI e MEI

- [ ] NIT ativo e CNIS sem lacunas recentes
- [ ] Levantamento de períodos em aberto (nunca recolhidos)
- [ ] Identificação de alíquota usada em cada competência (5/11/20%)
- [ ] Se houve 5/11%, simular custo/benefício do complemento para 20%
- [ ] Para MEI, conferir DAS em dia (o INSS nega benefício por atraso)
- [ ] Para sócio, verificar se há pró-labore no contrato social e se foi recolhido
- [ ] Para profissional liberal, cruzar NFS-e emitidas com recolhimentos no CNIS

## Vídeos relacionados

Para aprofundar no canal @brunopellizzetti:

<ul class="yt-videos">
  <VideoLink slug="YT-2021-09-28-Sou_MEI_microempreendedor_individual_posso_me_aposentar" title="Sou MEI: posso me aposentar?" descricao="regras de aposentadoria do MEI, benefícios a que tem direito" />
  <VideoLink slug="YT-2021-10-28-Como_complementar_as_contribuicoes_previdenciarias_do_MEI_e_baixa_renda_para_Aposentadoria" title="Como complementar contribuições do MEI e baixa renda para aposentadoria" descricao="o passo a passo do complemento art. 21, §3º" />
  <VideoLink slug="YT-2023-02-10-Como_recolher_contribuicao_em_atraso_sendo_ADVOGADO" title="Como recolher contribuição em atraso sendo advogado" descricao="caso prático do profissional liberal CI" />
  <VideoLink slug="YT-2023-08-25-Tutorial_Como_Regularizar_Contribuicoes_Abaixo_do_Minimo_Legal" title="Como regularizar contribuições abaixo do mínimo legal" descricao="tutorial operacional para competências com base menor que SM" />
  <VideoLink slug="YT-2024-05-07-Posso_pagar_o_INSS_em_atraso_para_me_aposentar" title="Posso pagar o INSS em atraso para me aposentar?" descricao="panorama do recolhimento retroativo" />
  <VideoLink slug="YT-2023-12-12-Auxilio_Acidente_no_MEI_-_Um_beneficio_que_tem_sido_esquecido" title="Auxílio-acidente no MEI: um benefício esquecido" descricao="hipótese pouco explorada" />
  <VideoLink slug="YT-2024-10-29-Recolhimento_em_Atraso_do_Socio_Quotista_-_Um_caso_unico_ou_uma_realidade" title="Recolhimento em atraso do sócio quotista" descricao="particularidades do sócio sem pró-labore" />
  <VideoLink slug="YT-2023-11-24-Servidor_Publico_pode_abrir_MEI_Confira_esse_e_outros_questionamentos_do_RPPS_relacionado_ao_INSS" title="Servidor público pode abrir MEI?" descricao="interseção RPPS × RGPS para o servidor empreendedor" />
</ul>

---

**Próxima aula:** [2.3 — Segurado especial](/lessons/modulo-02-segurados-dependentes/2.3-segurado-especial)
