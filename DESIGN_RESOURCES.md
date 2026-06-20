# 🎨 RECURSOS DE DESIGN - Coca-Cola Remotion

## 🖌️ Ferramentas Recomendadas

### Design e Prototipagem

#### 1. **Figma** (Web-based)
- URL: https://figma.com
- Uso: Criar wireframes, protótipos, designs
- Funcionalidades:
  - Edição colaborativa
  - Design system
  - Prototype com animações
  - Export para web

**Como usar:**
```
1. Abrir Figma
2. Criar novo arquivo
3. Usar grid 540x960 (TikTok)
4. Desenhar componentes
5. Exportar como PNG/SVG
```

#### 2. **Adobe XD** (Desktop + Cloud)
- URL: https://adobe.com/xd
- Uso: Design de interfaces e prototipagem
- Funcionalidades:
  - Design system
  - Animações interativas
  - Exportação direta
  - Cloud sharing

#### 3. **Sketch** (macOS)
- URL: https://sketchapp.com
- Uso: Design profissional
- Funcionalidades:
  - Symbols e componentes
  - Plugins extensos
  - Exportação

---

## 🎬 Ferramentas de Animação

### 1. **Framer Motion** (React)
```bash
npm install framer-motion
```
Integração com Remotion:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ scale: 0.5 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
/>
```

### 2. **Three.js** (3D)
```bash
npm install three
```
Para criar efeitos 3D avançados na garrafa

### 3. **Gsap** (Animation Library)
```bash
npm install gsap
```
Timeline de animações profissional

---

## 🎨 Paleta de Cores - Geradores

### ColorPalette.com
- URL: https://colorpalette.com
- Gera paletas a partir de imagens
- Exporta em múltiplos formatos

### Coolors.co
- URL: https://coolors.co
- Gerador de paletas aleatórias
- Lock cores, gerar variações
- Export CSS, JSON, etc

### Color Hunt
- URL: https://colorhunt.co
- Paletas criadas por designers
- Trending palettes
- Inspiração diária

**Nossa paleta (já definida):**
```
#DC143C (Crimson)
#8B0000 (Dark Red)
#FF1744 (Bright Red)
#FFFFFF (White)
#000000 (Black)
```

---

## 🔤 Tipografia - Recursos

### Google Fonts
- URL: https://fonts.google.com
- Alternativa a Arial: **Roboto Bold** (similar)

**Uso em Remotion:**
```tsx
import { registerFont } from 'canvas';
registerFont('path/to/font.ttf', { family: 'Custom' });
```

### Font Pairing
- https://fontpair.co (Combinar fontes)
- https://www.typ.io (Inspiração tipográfica)

**Nossa fonte:**
```
Arial / Helvetica (Sans-serif)
Fallback: Roboto
Pesos: Regular (400), Bold (700)
```

---

## 📐 Ferramentas de Layout

### Grid System
```css
/* Grid 3 colunas para bolhas */
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10%;
```

### Responsive Canvas
Para adaptar ao mobile:
```tsx
const width = Math.min(540, window.innerWidth);
const height = (width / 540) * 960;
```

---

## 🎯 Ícones e Assets

### FontAwesome
```bash
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
```

### Material Icons
```bash
npm install @mui/icons-material
```

### Ícones Customizados
Criar em Figma e exportar como SVG:
```tsx
import { ReactComponent as Icon } from './icon.svg';
```

---

## 📊 Documentação de Design

### Design Tokens
```json
{
  "colors": {
    "primary": "#DC143C",
    "secondary": "#8B0000",
    "accent": "#FF1744"
  },
  "typography": {
    "h1": { "size": 72, "weight": 700 },
    "h2": { "size": 54, "weight": 700 },
    "body": { "size": 16, "weight": 400 }
  },
  "spacing": {
    "xs": "5px",
    "sm": "10px",
    "md": "15px",
    "lg": "20px",
    "xl": "30px"
  }
}
```

### Component Library
Criar em Storybook:
```bash
npm install @storybook/react
npx storybook init
```

---

## 🎬 Animação CSS Avançada

### Keyframes Customizados
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(220, 20, 60, 0.4); }
  50% { box-shadow: 0 0 40px rgba(220, 20, 60, 0.8); }
}
```

