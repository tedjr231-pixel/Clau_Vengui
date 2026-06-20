const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

// Configurar caminho do FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

const framesDir = path.join(__dirname, 'my-remotion-project/frames');
const outputDir = path.join(__dirname, 'my-remotion-project/out');
const outputFile = path.join(outputDir, 'coca-cola-ad.mp4');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('\n╔════════════════════════════════════════════════════════╗');
console.log('║          🎬 Convertendo Frames para MP4               ║');
console.log('╠════════════════════════════════════════════════════════╣');
console.log(`║  📁 Frames: ${framesDir}`);
console.log(`║  📤 Saída: ${outputFile}`);
console.log('║  🎥 Codec: H.264                                       ║');
console.log('║  ⏱️  FPS: 30                                            ║');
console.log('║  📐 Resolução: 540x960                                 ║');
console.log('╚════════════════════════════════════════════════════════╝\n');

// Processar com FFmpeg
const startTime = Date.now();

ffmpeg(path.join(framesDir, 'frame_%06d.png'))
    .inputFPS(30)
    .outputOptions([
        '-c:v libx264',
        '-pix_fmt yuv420p',
        '-preset medium',
        '-crf 23',
    ])
    .on('start', (commandLine) => {
        console.log('🚀 Iniciando renderização...');
        console.log(`   Comando: ${commandLine}\n`);
    })
    .on('progress', (progress) => {
        const percent = Math.round((progress.frames / 900) * 100);
        const bar = '█'.repeat(Math.floor(percent / 5)) + '░'.repeat(20 - Math.floor(percent / 5));
        process.stdout.write(`\r   Progresso: [${bar}] ${percent}% (${progress.frames}/900 frames)`);
    })
    .on('error', (err) => {
        console.error('\n\n❌ Erro ao converter vídeo:');
        console.error(err.message);
        process.exit(1);
    })
    .on('end', () => {
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        console.log(`\n\n✅ Vídeo gerado com sucesso!\n`);
        console.log('╔════════════════════════════════════════════════════════╗');
        console.log('║                  🎉 CONCLUÍDO!                        ║');
        console.log('╠════════════════════════════════════════════════════════╣');
        console.log(`║  📁 Arquivo: coca-cola-ad.mp4                         ║`);
        console.log(`║  📊 Tamanho: ${getFileSize(outputFile)}                                ║`);
        console.log(`║  ⏱️  Tempo de renderização: ${duration}s                ║`);
        console.log(`║  📐 Resolução: 540x960 (TikTok)                       ║`);
        console.log(`║  ⏰ Duração: 30 segundos                               ║`);
        console.log(`║  🎬 Taxa: 30 FPS                                       ║`);
        console.log('║                                                        ║');
        console.log(`║  📂 Localização:                                       ║`);
        console.log(`║  ${outputFile.substring(0, 50)}... ║`);
        console.log('║                                                        ║');
        console.log('║  ✨ Pronto para download e visualização!              ║');
        console.log('╚════════════════════════════════════════════════════════╝\n');

        // Informações adicionais
        console.log('📌 Próximos passos:');
        console.log(`   • Arquivo: ${outputFile}`);
        console.log('   • Formato: MP4 H.264');
        console.log('   • Compatível com: Chrome, Firefox, Safari, Mobile');
        console.log('   • Ideal para: TikTok, Instagram Reels, YouTube Shorts\n');
    })
    .save(outputFile);

function getFileSize(filePath) {
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        return `${sizeInMB} MB`;
    }
    return 'N/A';
}
