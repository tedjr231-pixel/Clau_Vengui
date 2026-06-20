const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const WIDTH = 540;
const HEIGHT = 960;
const FPS = 30;
const DURATION = 30; // segundos
const TOTAL_FRAMES = FPS * DURATION; // 900 frames

// Cores Coca-Cola
const RED = '#DC143C';
const DARK_RED = '#8b0000';
const WHITE = '#ffffff';
const BLACK = '#000000';

// Criar diretório de frames
const framesDir = path.join(__dirname, 'my-remotion-project/frames');
if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
}

// Funções de interpolação
function interpolate(frame, inputRange, outputRange, options = {}) {
    const [inputStart, inputEnd] = inputRange;
    const [outputStart, outputEnd] = outputRange;
    const { extrapolateLeft = 'extend', extrapolateRight = 'extend' } = options;

    if (frame < inputStart && extrapolateLeft === 'clamp') {
        return outputStart;
    }
    if (frame > inputEnd && extrapolateRight === 'clamp') {
        return outputEnd;
    }

    const progress = (frame - inputStart) / (inputEnd - inputStart);
    const clampedProgress = Math.max(0, Math.min(1, progress));
    return outputStart + (outputEnd - outputStart) * clampedProgress;
}

// Desenhar Scene 1: Intro
function drawScene1(ctx, frame) {
    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, RED);
    gradient.addColorStop(1, DARK_RED);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Logo animado
    const scale = interpolate(frame, [0, 15], [0.5, 1]);
    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.scale(scale, scale);

    // Círculo vermelho
    ctx.fillStyle = RED;
    ctx.beginPath();
    ctx.arc(0, -80, 40, 0, Math.PI * 2);
    ctx.fill();

    // Texto COCA-COLA
    ctx.fillStyle = WHITE;
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 4;
    ctx.fillText('COCA-COLA', 0, 80);

    ctx.restore();
}

// Desenhar Scene 2: Garrafa
function drawScene2(ctx, frame) {
    const localFrame = frame - 180;

    // Fundo
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#333333');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Garrafa giratória
    const rotation = interpolate(localFrame, [0, 60], [0, 360], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.rotate((rotation * Math.PI) / 180);

    // Círculo vermelho grande (garrafa)
    ctx.fillStyle = RED;
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.fill();

    // Glow
    ctx.strokeStyle = 'rgba(220, 20, 60, 0.6)';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.arc(0, 0, 80, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
}

// Desenhar Scene 3: Texto
function drawScene3(ctx, frame) {
    const localFrame = frame - 360;

    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, RED);
    gradient.addColorStop(1, '#FF6B6B');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Texto com bounce
    const scale = interpolate(localFrame, [0, 10, 40, 60], [0.8, 1.2, 1.1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.scale(scale, scale);

    ctx.fillStyle = WHITE;
    ctx.font = 'bold 54px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 4;
    ctx.fillText('ABRA A', 0, -40);
    ctx.fillText('FELICIDADE', 0, 40);

    ctx.restore();
}

// Desenhar Scene 4: Bolhas
function drawScene4(ctx, frame) {
    // Fundo
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, DARK_RED);
    gradient.addColorStop(1, RED);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const localFrame = frame - 540;

    // Desenhar bolhas
    for (let i = 0; i < 8; i++) {
        const delay = i * 8;
        const bubbleFrame = localFrame - delay;
        const y = interpolate(bubbleFrame, [0, 60], [0, -300], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        });
        const scale = interpolate(bubbleFrame, [0, 30], [1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        });

        ctx.save();
        ctx.translate((20 + i * 10) * (WIDTH / 100), HEIGHT / 2 + y);
        ctx.scale(scale, scale);

        // Bolha
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(0, 0, 15, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
    }

    // Texto
    ctx.fillStyle = WHITE;
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PURA ENERGIA!', WIDTH / 2, HEIGHT / 2);
}

// Desenhar Scene 5: CTA
function drawScene5(ctx, frame) {
    // Fundo
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, RED);
    gradient.addColorStop(1, '#FF1744');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const localFrame = frame - 720;
    const scale = interpolate(localFrame, [0, 15], [0.5, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2);
    ctx.scale(scale, scale);

    // Box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(-120, -80, 240, 160);

    ctx.strokeStyle = WHITE;
    ctx.lineWidth = 3;
    ctx.strokeRect(-120, -80, 240, 160);

    // Texto
    ctx.fillStyle = WHITE;
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('COCA-COLA', 0, -30);

    ctx.font = 'bold 24px Arial';
    ctx.fillText('Taste the Feeling', 0, 20);

    ctx.font = '20px Arial';
    ctx.fillText('🎉 Disponível em todo lugar!', 0, 60);

    ctx.restore();
}

// Função para desenhar frame
function drawFrame(frameNumber) {
    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');

    // Fundo preto
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Desenhar cena apropriada
    if (frameNumber < 180) {
        drawScene1(ctx, frameNumber);
    } else if (frameNumber < 360) {
        drawScene2(ctx, frameNumber);
    } else if (frameNumber < 540) {
        drawScene3(ctx, frameNumber);
    } else if (frameNumber < 720) {
        drawScene4(ctx, frameNumber);
    } else {
        drawScene5(ctx, frameNumber);
    }

    // Salvar como PNG
    const buffer = canvas.toBuffer('image/png');
    const filename = path.join(framesDir, `frame_${String(frameNumber).padStart(6, '0')}.png`);
    fs.writeFileSync(filename, buffer);
}

// Gerar todos os frames
console.log('\n🎬 Gerando frames do vídeo Coca-Cola...\n');
console.log(`📊 Total de frames: ${TOTAL_FRAMES}`);
console.log(`⏱️  Duração: ${DURATION}s @ ${FPS}fps`);
console.log(`📐 Dimensões: ${WIDTH}x${HEIGHT}\n`);

const startTime = Date.now();
let lastLog = 0;

for (let i = 0; i < TOTAL_FRAMES; i++) {
    drawFrame(i);

    // Log a cada 50 frames
    if (i % 50 === 0 || i === TOTAL_FRAMES - 1) {
        const progress = ((i + 1) / TOTAL_FRAMES * 100).toFixed(1);
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        console.log(`✓ Frames: ${i + 1}/${TOTAL_FRAMES} (${progress}%) - Tempo: ${elapsed}s`);
    }
}

const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
console.log(`\n✅ Frames gerados com sucesso!\n`);
console.log(`📁 Localização: ${framesDir}`);
console.log(`⏱️  Tempo total: ${totalTime}s\n`);

console.log('📌 Próximo passo:');
console.log('   Use ffmpeg para converter frames em MP4:');
console.log(`   ffmpeg -framerate ${FPS} -i ${framesDir}/frame_%06d.png -c:v libx264 -pix_fmt yuv420p out/coca-cola-ad.mp4\n`);

// Tentar criar um arquivo índice
const indexData = {
    totalFrames: TOTAL_FRAMES,
    fps: FPS,
    duration: DURATION,
    width: WIDTH,
    height: HEIGHT,
    framesDir: framesDir,
    createdAt: new Date().toISOString(),
};

fs.writeFileSync(
    path.join(framesDir, 'index.json'),
    JSON.stringify(indexData, null, 2)
);

console.log('✨ Frames prontos para conversão em vídeo!');