### Interpolação Smooth
```tsx
interpolate(
  frame,
  [0, 30],
  [0, 1],
  { easing: Easing.out(Easing.expo) }
)
```

---

## 🛠️ Ferramentas de Produtividade

### Design Collaboration
- Figma Comments
- Zeplin (Design handoff)
- InVision (Prototyping)

### Version Control para Design
- Git (versionar SVGs)
- Abstract (Design versioning)

### Performance
- ImageOptim (Compressão)
- SVG Optimizer (SVG minify)
- TinyPNG (Compressão PNG)

---

## 📚 Recursos Educacionais

### Cursos Online
1. **Skillshare** - Motion Design
2. **Udemy** - UI/UX Design
3. **Dribbble** - Design inspiration
4. **Behance** - Portfolio showcase

### Comunidades
1. **Designer Hangout** - Comunidade
2. **Design + Code** - Recursos
3. **ADPList** - Mentoria gratuita

### Blogs e Artigos
- https://designsystem.digital
- https://nngroup.com/articles
- https://css-tricks.com

---

## 💻 Código de Exemplo - Design System

### Color System
```tsx
const colors = {
  primary: '#DC143C',
  secondary: '#8B0000',
  accent: '#FF1744',
  white: '#FFFFFF',
  black: '#000000',
  dark: '#1A1A1A',
};

// Com transparência
const withAlpha = (color, alpha) => {
  return color.includes('rgb')
    ? color.replace(')', `, ${alpha})`)
    : color + Math.round(alpha * 255).toString(16);
};
```

### Typography System
```tsx
const typography = {
  h1: { size: 72, weight: 700, family: 'Arial' },
  h2: { size: 54, weight: 700, family: 'Arial' },
  h3: { size: 36, weight: 700, family: 'Arial' },
  body: { size: 16, weight: 400, family: 'Arial' },
  small: { size: 12, weight: 400, family: 'Arial' },
};

// Aplicar estilo
const applyTypography = (element, style) => {
  element.style.fontSize = `${style.size}px`;
  element.style.fontWeight = style.weight;
  element.style.fontFamily = style.family;
};
```

### Spacing System
```tsx
const spacing = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
  xxl: 50,
};

// Usar
const padding = `${spacing.lg}px ${spacing.xl}px`;
```

---

## 🚀 Checklist de Implementação Design

### Fase 1: Planejamento
- ✅ Paleta de cores definida
- ✅ Tipografia estabelecida
- ✅ Grid system criado
- ✅ Componentes especificados

### Fase 2: Prototipagem
- ⏳ Criar mockups em Figma
- ⏳ Animar transições
- ⏳ Validar com stakeholders
- ⏳ Ajustar feedback

### Fase 3: Implementação
- ⏳ Codificar componentes
- ⏳ Integrar animações
- ⏳ Testar em múltiplos navegadores
- ⏳ Otimizar performance

### Fase 4: Finalização
- ⏳ QA visual
- ⏳ Testes de acessibilidade
- ⏳ Deploy
- ⏳ Monitoramento

---

## 📱 Acessibilidade em Design

### Contraste de Cores
```
Mínimo recomendado: 4.5:1 para texto
Nossa paleta: #DC143C sobre #FFFFFF = 9.5:1 ✅
```

### Tipografia Acessível
```
Mínimo: 12px
Recomendado: 16px+
Linha: 1.5x do tamanho da fonte
```

### Motion & Epilepsia
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 🎯 KPIs de Design

### Métricas
- **Legibilidade**: Contrast ratio ≥ 4.5:1
- **Performance**: LCP < 2.5s
- **Interação**: FID < 100ms
- **Estabilidade**: CLS < 0.1

### Ferramentas de Medição
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
- GTmetrix

---

## 📞 Suporte Adicional

### Comunidades
- Designer Discord Servers
- Reddit: r/design, r/web_design
- Twitter: #DesignCommunity

### Mentorias
- ADPList (Gratuito)
- Dribbble Mentorship
- Design Buddy Programs

---

**Data**: 2026-06-20  
**Versão**: 1.0  
**Status**: ✅ Referência Completa
