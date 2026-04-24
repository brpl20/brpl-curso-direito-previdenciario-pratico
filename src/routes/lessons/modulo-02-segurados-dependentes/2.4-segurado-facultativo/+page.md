<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Jurisprudencia from '$lib/components/Jurisprudencia.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
import VideoLink from '$lib/components/VideoLink.svelte';
</script>

# 2.4 — Segurado facultativo

O segurado **facultativo** é aquele que, **sem exercer atividade remunerada**, decide contribuir para o INSS por vontade própria. É a única categoria cuja filiação depende de **ato voluntário**: dona de casa que cuida do lar, estudante, desempregado, bolsista, síndico não remunerado.

## Conceito

<Legislacao ref="Lei 8.213/91, art. 13">

"É segurado facultativo o maior de 16 (dezesseis) anos que se filiar ao Regime Geral de Previdência Social, mediante contribuição, na forma do art. 21 da Lei 8.212, de 24 de julho de 1991, desde que **não incluído nas disposições do art. 11**."

</Legislacao>

O art. 11 trata dos segurados **obrigatórios** (empregado, doméstico, CI, avulso, especial). Quem não se encaixa em nenhum deles, **e ainda assim quer contribuir**, vira facultativo.

## Requisitos para filiar

1. **Idade mínima de 16 anos**
2. **Não exercer atividade que o torne segurado obrigatório**
3. **Inscrição ativa no INSS** (obter NIT/PIS)
4. **Recolhimento regular** a partir da filiação

<Atencao title="Não se pode contribuir retroativamente como facultativo">

Diferente do CI, que indeniza períodos antigos via art. 45-A, o **facultativo só pode contribuir a partir da inscrição**. Não existe indenização retroativa para período em que o cliente não era segurado obrigatório e não estava inscrito. Essa é a **regra mais frustrante** para quem descobre o INSS tarde na vida.

</Atencao>

## Quem pode ser facultativo — a lista prática

- **Dona de casa** (o exemplo clássico)
- **Estudante** maior de 16 que não trabalha
- **Desempregado** após o fim do período de graça
- **Bolsista de pesquisa** sem vínculo formal
- **Síndico não remunerado** (se for remunerado, vira CI)
- **Estagiário** (a Lei 11.788/2008 não gera filiação obrigatória — pode optar por facultativo)
- **Preso em livramento** que não exerce atividade remunerada
- **Brasileiro no exterior** não vinculado a regime estrangeiro com acordo

<Pergunta pergunta="Dona de casa pode ser segurado especial em vez de facultativo?">

Pode, **se** residir em imóvel rural e participar efetivamente da economia familiar rural. A diferença é enorme: o segurado especial contribui pela comercialização (ou nem contribui, na aposentadoria rural por idade), enquanto o facultativo paga alíquota mensal. A prática rural, comprovada por início de prova material, sempre será mais vantajosa quando existir.

</Pergunta>

## Alíquotas — iguais às do CI

| Plano | Alíquota | Base | Observação |
|-------|----------|------|-------------|
| **Normal** | 20% | Entre salário mínimo e teto | Conta para tempo de contribuição |
| **Simplificado** | 11% | Salário mínimo | **Não** conta para tempo; apenas idade/invalidez/pensão |
| **Baixa renda** (CadÚnico, renda familiar ≤ 2 SM, sem atividade remunerada) | 5% | Salário mínimo | Dona de casa pobre — regras do art. 21, §2º, II, "b", Lei 8.212 |

<Legislacao ref="Lei 8.212/91, art. 21, §2º, II, 'b'">

Alíquota de 5% sobre o salário mínimo para o segurado facultativo **sem renda própria** que se dedique exclusivamente ao trabalho doméstico no âmbito de sua residência, desde que pertencente a **família de baixa renda** inscrita no CadÚnico.

</Legislacao>

<Dica title="Requisitos combinados do facultativo de baixa renda">

Para a alíquota de 5%, é preciso **cumulativamente**: (1) inscrição no CadÚnico, (2) renda familiar mensal de até 2 salários mínimos, (3) não exercer atividade remunerada e (4) dedicação exclusiva ao trabalho doméstico na própria residência. Faltando um, o recolhimento é indeferido e pode virar nulidade no futuro. No atendimento, sempre peça o comprovante de inscrição no CadÚnico atualizado.

</Dica>

## Vedações — quem **não** pode ser facultativo

