<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
</script>

# 5.2 — Tabela de salários: mínimo e teto do INSS

Dois valores balizam toda a previdência social: o **salário mínimo** (piso dos benefícios) e o **teto do RGPS** (valor máximo). Acompanhar a evolução desses valores é fundamental para o planejamento previdenciário e para o cálculo de benefícios.

## Tabela: salário mínimo e teto do INSS (2020–2026)

| Ano | Salário mínimo | Teto do INSS | Proporção (teto/mínimo) |
|---|---|---|---|
| **2020** | R$ 1.045,00 | R$ 6.101,06 | 5,84x |
| **2021** | R$ 1.100,00 | R$ 6.433,57 | 5,85x |
| **2022** | R$ 1.212,00 | R$ 7.087,22 | 5,85x |
| **2023** | R$ 1.302,00 | R$ 7.507,49 | 5,77x |
| **2024** | R$ 1.412,00 | R$ 7.786,02 | 5,51x |
| **2025** | R$ 1.518,00 | R$ 8.157,41 | 5,37x |
| **2026** | R$ 1.608,00 | R$ 8.475,55 | 5,27x |

<Atencao>

Observe a tendência: a **proporção entre teto e mínimo vem caindo** ao longo dos anos. Isso ocorre porque o salário mínimo recebe reajustes reais (acima da inflação), enquanto o teto é corrigido apenas pelo INPC. Para o segurado que contribui pelo teto, isso significa perda relativa de poder aquisitivo ao longo do tempo.

</Atencao>

## Impacto prático dos valores

### Salário mínimo como piso

<Legislacao ref="CF/88, art. 201, §2º">

"Nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho do segurado terá valor mensal inferior ao salário mínimo."

</Legislacao>

- Todo benefício previdenciário substitutivo tem como piso o salário mínimo
- Benefícios **não substitutivos** (salário-família, auxílio-acidente) podem ser inferiores ao mínimo
- O BPC/LOAS também é vinculado ao salário mínimo

### Teto do RGPS

- Valor máximo de qualquer benefício pago pelo INSS
- Também é o **limite do salário-de-contribuição** — contribuições acima do teto não geram benefício maior
- Serve como referência para a adesão ao regime complementar (Funpresp) dos servidores federais

<Pergunta pergunta="Se o segurado contribui há 30 anos pelo teto, vai receber o teto de aposentadoria?">

**Não necessariamente.** O valor do benefício depende da regra de cálculo aplicável (média dos salários-de-contribuição, coeficiente de cálculo, eventual fator previdenciário). Contribuir pelo teto é condição necessária, mas não suficiente, para receber o teto.

</Pergunta>

## Alíquotas de contribuição do segurado empregado (2026)

| Faixa salarial | Alíquota |
|---|---|
| Até R$ 1.608,00 | 7,5% |
| De R$ 1.608,01 até R$ 2.688,61 | 9% |
| De R$ 2.688,62 até R$ 4.033,21 | 12% |
| De R$ 4.033,22 até R$ 8.475,55 | 14% |

<Dica>

As alíquotas são **progressivas** desde a EC 103/2019 — cada faixa incide apenas sobre a parcela correspondente, semelhante ao Imposto de Renda. Isso significa que ninguém paga 14% sobre o salário inteiro, apenas sobre a parcela que excede R$ 4.033,21.

</Dica>

## Mapa legislativo

- [ ] **CF/88, art. 201, §2º** — Piso do salário mínimo para benefícios
- [ ] **Lei 8.213/91, art. 33** — Reajuste dos benefícios
- [ ] **EC 103/2019, art. 28** — Alíquotas progressivas de contribuição
- [ ] **Portaria Interministerial MPS/MF** — Publicada anualmente, define teto e faixas

---

**Próxima aula:** [5.3 — Coeficientes e alíquotas por benefício](/lessons/modulo-05-rendas-reajustes/5.3-coeficientes-aliquotas)
