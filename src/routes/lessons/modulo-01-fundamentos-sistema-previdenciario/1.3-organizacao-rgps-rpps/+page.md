<script>
import Dica from '$lib/components/Dica.svelte';
import Atencao from '$lib/components/Atencao.svelte';
import Legislacao from '$lib/components/Legislacao.svelte';
import Pergunta from '$lib/components/Pergunta.svelte';
import Jurisprudencia from '$lib/components/Jurisprudencia.svelte';
</script>

# 1.3 — Organização do RGPS e RPPS

O sistema previdenciário brasileiro é composto por **dois regimes básicos** (obrigatórios) e um **regime complementar** (facultativo). Nesta aula, vamos entender a estrutura e as diferenças entre o RGPS e o RPPS.

## Regimes previdenciários

```
Previdência Social
├── RGPS (Regime Geral) — art. 201, CF
│   └── Gerido pelo INSS
├── RPPS (Regimes Próprios) — art. 40, CF
│   └── Geridos por cada ente federativo
└── RPC (Regime Complementar) — art. 202, CF
    └── Facultativo, autônomo
```

## RGPS — Regime Geral de Previdência Social

<Legislacao ref="CF/88, art. 201">

"A previdência social será organizada sob a forma do Regime Geral de Previdência Social, de caráter contributivo e de filiação obrigatória, observados critérios que preservem o equilíbrio financeiro e atuarial."

</Legislacao>

### Características do RGPS

| Aspecto | RGPS |
|---|---|
| **Filiação** | Obrigatória para trabalhadores da iniciativa privada |
| **Gestão** | INSS (Instituto Nacional do Seguro Social) |
| **Legislação** | Leis 8.212/91 e 8.213/91; Decreto 3.048/99 |
| **Teto** | Sim — valor máximo do benefício (R$ 8.475,55 em 2026) |
| **Regime financeiro** | Repartição simples (pacto intergeracional) |

### Quem se filia ao RGPS?

- Empregados CLT
- Domésticos
- Trabalhadores avulsos
- Contribuintes individuais (autônomos, MEI)
- Segurados especiais (rurais)
- Segurados facultativos

<Dica>

O INSS é uma **autarquia federal** vinculada ao Ministério da Previdência Social. Ele é responsável pela concessão e manutenção dos benefícios do RGPS, mas **não arrecada** — a arrecadação é feita pela Receita Federal.

</Dica>

## RPPS — Regime Próprio de Previdência Social

<Legislacao ref="CF/88, art. 40">

"O regime próprio de previdência social dos servidores titulares de cargos efetivos terá caráter contributivo e solidário, mediante contribuição do respectivo ente federativo, dos servidores ativos, dos aposentados e dos pensionistas."

</Legislacao>

### Características do RPPS

| Aspecto | RPPS |
|---|---|
| **Filiação** | Servidores titulares de cargo efetivo |
| **Gestão** | Cada ente federativo (União, Estados, Municípios) |
| **Legislação** | Art. 40 CF + legislação de cada ente |
| **Teto** | Pode ou não ter teto (depende da criação de previdência complementar) |
| **Regime financeiro** | Predominantemente repartição, com tendência à capitalização |

<Atencao>

Após a EC 103/2019, os novos servidores federais que ingressarem terão seus benefícios limitados ao **teto do RGPS** se houver regime complementar instituído. A diferença é coberta pelo **Funpresp**.

</Atencao>

<Pergunta pergunta="Servidor público comissionado (sem cargo efetivo) se filia a qual regime?">

Ao **RGPS**. Servidores exclusivamente em comissão, temporários e empregados públicos (CLT) são vinculados ao Regime Geral, não ao RPPS.

</Pergunta>

## Diferenças essenciais

| Critério | RGPS | RPPS |
|---|---|---|
| **Segurados** | Trabalhadores privados e assemelhados | Servidores efetivos |
| **Gestão** | Federal (INSS) | Cada ente |
| **Benefícios** | Definidos na Lei 8.213/91 | Definidos na legislação do ente |
| **Teto** | Sempre aplicável | Depende de RPC |
| **Paridade/Integralidade** | Não se aplica | Direito adquirido até EC 41/2003 |

## Principais RPPS estaduais

| Estado | Entidade gestora | Legislação de regência |
|---|---|---|
| **São Paulo** | SPPrev | LC Estadual 1.010/2007 |
| **Rio de Janeiro** | RioPrevidência | Lei Estadual 3.189/1999 |
| **Minas Gerais** | IPSEMG | LC Estadual 64/2002 |
| **Rio Grande do Sul** | IPE Prev | LC Estadual 13.758/2011 |
| **Paraná** | ParanáPrevidência | Lei Estadual 12.398/1998 |
| **Bahia** | BAPREV | Lei Estadual 11.357/2009 |
| **Santa Catarina** | IPREV/SC | LC Estadual 412/2008 |
| **Pernambuco** | FUNAPE | LC Estadual 28/2000 |
| **Ceará** | SUPSEC | LC Estadual 21/2000 |
| **Distrito Federal** | IPREV/DF | LC Distrital 769/2008 |

<Dica>

Cada estado tem legislação própria e regras distintas para aposentadoria, pensão e contribuição dos seus servidores. Ao atender um servidor estadual, a primeira providência é identificar a **legislação do ente** — não basta aplicar as regras federais.

</Dica>

## Regimes municipais

Diversos municípios brasileiros instituíram seus próprios **RPPS municipais** para os servidores efetivos. A existência e a estrutura desses regimes variam enormemente de município para município:

- Municípios **maiores** costumam ter RPPS consolidados com entidade gestora própria (ex.: IPREM em São Paulo, Previrio no Rio de Janeiro, PBH Ativos em Belo Horizonte)
- Municípios **menores** frequentemente não instituíram RPPS, e seus servidores são vinculados ao **RGPS/INSS**
- Cada regime municipal tem sua própria legislação, alíquotas e regras de concessão

<Atencao>

A análise de regimes municipais exige consulta à legislação específica de cada município. Não há padronização nacional — cada caso é um caso. Os detalhes de cada RPPS municipal serão tratados em curso próprio.

</Atencao>

## Competência legislativa

- **União**: competência **privativa** para legislar sobre seguridade social (art. 22, XXIII, CF)
- **Normas gerais**: competência **concorrente** entre União, Estados e DF (art. 24, XII, CF)
- **Cada ente**: legisla sobre seu próprio RPPS, respeitando as normas gerais

<Jurisprudencia fonte="STF, ADI 3.106, Rel. Min. Eros Grau">

O STF reconhece a competência de cada ente para organizar seu RPPS, desde que respeitadas as normas constitucionais e as normas gerais editadas pela União.

</Jurisprudencia>

---

**Próxima aula:** [1.4 — Previdência complementar (EFPC e EAPC)](/lessons/modulo-01-fundamentos-sistema-previdenciario/1.4-previdencia-complementar)
