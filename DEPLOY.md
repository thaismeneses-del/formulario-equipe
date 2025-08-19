# 🚀 Guia de Deploy - Formulário de Presentes

## Opções de Publicação

### 1. Vercel (Recomendado - Gratuito)

#### Via CLI:
```bash
# Login no Vercel
npx vercel login

# Deploy
npx vercel --prod
```

#### Via Interface Web:
1. Acesse: https://vercel.com
2. Crie conta (GitHub, GitLab, Bitbucket)
3. Clique "New Project"
4. Importe repositório ou faça upload
5. Configure:
   - Framework: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Deploy!

### 2. Netlify (Alternativa Gratuita)

```bash
# Instalar CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=build
```

### 3. GitHub Pages

```bash
# Adicionar no package.json:
"homepage": "https://seuusuario.github.io/formulario-equipe",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Instalar gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### 4. Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

## 📋 Checklist de Deploy

- [ ] Build do projeto (`npm run build`)
- [ ] Teste local (`npm start`)
- [ ] Verificar responsividade
- [ ] Testar formulário completo
- [ ] Verificar validações
- [ ] Testar em diferentes navegadores

## 🌐 URLs de Exemplo

- **Vercel**: `https://formulario-equipe.vercel.app`
- **Netlify**: `https://formulario-equipe.netlify.app`
- **GitHub Pages**: `https://seuusuario.github.io/formulario-equipe`
- **Firebase**: `https://formulario-equipe.web.app`

## 📱 Compartilhamento

### Opções de Divulgação:
1. **Email corporativo** com link direto
2. **Slack/Teams** da empresa
3. **QR Code** para acesso mobile
4. **Intranet** da empresa
5. **WhatsApp/Telegram** da equipe

### QR Code:
- Use sites como: https://qr-code-generator.com
- Cole a URL do formulário
- Baixe e compartilhe

## 🔧 Configurações Avançadas

### Domínio Personalizado:
- **Vercel**: Settings > Domains
- **Netlify**: Domain Management
- **Firebase**: Hosting > Custom Domains

### Variáveis de Ambiente:
```bash
# .env.production
REACT_APP_API_URL=https://api.exemplo.com
REACT_APP_TITLE=Formulário de Presentes
```

## 📊 Monitoramento

### Analytics (Opcional):
- Google Analytics
- Vercel Analytics
- Netlify Analytics

### Performance:
- Lighthouse Score
- Core Web Vitals
- Mobile Performance

## 🔒 Segurança

- HTTPS automático
- Headers de segurança
- CSP (Content Security Policy)
- Rate limiting (se necessário)

## 📞 Suporte

Se precisar de ajuda:
1. Verifique os logs de build
2. Teste localmente primeiro
3. Consulte a documentação da plataforma
4. Entre em contato com o suporte

---

**🎉 Seu formulário estará online e acessível para toda a equipe!**
