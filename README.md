<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Animais – Patinhas Unidas</title>
  <link rel="stylesheet" href="../css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    .filter-bar { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:40px; }
    .filter-btn {
      padding:8px 22px; border-radius:100px;
      border:2px solid var(--amber); background:none;
      color:var(--amber-dark); font-family:'DM Sans',sans-serif;
      font-size:0.875rem; font-weight:500; cursor:pointer;
      transition:all 0.2s;
    }
    .filter-btn.active, .filter-btn:hover { background:var(--amber); color:#fff; }
    .animal-badge { display:inline-block; background:var(--green-light); color:#fff; font-size:0.72rem; font-weight:600; padding:3px 10px; border-radius:100px; margin-bottom:6px; }
  </style>
</head>
<body>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="../index.html" class="logo">🐾 Patinhas Unidas</a>
      <ul class="nav-links">
        <li><a href="../index.html">Início</a></li>
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="animais.html" class="active">Animais</a></li>
        <li><a href="como-ajudar.html">Como Ajudar</a></li>
        <li><a href="contato.html">Contato</a></li>
      </ul>
      <a href="como-ajudar.html" class="btn-nav">Adote Agora</a>
      <button class="menu-toggle" onclick="toggleMenu()">☰</button>
    </div>
    <ul class="nav-mobile" id="navMobile">
      <li><a href="../index.html">Início</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li><a href="animais.html">Animais</a></li>
      <li><a href="como-ajudar.html">Como Ajudar</a></li>
      <li><a href="contato.html">Contato</a></li>
    </ul>
  </nav>

  <div class="page-hero">
    <span class="section-tag">Para Adoção</span>
    <h1>Nossos Animais</h1>
    <p>Cada um deles está esperando por uma família como a sua.</p>
  </div>

  <section class="section" style="background:var(--cream)">
    <div class="container">
      <div class="filter-bar">
        <button class="filter-btn active" onclick="filter('todos', this)">Todos</button>
        <button class="filter-btn" onclick="filter('cao', this)">Cães</button>
        <button class="filter-btn" onclick="filter('gato', this)">Gatos</button>
        <button class="filter-btn" onclick="filter('pequeno', this)">Porte Pequeno</button>
        <button class="filter-btn" onclick="filter('medio', this)">Porte Médio</button>
        <button class="filter-btn" onclick="filter('grande', this)">Porte Grande</button>
      </div>

      <div class="animals-grid" id="animaisGrid">
        <div class="animal-card" data-tipo="cao" data-porte="medio">
          <div class="animal-img dog1"></div>
          <div class="animal-info">
            <span class="animal-badge">Disponível</span>
            <h3>Bolinha</h3>
            <p class="animal-meta">Cão · 2 anos · Porte médio</p>
            <p>Brincalhão e carinhoso, adora crianças. Vacinado e castrado. Convive bem com outros pets.</p>
            <a href="contato.html" class="btn-sm">Tenho Interesse</a>
          </div>
        </div>
        <div class="animal-card" data-tipo="gato" data-porte="pequeno">
          <span class="badge">Destaque</span>
          <div class="animal-img cat1"></div>
          <div class="animal-info">
            <span class="animal-badge">Disponível</span>
            <h3>Mimi</h3>
            <p class="animal-meta">Gata · 1 ano · Porte pequeno</p>
            <p>Dócil e curiosa. Ótima para apartamentos. Vacinada e castrada.</p>
            <a href="contato.html" class="btn-sm">Tenho Interesse</a>
          </div>
        </div>
        <div class="animal-card" data-tipo="cao" data-porte="grande">
          <div class="animal-img dog2"></div>
          <div class="animal-info">
            <span class="animal-badge">Disponível</span>
            <h3>Thor</h3>
            <p class="animal-meta">Cão · 3 anos · Porte grande</p>
            <p>Companheiro e leal. Precisa de espaço para correr. Vacinado e castrado.</p>
            <a href="contato.html" class="btn-sm">Tenho Interesse</a>
          </div>
        </div>
        <div class="animal-card" data-tipo="gato" data-porte="pequeno">
          <div class="animal-img" style="background:#9E8070;background-image:url('https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&q=80');background-size:cover;background-position:center;height:220px;"></div>
          <div class="animal-info">
            <span class="animal-badge">Disponível</span>
            <h3>Nuvem</h3>
            <p class="animal-meta">Gato · 6 meses · Porte pequeno</p>
            <p>Filhote muito brincalhão. Adora carinho e atenção. Vacinado.</p>
            <a href="contato.html" class="btn-sm">Tenho Interesse</a>
          </div>
        </div>
        <div class="animal-card" data-tipo="cao" data-porte="pequeno">
          <div class="animal-img" style="background:#C0A880;background-image:url('https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&q=80');background-size:cover;background-position:center;height:220px;"></div>
          <div class="animal-info">
            <span class="animal-badge">Disponível</span>
            <h3>Pipoca</h3>
            <p class="animal-meta">Cão · 1 ano · Porte pequeno</p>
            <p>Energética e alegre. Ótima companhia para pessoas ativas. Vacinada.</p>
            <a href="contato.html" class="btn-sm">Tenho Interesse</a>
          </div>
        </div>
        <div class="animal-card" data-tipo="cao" data-porte="medio">
          <div class="animal-img" style="background:#B09070;background-image:url('https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80');background-size:cover;background-position:center;height:220px;"></div>
          <div class="animal-info">
            <span class="animal-badge">Disponível</span>
            <h3>Mel</h3>
            <p class="animal-meta">Cão · 4 anos · Porte médio</p>
            <p>Calma e afetuosa. Indicada para famílias com idosos ou crianças pequenas.</p>
            <a href="contato.html" class="btn-sm">Tenho Interesse</a>
          </div>
        </div>
      </div>

      <div id="semResultados" style="display:none;text-align:center;padding:40px 0;color:var(--text-muted);">
        <p style="font-size:2rem;">🐾</p>
        <p>Nenhum animal encontrado com esse filtro no momento.</p>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <div class="footer-logo">🐾 Patinhas Unidas</div>
        <p>ONG dedicada ao resgate e adoção responsável de animais em São Paulo desde 2015.</p>
        <p class="footer-cnpj">CNPJ: 12.345.678/0001-90</p>
      </div>
      <div>
        <h4>Páginas</h4>
        <ul>
          <li><a href="../index.html">Início</a></li>
          <li><a href="sobre.html">Sobre Nós</a></li>
          <li><a href="animais.html">Animais</a></li>
          <li><a href="como-ajudar.html">Como Ajudar</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <p>📍 Rua das Flores, 123 – Vila Madalena, SP</p>
        <p>📞 (11) 9 8765-4321</p>
        <p>✉️ contato@patinhasunidas.org</p>
      </div>
    </div>
    <div class="footer-bottom"><p>© 2026 Patinhas Unidas. Todos os direitos reservados.</p></div>
  </footer>

  <script src="../js/main.js"></script>
  <script>
    function filter(tipo, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cards = document.querySelectorAll('#animaisGrid .animal-card');
      let visible = 0;
      cards.forEach(card => {
        const match = tipo === 'todos' || card.dataset.tipo === tipo || card.dataset.porte === tipo;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      document.getElementById('semResultados').style.display = visible === 0 ? 'block' : 'none';
    }
  </script>
</body>
</html>