- **Menor de 16 anos** (mesmo na condição de aprendiz a partir dos 14, não pode ser facultativo)
- **Participante de RPPS** que já tenha cobertura previdenciária completa (art. 201, §5º, CF/88)
- **Quem já é segurado obrigatório** no RGPS pela mesma atividade

<Atencao title="Servidor público e facultativo no RGPS">

Servidor de RPPS com cobertura **plena** não pode ser facultativo do RGPS. Mas o servidor de cargo em comissão (sem RPPS) ou servidor temporário é segurado **obrigatório do RGPS** — não facultativo. E o servidor com RPPS pode contribuir como CI se exercer atividade remunerada fora do cargo (advocacia, aluguéis com natureza de serviço, etc.), nunca como facultativo.

</Atencao>

## Data da filiação e qualidade de segurado

A filiação do facultativo ocorre com a **primeira contribuição**, não com a inscrição. E se deixar de contribuir, entra no **período de graça** de **6 meses** — o mais curto do sistema.

Essa é uma das razões pelas quais o planejamento do facultativo é delicado: basta esquecer a GPS por dois meses e a qualidade pode estar em risco.

<Jurisprudencia fonte="TNU, Tema 160">

A filiação do segurado facultativo ocorre com o **primeiro recolhimento**, ainda que em atraso, desde que o pagamento se refira a competência dentro do prazo legal.

</Jurisprudencia>

<Jurisprudencia fonte="TRF4, AC 5008104-82.2021.4.04.9999, 11ª Turma, Rel. Marina Vasques Duarte, julgado em 09/04/2025">

"PENSÃO POR MORTE. CONTRIBUIÇÃO COMO SEGURADO FACULTATIVO DE BAIXA RENDA NÃO VALIDADA. COMPLEMENTAÇÃO POST MORTEM. POSSIBILIDADE. [...] A contribuição previdenciária abaixo do mínimo legal não é válida para fins de carência, porém assegura a vinculação do segurado ao RGPS, viabilizando o acesso dos dependentes à pensão por morte. [...] Para fins de pensão por morte, **é possível a complementação, após o óbito, pelos dependentes, das contribuições recolhidas em vida** pelo segurado facultativo de baixa renda do art. 21, §2º, II, 'b', da Lei 8.212."

</Jurisprudencia>

<Dica title="A saída prática quando o INSS não valida a baixa renda">

Cenário recorrente: cliente faleceu contribuindo a 5% como facultativo de baixa renda; o INSS indefere a pensão alegando que o CadÚnico não estava em dia ou que a renda familiar excedia o limite. O acórdão do TRF4 abre a porta para a **complementação post mortem** pelos dependentes — recolhe-se a diferença até 20% (ou até 11%, para manter ao menos a vinculação) e o vínculo é preservado. Ação própria no JEF, com depósito judicial da complementação como pedido subsidiário.

</Dica>

## Recolhimento em atraso — regra especial

Diferente do CI, que pode pagar em atraso mesmo sem qualidade vigente, o **facultativo só pode regularizar em atraso competências dentro do período de graça** (6 meses desde o último pagamento). Uma vez perdida a qualidade, o facultativo tem que **reingressar** pagando a próxima competência em dia — e o tempo anterior à reinserção não pode ser "resgatado".

<Atencao title="A pior armadilha do facultativo">

Cliente que pagou como facultativo por anos, parou por 12 meses, e agora quer pagar tudo retroativo: **não dá**. Os 12 meses de atraso não podem ser regularizados. O que ele recolher depois só vale para frente. Essa é a diferença **estruturante** entre facultativo e CI, e é onde muitos advogados desatentos prometem o que não podem entregar.

</Atencao>

## Benefícios a que o facultativo tem direito

Todos os benefícios do RGPS, respeitadas as regras de carência:

- Aposentadoria **por idade** e **por tempo de contribuição** (esta só se pagou 20%)
- Aposentadoria **por incapacidade permanente**
- **Auxílio por incapacidade temporária**
- **Salário-maternidade** (a facultativa gestante tem direito — carência de 10 meses)
- **Pensão por morte** (para seus dependentes)
- **Auxílio-reclusão** (para seus dependentes, se atender aos requisitos)

O que **não** tem:

- Aposentadoria **especial** (facultativo não exerce atividade remunerada — não há agentes nocivos a comprovar)
- **Auxílio-acidente** (idem — não há acidente de trabalho em quem não trabalha)

<Pergunta pergunta="O marido desempregado pode pagar como facultativo para manter a pensão para a família?">

