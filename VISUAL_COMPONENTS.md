# 🎨 COMPONENTES VISUAIS - Coca-Cola Remotion

## 1. Logo Coca-Cola

### Versão Padrão
```
🔴 COCA-COLA
```

**Especificações:**
- Ícone: Círculo vermelho (#DC143C)
- Tamanho: 80px
- Texto: Arial Bold, 72px
- Cor do texto: Branco (#FFFFFF)
- Espaçamento: 20px entre círculo e texto
- Alinhamento: Centro horizontal

**Animações:**
- Entrada: Scale 0.5 → 1.0 (0.5s, easing back)
- Hover: Glow de 30px
- Saída: Fade out

---

## 2. Garrafa Coca-Cola

### Estrutura
```
┌─ Gargalo
├─ Corpo (Cilíndrico)
├─ Brilho (Gradiente)
└─ Sombra
```

**Especificações:**
- Forma: Cilindro com border-radius 15px
- Cor primária: #DC143C
- Cor secundária: #8B0000
- Altura: 140px
- Largura: 70px
- Glow: box-shadow 0 0 30px rgba(220, 20, 60, 0.6)
- Brilho: Gradiente linear 90° com 40% opacidade branca

**Animações:**
- Rotação: 360° em 3s (linear)
- Pulse: Scale 1.0 → 1.1 → 1.0 (1s)
- Entrada: Scale 0.3 → 1.0 (easing expo)

---

## 3. Texto Principal

### "ABRA A FELICIDADE"

**Especificações:**
- Fonte: Arial Bold
- Tamanho: 54px
- Cor: Branco (#FFFFFF)
- Alinhamento: Centro
- Espaçamento entre linhas: 10px
- Sombra: 0 4px 20px rgba(0,0,0,0.4)
- Letter-spacing: 3px

**Animações:**
- Entrada: Scale 0.8 → 1.2 → 1.1 (easing bounce, 0.6s)
- Saída: Scale 1.1 → 0 (0.3s)

**Variações:**
- "Taste the Feeling" (24px)
- "PURA ENERGIA!" (48px)
- "Disponível em todo lugar!" (20px)

---

## 4. Bolhas Flutuantes

### Padrão
```
  ◯  ◯  ◯
 ◯  ◯  ◯
  ◯  ◯  ◯
```

**Especificações:**
- Forma: Círculo perfeito (border-radius 50%)
- Tamanho: 20-35px (variável)
- Fundo: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(220,20,60,0.3))
- Borda: 2px solid rgba(255,255,255,0.4)
- Quantidade: 8 bolhas
- Espaçamento: 10% entre colunas

**Animações:**
- Float: translateY(0 → -300px) em 3s
- Scale: 1.0 → 0 durante a ascensão
- Opacity: 1.0 → 0.5 → 0
- Delay escalonado: 0, 0.3s, 0.6s...

---

## 5. Box CTA

### Estrutura
```
┌──────────────────────────┐
│    COCA-COLA             │
│  Taste the Feeling       │
│ 🎉 Disponível em todo   │
│    lugar!                │
└──────────────────────────┘
```

**Especificações:**
- Fundo: rgba(255,255,255,0.1)
- Borda: 3px solid #FFFFFF
- Border-radius: 20px
- Padding: 30px
- Largura máxima: 280px
- Sombra: 0 10px 30px rgba(0,0,0,0.2)

**Conteúdo Interno:**
- Título: 48px, Bold, branco
- Slogan: 24px, Regular, branco
- CTA: 16px, Regular, branco com opacidade 0.9

**Animações:**
- Entrada: Scale 0.5 → 1.0 (easing back, 0.5s)
- Saída: Scale 1.0 → 0 (0.3s)

---

## 6. Fundo Gradiente

### Paleta de Gradientes

**Gradiente 1 - Intro:**
```css
linear-gradient(135deg, #dc143c 0%, #8b0000 100%)
```
- Ângulo: 135°
- Cor inicial: #DC143C
- Cor final: #8B0000

**Gradiente 2 - Garrafa:**
```css
linear-gradient(135deg, #1a1a1a 0%, #333333 100%)
```
- Ângulo: 135°
- Cor inicial: #1A1A1A
- Cor final: #333333

**Gradiente 3 - Texto:**
```css
linear-gradient(135deg, #DC143C 0%, #FF6B6B 100%)
```
- Ângulo: 135°
- Cor inicial: #DC143C
- Cor final: #FF6B6B

**Gradiente 4 - Bolhas:**
```css
linear-gradient(135deg, #8b0000 0%, #DC143C 100%)
```
- Ângulo: 135°
- Cor inicial: #8B0000
- Cor final: #DC143C

**Gradiente 5 - CTA:**
```css
linear-gradient(135deg, #DC143C 0%, #FF1744 100%)
```
- Ângulo: 135°
- Cor inicial: #DC143C
- Cor final: #FF1744

---

## 7. Efeitos Especiais

### Sombra Padrão
```css
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
```

### Glow Efeito
```css
box-shadow: 0 0 30px rgba(220, 20, 60, 0.6);
filter: drop-shadow(0 0 20px rgba(220, 20, 60, 0.5));
```

### Overlay Transparente
```css
background: rgba(220, 20, 60, 0.1);
backdrop-filter: blur(10px);
```

### Brilho Interno
```css
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
```

---

## 8. Ícones e Símbolos

### Ícones Utilizados
- 🔴 Círculo Vermelho (Logo)
- ✨ Sparkles (Destaque)
- 🎉 Confete (Celebração)
- 🎬 Claquete (Vídeo)
- 📱 Celular (Mobile-first)

### Tamanho dos Ícones
- Pequeno: 16px
- Médio: 24px
- Grande: 48px
- Gigante: 80px

---

## 9. Paleta de Cores - Detalhes

### Cores Quentes
```
#DC143C ████ Crimson (Primária)
#8B0000 ████ Dark Red (Escura)
#FF1744 ████ Bright Red (Vibrante)
#FF6B6B ████ Light Red (Clara)
```

### Cores Neutras
```
#FFFFFF ████ Branco (Texto/Contraste)
#000000 ████ Preto (Sombras)
#1A1A1A ████ Cinza Escuro (Fundo alt)
#333333 ████ Cinza Médio
```

### Cores com Transparência
```
rgba(220, 20, 60, 0.1) ▓░░░░░░░░░ 10% - Overlay suave
rgba(220, 20, 60, 0.3) ▓▓▓░░░░░░░░ 30% - Overlay médio
rgba(220, 20, 60, 0.6) ▓▓▓▓▓▓░░░░░ 60% - Glow forte
```

---

## 10. Tipografia - Peso dos Textos

### Hierarquia Visual
```
Bold 72px ╔════════════════════╗
          ║  COCA-COLA         ║  Identidade
          ╚════════════════════╝

Bold 54px ╔════════════════════╗
          ║  ABRA A            ║  Título
          ║  FELICIDADE        ║  Principal
          ╚════════════════════╝

Bold 24px ╔════════════════════╗
          ║  Taste the Feeling ║  Slogan
          ╚════════════════════╝

Regular 18px ╔════════════════════╗
             ║ Disponível em      ║  CTA
             ║ todo lugar!        ║
             ╚════════════════════╝
```

---

## 11. Espaçamento e Layout

### Margem Padrão
- Lateral: 20px
- Vertical: 30px
- Entre elementos: 15px

### Padding Padrão
- Box: 30px
- Botão: 12px 20px
- Ícone: 10px

### Grid
- Colunas: 3 (para bolhas)
- Espaçamento: 10% da largura

---

## 12. Tabela de Uso dos Componentes

| Componente | Cena 1 | Cena 2 | Cena 3 | Cena 4 | Cena 5 |
|-----------|--------|--------|--------|--------|--------|
| Logo | ✅ | ❌ | ❌ | ❌ | ❌ |
| Garrafa | ❌ | ✅ | ❌ | ❌ | ❌ |
| Texto Principal | ❌ | ❌ | ✅ | ❌ | ❌ |
| Bolhas | ❌ | ❌ | ❌ | ✅ | ❌ |
| Box CTA | ❌ | ❌ | ❌ | ❌ | ✅ |
| Gradiente BG | ✅ | ✅ | ✅ | ✅ | ✅ |
| Sombra | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## ✅ Checklist de Implementação

- ✅ Logo pronto
- ✅ Garrafa pronta
- ✅ Textos implementados
- ✅ Bolhas animadas
- ✅ Box CTA criado
- ✅ Gradientes aplicados
- ✅ Efeitos especiais ativados
- ✅ Tipografia consistente
- ✅ Cores padronizadas
- ✅ Animações suaves

---

**Data**: 2026-06-20  
**Versão**: 1.0  
**Status**: ✅ Pronto para Implementação
