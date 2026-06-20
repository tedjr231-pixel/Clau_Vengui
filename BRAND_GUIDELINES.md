# 🎨 IDENTIDADE VISUAL - COCA-COLA REMOTION

## Brand Overview

**Projeto**: Coca-Cola TikTok Advertisement  
**Plataforma**: Remotion (Video as Code)  
**Formato**: Vertical (9:16 - TikTok)  
**Duração**: 30 segundos  
**Público-alvo**: Redes sociais, geração Z, millennials  

---

## 🎯 Paleta de Cores

### Cores Primárias

| Cor | Código Hex | RGB | Uso |
|-----|-----------|-----|-----|
| **Vermelho Coca-Cola** | `#DC143C` | (220, 20, 60) | Cor principal, CTA, branding |
| **Vermelho Escuro** | `#8B0000` | (139, 0, 0) | Gradientes, sombras, profundidade |
| **Vermelho Vibrante** | `#FF1744` | (255, 23, 68) | Destaque, animações, transições |

### Cores Secundárias

| Cor | Código Hex | RGB | Uso |
|-----|-----------|-----|-----|
| **Branco** | `#FFFFFF` | (255, 255, 255) | Texto, contraste, limpeza |
| **Preto** | `#000000` | (0, 0, 0) | Sombras, texto, fundo |
| **Cinza Escuro** | `#1A1A1A` | (26, 26, 26) | Fundo alternativo |

### Cores de Suporte

| Cor | Código Hex | Uso |
|-----|-----------|-----|
| Ouro | `#FFD700` | Destaque premium |
| Verde | `#22C55E` | Sucesso, validação |
| Transparente Vermelho | `rgba(220, 20, 60, 0.3)` | Overlays, efeitos |

---

## 📝 Tipografia

### Fonte Principal
- **Nome**: Arial / Helvetica (Sans-serif)
- **Pesos**: Bold (títulos), Regular (corpo)
- **Tamanho**: 
  - Títulos: 48-72px
  - Subtítulos: 24-36px
  - Corpo: 14-18px

### Hierarquia de Texto

```
COCA-COLA
████████████████████ (72px, Bold, Letras maiúsculas)

Taste the Feeling
███████████████░░ (24px, Bold, Título)

Abra a Felicidade
██████████████░░░░ (54px, Bold, Destaque)

Disponível em todo lugar
████████░░░░░░░░░░ (18px, Regular, Subtítulo)
```

---

## 🎬 Sistema de Animação

### Easing Functions Padrão

| Nome | Função | Uso |
|------|--------|-----|
| **Entrada** | `Easing.out(Easing.back(1.5))` | Intros, aparições |
| **Bounce** | `Easing.out(Easing.bounce)` | Elementos dinâmicos |
| **Linear** | `linear` | Rotações, transições suaves |
| **Saída** | `Easing.out(Easing.expo)` | Fechamento de cenas |

### Durações Padrão

- **Intro**: 0.5s
- **Transição**: 0.3s
- **Cena Principal**: 6s
- **Saída**: 0.5s
- **Total**: 30s

---

## 🎨 Componentes Visuais

