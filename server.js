const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remotion Studio - Coca-Cola Ad</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial;
            background: #000;
            height: 100vh;
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #DC143C, #FF1744);
            color: white;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 4px 20px rgba(220, 20, 60, 0.3);
            z-index: 100;
            position: relative;
        }
        .header-content {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .header h1 {
            font-size: 24px;
            font-weight: bold;
        }
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        .status {
            background: #22c55e;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .status::before {
            content: '';
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .info-bar {
            background: #1a1a1a;
            color: #999;
            padding: 10px 20px;
            font-size: 12px;
            border-bottom: 1px solid #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .info-bar strong {
            color: #DC143C;
        }
        .container {
            width: 100%;
            height: calc(100vh - 75px);
            position: relative;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: block;
        }
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #DC143C;
            z-index: 1000;
        }
        .loading h2 {
            margin-bottom: 20px;
            font-size: 24px;
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #333;
            border-top: 4px solid #DC143C;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <div>
                <h1>🎬 Remotion Studio</h1>
                <p>Coca-Cola TikTok Advertisement (30s)</p>
            </div>
            <div class="status">✓ RUNNING ON PORT 5000</div>
        </div>
    </div>

    <div class="info-bar">
        <span>Proxy: <strong>http://localhost:5000</strong> → <strong>http://localhost:3000</strong></span>
        <span>Projeto: <strong>my-remotion-project</strong> | Composição: <strong>CocaColaAd</strong></span>
    </div>

    <div class="container">
        <div class="loading">
            <div class="spinner"></div>
            <h2>Carregando Remotion Studio...</h2>
            <p style="color: #999; font-size: 14px;">Conectando a localhost:3000</p>
        </div>
        <iframe
            src="http://localhost:3000"
            title="Remotion Studio"
            onload="document.querySelector('.loading').style.display='none'"
        ></iframe>
    </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║          🎬 Remotion Studio - Proxy Server              ║');
    console.log('╠════════════════════════════════════════════════════════╣');
    console.log(`║  🌐 Servidor rodando em: http://localhost:${PORT}              ║`);
    console.log('║  🎥 Proxy para: http://localhost:3000                 ║');
    console.log('║  📱 Projeto: my-remotion-project                      ║');
    console.log('║  🎞️  Composição: CocaColaAd (30 segundos)              ║');
    console.log('║                                                        ║');
    console.log('║  ✅ Status: ATIVO                                       ║');
    console.log('║  ⏱️  Tempo: 30 segundos (900 frames @ 30fps)           ║');
    console.log('║  📐 Dimensões: 540x960 (TikTok vertical)              ║');
    console.log('╠════════════════════════════════════════════════════════╣');
    console.log('║  Abra seu navegador em:                               ║');
    console.log(`║  👉 http://localhost:${PORT}                              ║`);
    console.log('║                                                        ║');
    console.log('║  Pressione Ctrl+C para parar o servidor               ║');
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
