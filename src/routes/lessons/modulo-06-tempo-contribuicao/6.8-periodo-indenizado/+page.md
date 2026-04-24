<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Jurisprudencia from '$lib/components/Jurisprudencia.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
import VideoLink from '$lib/components/VideoLink.svelte';
import YoutubeEmbed from '$lib/components/YoutubeEmbed.svelte';
</script>

# 6.8 — Período indenizado

Quando o segurado (tipicamente contribuinte individual) exerceu atividade remunerada mas não recolheu contribuições no tempo devido, e o período já está alcançado pela **decadência**, a única via para aproveitar aquele tempo na aposentadoria é a **indenização do INSS** — art. 45-A da Lei 8.212/91. Esta aula trata do principal tema operacional de recolhimento retroativo: o que cabe recolher como GPS comum, o que exige indenização formal, como calcular, e os riscos atuais de pagar antes do tema 1.329 do STF ser julgado.

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

## Quem pode indenizar — os casos práticos que chegam ao escritório

A indenização do art. 45-A é especialmente relevante para categorias de CI tipicamente profissionais que passaram anos sem NIT ativo ou com contribuições inconsistentes: **advogados**, **contadores**, **dentistas**, **médicos**, **empresários/sócios** que tiraram distribuição de lucro em vez de pró-labore, e similares. Cada categoria tem particularidades que o Bruno aborda em vídeos específicos:

<ul class="yt-videos">
  <VideoLink slug="YT-2024-05-07-Posso_pagar_o_INSS_em_atraso_para_me_aposentar" title="Posso pagar o INSS em atraso para me aposentar?" descricao="panorama geral sobre o recolhimento retroativo e indenização" />
  <VideoLink slug="YT-2023-02-10-Como_recolher_contribuicao_em_atraso_sendo_ADVOGADO" title="Como recolher contribuição em atraso sendo advogado" descricao="caso específico do advogado autônomo, com OAB ativa e sem recolhimento" />
  <VideoLink slug="YT-2024-10-29-Recolhimento_em_Atraso_do_Socio_Quotista_-_Um_caso_unico_ou_uma_realidade" title="Recolhimento em atraso do sócio quotista" descricao="sócio-empresário sem pró-labore, indenização e prova da atividade" />
  <VideoLink slug="YT-2021-09-28-Sou_MEI_microempreendedor_individual_posso_me_aposentar" title="Sou MEI: posso me aposentar?" descricao="regras específicas do MEI e caminhos de complementação" />
</ul>

## Jurisprudência essencial

<Jurisprudencia fonte="TRF4, AC 5004985-63.2024.4.04.7104, 5ª Turma, Rel. Hermes Siedler da Conceição Júnior, julgado em 16/04/2026">

"APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO. PERÍODO RURAL INDENIZADO. DIB E DIP NA DER. REAFIRMAÇÃO DA DER AUTÔNOMA. MULTA E JUROS. CONSECTÁRIOS." Fixa que, **quando o INSS se omite na emissão das guias de indenização (art. 45-A)**, a DIB e DIP devem retroagir à DER do requerimento administrativo — o segurado não pode ser prejudicado pela inércia da autarquia. Precedente útil sempre que a indenização é pleiteada em juízo.

</Jurisprudencia>

## Mapa legislativo

| Dispositivo | Conteúdo |
|-------------|----------|
| **Lei 8.212/91, art. 45-A** | Indenização do período decaído pelo CI |
| **Lei 8.212/91, art. 21** | Alíquotas (20%, 11%, 5%) e plano simplificado |
| **Lei 8.212/91, art. 21, §3º** | Complemento do plano simplificado para 20% |
| **CF/88, art. 195, §14 (EC 103/2019)** | Regra sobre competências abaixo do mínimo e complementação |
| **Decreto 3.048/99, art. 216** | Procedimento de recolhimento e indenização |

---

**Próxima aula:** [6.9 — Desaverbação de tempo de contribuição](/lessons/modulo-06-tempo-contribuicao/6.9-desaverbacao)
