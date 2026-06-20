const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const videoFile = path.join(__dirname, 'my-remotion-project/out/coca-cola-ad.mp4');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/' || pathname === '/index.html') {
        // HTML page
        const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Download - Coca-Cola TikTok Ad</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial;
            background: linear-gradient(135deg, #dc143c 0%, #8b0000 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 60px 40px;
            max-width: 500px;
            text-align: center;
        }
        .header {
            font-size: 80px;
            margin-bottom: 20px;
        }
        h1 {
            color: #dc143c;
            font-size: 32px;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666;
            font-size: 16px;
            margin-bottom: 30px;
        }
        .video-info {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            text-align: left;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            font-size: 14px;
        }
        .info-row:last-child {
            margin-bottom: 0;
        }
        .info-label {
            color: #666;
            font-weight: 500;
        }
        .info-value {
            color: #dc143c;
            font-weight: bold;
            font-family: monospace;
        }
        .download-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: linear-gradient(135deg, #dc143c, #ff1744);
            color: white;
            border: none;
            padding: 16px 40px;
            border-radius: 10px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            width: 100%;
            box-sizing: border-box;
        }
        .download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(220, 20, 60, 0.4);
        }
        .download-btn:active {
            transform: translateY(0);
        }
        .features {
            text-align: left;
            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #eee;
        }
        .features h3 {
            color: #333;
            font-size: 16px;
            margin-bottom: 15px;
        }
        .feature-list {
            list-style: none;
        }
        .feature-list li {
            color: #666;
            font-size: 14px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .feature-list li:before {
            content: "✓";
            color: #22c55e;
            font-weight: bold;
            font-size: 16px;
        }
        .player-section {
            margin-top: 40px;
            padding: 30px;
            background: #f9f9f9;
            border-radius: 10px;
        }
        .player-section h3 {
            color: #333;
            font-size: 16px;
            margin-bottom: 15px;
        }
        video {
            width: 100%;
            max-width: 300px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .direct-link {
            margin-top: 20px;
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            text-align: center;
        }
        .direct-link p {
            color: #666;
            font-size: 12px;
            margin-bottom: 8px;
        }
        .link-box {
            background: #f5f5f5;
            padding: 10px;
            border-radius: 6px;
            word-break: break-all;
            font-family: monospace;
            font-size: 12px;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">🎬</div>
        <h1>Coca-Cola TikTok Ad</h1>
        <p class="subtitle">Vídeo publicitário de 30 segundos - Pronto para download!</p>

        <div class="video-info">
            <div class="info-row">
                <span class="info-label">📊 Resolução:</span>
                <span class="info-value">540×960 (TikTok)</span>
            </div>
            <div class="info-row">
                <span class="info-label">⏱️ Duração:</span>
                <span class="info-value">30 segundos</span>
            </div>
            <div class="info-row">
                <span class="info-label">🎬 Taxa:</span>
                <span class="info-value">30 FPS</span>
            </div>
            <div class="info-row">
                <span class="info-label">📦 Tamanho:</span>
                <span class="info-value">182 KB</span>
            </div>
            <div class="info-row">
                <span class="info-label">🎥 Formato:</span>
                <span class="info-value">MP4 H.264</span>
            </div>
        </div>

        <a href="/download" class="download-btn">
            📥 BAIXAR VÍDEO
        </a>

        <div class="player-section">
            <h3>Visualizar antes de baixar:</h3>
            <video controls>
                <source src="/video" type="video/mp4">
                Seu navegador não suporta vídeo HTML5
            </video>
        </div>

        <div class="features">
            <h3>✨ Características:</h3>
            <ul class="feature-list">
                <li>5 cenas animadas dinamicamente</li>
                <li>Cores vibrantes da marca Coca-Cola</li>
                <li>Otimizado para TikTok e Instagram Reels</li>
                <li>Compatível com todos os dispositivos</li>
                <li>Pronto para upload em redes sociais</li>
            </ul>
        </div>

        <div class="direct-link">
            <p>Link direto do vídeo:</p>
            <div class="link-box">
                http://localhost:8000/video
            </div>
        </div>
    </div>
</body>
</html>`;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
    }
    else if (pathname === '/download') {
        // Download do vídeo
        if (fs.existsSync(videoFile)) {
            const stats = fs.statSync(videoFile);
            res.writeHead(200, {
                'Content-Type': 'video/mp4',
                'Content-Length': stats.size,
                'Content-Disposition': 'attachment; filename="coca-cola-ad.mp4"'
            });
            fs.createReadStream(videoFile).pipe(res);
        } else {
            res.writeHead(404);
            res.end('Vídeo não encontrado');
        }
    }
    else if (pathname === '/video') {
        // Stream do vídeo
        if (fs.existsSync(videoFile)) {
            const stats = fs.statSync(videoFile);
            res.writeHead(200, {
                'Content-Type': 'video/mp4',
                'Content-Length': stats.size,
                'Accept-Ranges': 'bytes'
            });
            fs.createReadStream(videoFile).pipe(res);
        } else {
            res.writeHead(404);
            res.end('Vídeo não encontrado');
        }
    }
    else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║          📥 Servidor de Download de Vídeo              ║');
    console.log('╠════════════════════════════════════════════════════════╣');
    console.log(`║  🌐 Abra em seu navegador:                            ║`);
    console.log(`║  👉 http://localhost:${PORT}                              ║`);
    console.log('║                                                        ║');
    console.log('║  🎬 Download direto:                                  ║');
    console.log(`║  👉 http://localhost:${PORT}/download                    ║`);
    console.log('║                                                        ║');
    console.log('║  📺 Stream de vídeo:                                  ║');
    console.log(`║  👉 http://localhost:${PORT}/video                       ║`);
    console.log('║                                                        ║');
    console.log('║  📂 Arquivo: coca-cola-ad.mp4 (182 KB)                ║');
    console.log('║  ⏱️  Duração: 30 segundos                               ║');
    console.log('║  📐 Resolução: 540×960 (TikTok)                       ║');
    console.log('║                                                        ║');
    console.log('║  Pressione Ctrl+C para parar                          ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Erro: Porta ${PORT} já está em uso`);
        console.error('   Tente liberar a porta ou use uma porta diferente\n');
    } else {
        console.error('Erro no servidor:', err);
    }
    process.exit(1);
});
