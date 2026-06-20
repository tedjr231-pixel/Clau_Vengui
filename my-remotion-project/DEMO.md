# 🎬 Coca-Cola TikTok Advertisement (30 segundos)

## ✨ Projeto Criado com Sucesso!

Um vídeo publicitário criativo de **30 segundos** em **formato TikTok (9:16)** usando Remotion.

---

## 📱 Especificações Técnicas

- **Dimensões**: 540x960 pixels (formato vertical TikTok)
- **Duração**: 30 segundos (900 frames @ 30fps)
- **Taxa de Quadros**: 30 FPS
- **Formato de Saída**: MP4 (H.264)

---

## 🎥 Estrutura do Vídeo (5 Cenas)

### 🔴 **Cena 1: Intro Animada (0-3 segundos)**
- Logo Coca-Cola com animação de escala
- Fundo gradiente: vermelho escuro a carmesim
- Efeito de opacidade suave
- Texto: "COCA-COLA"

```
Animações:
- Scale: 0.5 → 1.0 (Easing.out(Easing.back))
- Opacity: 0 → 1
```

---

### 🔴 **Cena 2: Garrafa Giratória (3-6 segundos)**
- Garrafa Coca-Cola em 3D com rotação completa
- Glow vermelho intenso ao redor da garrafa
- Brilho refletido na lateral
- Efeito de escala e entrada suave

```
Animações:
- Rotation: 0° → 360°
- Scale: 0.3 → 1.0 (Easing.out(Easing.expo))
- Opacity: 0 → 1
```

---

### 💬 **Cena 3: Texto Motivacional (6-9 segundos)**
- Mensagem principal: "ABRA A FELICIDADE"
- Efeito de bounce de alta energia
- Subtítulo: "✨ REFRESCANTE ✨"
- Fundo com gradiente vermelho vibrante

```
Animações:
- Scale: 0.8 → 1.2 → 1.1 → 0 (Easing.out(Easing.bounce))
- Opacity: 0 → 1 → 1 → 0
```

---

### 🫧 **Cena 4: Efeito de Bolhas (9-12 segundos)**
- 8 bolhas animadas subindo pela tela
- Gradiente radiado em cada bolha
- Efeito de desaparecimento gradual
- Fundo gradiente escuro → carmesim

```
Animações (por bolha):
- TranslateY: 0 → -300px
- Scale: 1.0 → 0 (durante ascensão)
- Opacity: 1 → 0.8 → 0
- Delay escalonado: 0-56 frames
```

---

### 🎉 **Cena 5: Call-to-Action Final (12-15 segundos)**
- Box animado com branding Coca-Cola
- Texto: "COCA-COLA"
- Slogan: "Taste the Feeling"
- CTA: "🎉 Disponível em todo lugar!"
- Borda branca com fundo semi-transparente

```
Animações:
- Scale: 0.5 → 1.0 (Easing.out(Easing.back))
- Opacity: 0 → 1 → 1 → 0
```

---

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Vermelho Coca-Cola | `#DC143C` | Garrafa, fundo principal |
| Vermelho Escuro | `#8b0000` | Gradientes |
| Branco | `#ffffff` | Textos, brilhos |
| Preto | `#000000` | Sombras |

---

## 🔧 Tecnologias Utilizadas

- **Remotion 4.0** - Framework de vídeo programático
- **React 19** - Componentes dinâmicos
- **TypeScript** - Type safety
- **Node.js** - Runtime

---

## 📂 Arquivos do Projeto

```
my-remotion-project/
├── src/
│   ├── Video.tsx          # Composição principal com todas as cenas
│   └── index.tsx          # Entrada da aplicação
├── remotion.config.ts     # Configuração do Remotion
├── package.json           # Dependências
├── tsconfig.json          # Configuração TypeScript
├── .gitignore            # Exclusões do git
└── out/                  # Pasta de saída (vídeos renderizados)
```

---

## 🚀 Como Usar

### 1. **Visualizar no Remotion Studio**
```bash
npm start
# Acessa http://localhost:3000
```

### 2. **Renderizar o Vídeo**
```bash
npm run build
# Gera: out/coca-cola-ad.mp4
```

### 3. **Gerar Preview (1º Frame)**
```bash
npx remotion still src/Video.tsx --output=out/preview.png
```

---

## ✨ Características Especiais

✅ **Animações Suaves** - Usa interpolação e easing functions  
✅ **Formato Mobile** - Otimizado para TikTok (9:16)  
✅ **Performance** - 30 FPS sem stuttering  
✅ **Totalmente Customizável** - Fácil editar cores, textos, durações  
✅ **Alta Qualidade** - Renderização em resolução nativa  

---

## 🎯 Uso Prático

Este vídeo é perfeito para:
- 📱 TikTok, Instagram Reels, YouTube Shorts
- 🛍️ Campanha de marketing digital
- 🎬 Demonstração de criatividade
- 💼 Portfólio profissional

---

## 📝 Notas

O vídeo foi criado com **criatividade em mente**:
- Transições suaves e dinâmicas
- Animações sincronizadas com ritmo visual
- Cores vibrantes e chamativas
- Mensagem clara e memorável
- Call-to-action convincente

**Ideal para impressionar em redes sociais!** 🎉

---

**Criado com ❤️ usando Remotion**
