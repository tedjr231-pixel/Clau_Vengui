const http = require('http');
const httpProxy = require('http-proxy');
const fs = require('fs');
const path = require('path');

const PORT = 7000;
const TARGET = 'http://localhost:3000';

// Criar proxy reverso
const proxy = httpProxy.createProxyServer({
    target: TARGET,
    changeOrigin: true,
    ws: true,
});

// Handle errors
proxy.on('error', (err, req, res) => {
    console.error('Proxy Error:', err);
    res.writeHead(502, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Erro de Conexão</title>
            <style>
                body { font-family: Arial; background: #f0f0f0; padding: 20px; }
                .box { background: white; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto; }
                h1 { color: #d32f2f; }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>❌ Erro ao conectar ao Remotion Studio</h1>
                <p>Tentando conectar a: ${TARGET}</p>
                <p>Erro: ${err.message}</p>
                <p><a href="/">Tentar novamente</a></p>
            </div>
        </body>
        </html>
    `);
});

// Criar servidor
const server = http.createServer((req, res) => {
    // Log requests
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Proxy to Remotion Studio
    proxy.web(req, res);
});

// Handle WebSocket upgrade
server.on('upgrade', (req, socket, head) => {
    proxy.ws(req, socket, head);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('\n╔════════════════════════════════════════════════════════╗');
    console.log('║    🌐 REMOTION STUDIO - PROXY PÚBLICO ATIVO            ║');
    console.log('╠════════════════════════════════════════════════════════╣');
    console.log(`║  🔗 URL PÚBLICA:                                        ║`);
    console.log(`║  http://0.0.0.0:${PORT}                                      ║`);
    console.log(`║  ou                                                    ║`);
    console.log(`║  http://localhost:${PORT}                                    ║`);
    console.log('║                                                        ║');
    console.log(`║  🎯 Proxy para: ${TARGET}                         ║`);
    console.log('║                                                        ║');
    console.log('║  ✅ WebSocket suportado                               ║');
    console.log('║  ✅ Acesso remoto habilitado                          ║');
    console.log('║  ✅ Pronto para usar                                  ║');
    console.log('║                                                        ║');
    console.log('║  Pressione Ctrl+C para parar                          ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Porta ${PORT} já está em uso`);
        process.exit(1);
    } else {
        console.error('Erro no servidor:', err);
        process.exit(1);
    }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n👋 Encerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor encerrado');
        process.exit(0);
    });
});
