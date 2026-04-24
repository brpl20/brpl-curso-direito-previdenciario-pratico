<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
</script>

# 2.0 — Visão geral: segurados e dependentes

Antes de entrar em cada categoria, vale fixar o vocabulário. Todo o direito previdenciário gira em torno de duas figuras: quem **está segurado** e quem **é protegido por intermédio** de um segurado. Confundir os dois é o erro mais frequente no atendimento.

## Beneficiário é gênero. Segurado e dependente são espécie.

<Legislacao ref="Lei 8.213/91, art. 10">

"Os beneficiários do Regime Geral de Previdência Social classificam-se como segurados e dependentes, nos termos das Seções I e II deste Capítulo."

</Legislacao>

"Beneficiário" é o termo guarda-chuva. Qualquer pessoa com direito a algum benefício do RGPS é um beneficiário — mas nem todo beneficiário chegou lá pela mesma porta.

## Segurado

**Segurado é quem contribui (ou está dispensado por lei) e tem cobertura direta do sistema.** Quando adoece, pede auxílio em nome próprio. Quando completa os requisitos, se aposenta. Quando morre, deixa pensão.

A condição de segurado nasce de dois caminhos:

1. **Filiação automática** — quem exerce atividade remunerada protegida pela lei vira segurado no ato, sem precisar requerer nada. É o **segurado obrigatório**.
2. **Filiação voluntária** — quem não exerce atividade remunerada, mas decide contribuir para ter cobertura. É o **segurado facultativo**.

<Dica title="A pergunta que identifica o segurado">

No primeiro atendimento, pergunte: "Você trabalha ou trabalhou registrando algum tipo de vínculo?" Se sim, provavelmente é obrigatório. Se nunca trabalhou formalmente mas paga GPS/DAS/contribuição, é facultativo. Se nunca trabalhou e nunca contribuiu, **não é segurado** — e esse é um dos piores diagnósticos para o cliente que já passou dos 50.

</Dica>

## Dependente

**Dependente é quem recebe proteção por intermédio do segurado.** Não contribui para o sistema — sua cobertura decorre do vínculo com alguém que contribui (cônjuge, pai, mãe, filho segurado). Os benefícios típicos do dependente são a **pensão por morte** e o **auxílio-reclusão**.

<Legislacao ref="Lei 8.213/91, art. 16">

Define as classes de dependentes: classe I (cônjuge, companheiro, filho menor ou inválido/com deficiência), classe II (pais), classe III (irmão menor ou inválido/com deficiência). As classes são sucessivas — a existência de um dependente na classe superior exclui as inferiores.

</Legislacao>

O detalhamento das classes, da presunção de dependência e das cotas após a EC 103/2019 está na aula **2.5**.

## Segurado obrigatório × segurado facultativo — a divisão estrutural

Essa é a distinção que organiza todo o módulo.

| Critério | Obrigatório | Facultativo |
|----------|-------------|-------------|
| **Quem é** | Quem exerce atividade remunerada coberta pela lei | Quem não exerce atividade remunerada, mas quer contribuir |
| **Filiação** | Automática, desde o início do trabalho | Depende de ato voluntário (inscrição + 1ª contribuição) |
| **Base legal** | Lei 8.213/91, art. 11 | Lei 8.213/91, art. 13 |
| **Pode escolher não ser?** | Não | Sim — é opção da pessoa |
| **Exemplos** | Empregado CLT, doméstico, avulso, temporário, contribuinte individual, MEI, segurado especial (rural) | Dona de casa, estudante, desempregado após período de graça, síndico não remunerado |

<Atencao title="A vedação recíproca">

Não existe sobreposição: **ou a pessoa é obrigatória, ou é facultativa, ou não é segurada**. Quem tem atividade remunerada não pode ser facultativo (já é obrigatório pela mesma atividade). Quem exerce atividade que gera filiação obrigatória no RPPS com cobertura completa também não pode ser facultativo no RGPS (CF/88, art. 201, §5º).

</Atencao>

## As categorias de segurado obrigatório — o mapa do art. 11

O art. 11 da Lei 8.213/91 lista seis categorias de segurado obrigatório. Este módulo cobre todas, agrupadas por afinidade prática:

| Aula | Categoria | Principais figuras |
|------|-----------|---------------------|
| **2.1** | Empregado e equiparados | CLT, doméstico, avulso, temporário |
| **2.2** | Contribuinte individual | Autônomo, MEI, sócio, profissional liberal |
| **2.3** | Segurado especial | Rural em regime de economia familiar, pescador artesanal, indígena |
| **2.4** | *Segurado facultativo (não é obrigatório)* | Dona de casa, estudante, desempregado |

A aula **2.5** trata dos dependentes e a **2.6** fecha com o **período de graça** — prazo em que o segurado mantém a qualidade mesmo sem contribuir.

<Pergunta pergunta="Posso ser obrigatório em uma atividade e facultativo em outra ao mesmo tempo?">

Não. A filiação é **única**. Se já há atividade que gera filiação obrigatória (ainda que pequena), a pessoa é obrigatória — não cabe paralelamente ser facultativo. O que pode ocorrer é **múltiplas atividades obrigatórias concomitantes** (empregado que também é MEI, por exemplo), somando bases de contribuição até o teto. Isso é tema do Módulo 03.

</Pergunta>

## Por que esses conceitos importam na prática

Três consequências diretas do enquadramento correto:

1. **Alíquota e base de contribuição** — cada categoria paga de forma diferente (20% do CI, 11% do MEI, 1,2% sobre comercialização do especial, 8-11% do empregado descontado em folha)
2. **Benefícios a que tem direito** — o MEI não pega aposentadoria por tempo de contribuição direta; o facultativo não pega aposentadoria especial; o especial tem regras próprias de carência
3. **Ônus da prova** — o empregado prova com CTPS; o CI prova com GPS e NIT; o especial prova com documentos rurais; o facultativo prova com histórico de GPS

Errar na categorização no primeiro atendimento significa, quase sempre, **indeferimento administrativo** — e, pior, orientação incorreta que custa anos de contribuição perdida.

---

**Próxima aula:** [2.1 — Segurado empregado e equiparado](/lessons/modulo-02-segurados-dependentes/2.1-segurado-empregado)