Pode, e muitas vezes **deve**. O art. 15, II, da Lei 8.213/91 garante 12 meses de período de graça (prorrogáveis para 24 ou 36 meses) para quem deixa de exercer atividade remunerada. Mas depois disso, se não voltar a trabalhar, **perde a qualidade**. Recolher como facultativo durante a fase de desemprego prolongado é o que garante pensão por morte ao cônjuge e filhos caso aconteça o pior.

</Pergunta>

## Casos práticos recorrentes

### Caso 1 — Dona de casa que nunca trabalhou

Solução: facultativo de baixa renda (5%) se atender aos requisitos do CadÚnico. Senão, plano simplificado (11%) ou normal (20%). Nunca prometa aposentadoria por tempo de contribuição se ela recolher 5% ou 11% sem complemento.

### Caso 2 — Estudante de 18 anos

Solução: facultativo simplificado (11%). Permite começar a contar tempo cedo para aposentadoria por idade. Se entrar no mercado de trabalho formal, converte-se automaticamente em empregado.

### Caso 3 — Desempregado há 2 anos

Solução: verificar primeiro se ainda está no período de graça estendido (24 ou 36 meses — art. 15, §§ 1º e 2º). Se não estiver, filiar como facultativo para não perder cobertura para família.

### Caso 4 — Advogado recém-formado ainda sem clientes

Solução: **CI**, não facultativo. A OAB já gera filiação obrigatória ao RGPS como contribuinte individual a partir da inscrição. Deve recolher pelo menos sobre o salário mínimo mensalmente.

## Mapa legislativo

| Dispositivo | Conteúdo |
|-------------|----------|
| **CF/88, art. 201, §5º** | Vedação ao segurado de RPPS |
| **Lei 8.213/91, art. 13** | Conceito de segurado facultativo |
| **Lei 8.213/91, art. 15, VI** | Período de graça de 6 meses |
| **Lei 8.212/91, art. 21** | Alíquotas (20%, 11%, 5%) |
| **Lei 8.212/91, art. 21, §2º, II** | Facultativo simplificado e de baixa renda |
| **Decreto 3.048/99, art. 11** | Regulamentação |
| **Lei 11.788/2008** | Estagiário pode optar pela filiação facultativa |

## Checklist do primeiro atendimento — facultativo

- [ ] Confirmar que não é segurado obrigatório (nenhuma atividade remunerada vigente)
- [ ] Idade ≥ 16 anos
- [ ] Se busca alíquota de 5%: CadÚnico + renda familiar + dedicação exclusiva comprovadas
- [ ] Inscrição no INSS (NIT ou CPF ativado) conferida
- [ ] Alíquota escolhida compatível com o benefício pretendido (5/11% limitam)
- [ ] GPS em dia — sem intervalos superiores a 6 meses
- [ ] Se houve interrupção, explicar claramente que o tempo perdido não volta
- [ ] Planejamento: projetar idade mínima + carência para simular DIB futura

## Vídeos relacionados

Para aprofundar no canal @brunopellizzetti:

<ul class="yt-videos">
  <VideoLink slug="YT-2023-02-10-Como_recolher_contribuicao_em_atraso_sendo_ADVOGADO" title="Como recolher contribuição em atraso sendo advogado" descricao="útil para o advogado orientar também facultativos (a lógica do atraso é diferente)" />
  <VideoLink slug="YT-2023-08-25-Tutorial_Como_Regularizar_Contribuicoes_Abaixo_do_Minimo_Legal" title="Como regularizar contribuições abaixo do mínimo legal" descricao="quando o facultativo recolheu sobre base errada" />
  <VideoLink slug="YT-2021-10-28-Como_complementar_as_contribuicoes_previdenciarias_do_MEI_e_baixa_renda_para_Aposentadoria" title="Como complementar contribuições do MEI e baixa renda para aposentadoria" descricao="o complemento de 5/11% para 20% também se aplica ao facultativo" />
  <VideoLink slug="YT-2025-01-30-como_fazer_REAJUSTE_das_contribuicoes_do_INSS_-_De_forma_ONLINE_e_SIMPLES" title="Como fazer reajuste das contribuições do INSS de forma online e simples" descricao="correção de GPS com valor desatualizado" />
</ul>

---

**Próxima aula:** [2.5 — Dependentes: classes e concorrência](/lessons/modulo-02-segurados-dependentes/2.5-dependentes-classes)