### Logo
```
🔴 COCA-COLA
```
- Círculo vermelho (#DC143C)
- Texto em branco, maiúscula
- Efeito de escala ao aparecer
- Tamanho: 80px

### Garrafa
```
  ╔════╗
  ║    ║ (Gargalo)
  ╠════╣
  ║    ║
  ║  🔴 ║ (Corpo - Vermelho)
  ║    ║
  ╚════╝
```
- Forma: Cilíndrica com bordas arredondadas
- Cor: #DC143C com glow
- Rotação: 360°
- Brilho: Gradiente branco com 30% opacidade

### Bolhas
```
  ◯  ◯  ◯
 ◯  ◯  ◯
  ◯  ◯  ◯
```
- Forma: Círculo perfeito
- Tamanho: 20-35px
- Cor: rgba(255,255,255,0.4)
- Borda: 2px rgba(255,255,255,0.6)
- Animação: Subir e desaparecer

### Box CTA
```
┌─────────────────────┐
│   COCA-COLA         │
│ Taste the Feeling   │
│ 🎉 Disponível!     │
└─────────────────────┘
```
- Fundo: rgba(255,255,255,0.1)
- Borda: 3px branco
- Padding: 30px
- Border-radius: 20px
- Efeito scale: 0.5 → 1.0

---

## 🎞️ Estrutura de Cenas

### Cena 1: INTRO (0-6s)
```
[Fundo Gradiente Vermelho]
         🔴
      COCA-COLA
[Easing: back(1.5)]
```
- Entrada dinâmica
- Logo aparece com escala
- Fundo: Gradiente #DC143C → #8B0000

### Cena 2: GARRAFA (6-12s)
```
[Fundo Gradiente Escuro]
          🔴
       (Girando)
       [Glow]
[Easing: linear]
```
- Rotação contínua
- Iluminação especial
- Fundo: Gradiente #1A1A1A → #333

### Cena 3: TEXTO (12-18s)
```
[Fundo Gradiente Vibrante]
     ABRA A
   FELICIDADE
   ✨ REFRESCANTE ✨
[Easing: bounce]
```
- Bounce de entrada
- Texto em branco
- Fundo: Gradiente #DC143C → #FF6B6B

### Cena 4: BOLHAS (18-24s)
```
[Fundo Gradiente Escuro-Vermelho]
  ◯  ◯  ◯  (Subindo)
 ◯  ◯  ◯
  ◯  ◯  ◯
   PURA ENERGIA!
[Easing: custom float]
```
- Bolhas ascendentes
- Desaparecimento gradual
- Efeito de profundidade

### Cena 5: CTA (24-30s)
```
[Fundo Gradiente Vermelho Vibrante]
  ┌──────────────────┐
  │  COCA-COLA       │
  │ Taste the Feeling│
  │ 🎉 Disponível!  │
  └──────────────────┘
[Easing: back(1.5)]
```
- Box animada com escala
- Mensagem final clara
- Fundo: Gradiente #DC143C → #FF1744

---

## 📐 Dimensões e Resolução

| Propriedade | Valor |
|-------------|-------|
| **Largura** | 540px |
| **Altura** | 960px |
| **Aspect Ratio** | 9:16 |
| **Format** | Vertical (TikTok) |
| **FPS** | 30 |
| **Duração** | 30 segundos |
| **Total Frames** | 900 |

---

## ✨ Efeitos Especiais

### Sombra Padrão
```css
text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
```

### Glow Efeito
```css
box-shadow: 0 0 30px rgba(220, 20, 60, 0.6);
```

### Overlay
```css
background: rgba(220, 20, 60, 0.1);
```

### Gradiente Padrão
```css
background: linear-gradient(135deg, #dc143c 0%, #8b0000 100%);
```

---

## 🎯 Mensagens-Chave

| Mensagem | Tipo | Contexto |
|----------|------|---------|
| **"COCA-COLA"** | Marca | Logo principal |
| **"ABRA A FELICIDADE"** | Call-to-action | Motivacional |
| **"PURA ENERGIA"** | Atributo | Energia/dinamismo |
| **"Taste the Feeling"** | Slogan | Finalização |
| **"🎉 Disponível em todo lugar!"** | CTA Final | Urgência |

---

## 🎬 Pacing e Ritmo

### Tempos de Cena
- **Cena 1**: 6 segundos (Intro dinâmica)
- **Cena 2**: 6 segundos (Giração mesmerista)
- **Cena 3**: 6 segundos (Impacto textual)
- **Cena 4**: 6 segundos (Movimento contínuo)
- **Cena 5**: 6 segundos (Finalização forte)

### Transições
- Fade: 0.3s
- Easing: Suave
- Sem cortes abruptos
- Fluxo contínuo

---

## 🎨 Inspirações Visuais

### Estilo
- **Moderno**: Design limpo e minimalista
- **Dinâmico**: Muita animação e movimento
- **Energético**: Cores vibrantes e vivas
- **Premium**: Efeitos sofisticados

### Referências
- TikTok Trends (2025)
- Apple Design Language
- Motion Design Moderno
- Publicidade Digital

---

## 📱 Compatibilidade

### Plataformas Alvo
- ✅ TikTok (540×960)
- ✅ Instagram Reels (540×960)
- ✅ YouTube Shorts (540×960)
- ✅ Web (Remotion Studio)

### Navegadores
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## ✅ Checklist de Identidade Visual

- ✅ Paleta de cores definida
- ✅ Tipografia estabelecida
- ✅ Sistema de animação criado
- ✅ Componentes visuais projetados
- ✅ Estrutura de cenas definida
- ✅ Efeitos especiais documentados
- ✅ Mensagens-chave alinhadas
- ✅ Pacing determinado
- ✅ Compatibilidade verificada

---

## 🎯 Próximos Passos

1. ✅ Criar assets visuais (logos, ícones)
2. ✅ Definir componentes React
3. ✅ Implementar animações
4. ✅ Testar em diferentes plataformas
5. ✅ Ajustar cores e tipografia
6. ✅ Otimizar performance

---

**Data**: 2026-06-20  
**Versão**: 1.0  
**Status**: ✅ Completo
