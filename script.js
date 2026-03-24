// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Navbar scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 20
    ? 'rgba(15,23,42,1)'
    : 'rgba(15,23,42,0.97)';
});

// Animate chart bars (called after rendering)
function animateBars() {
  const bars = document.querySelectorAll('.chart-bar');
  bars.forEach((bar, i) => {
    const finalHeight = bar.dataset.h || bar.style.height;
    bar.dataset.h = finalHeight;
    bar.style.height = '0%';
    setTimeout(() => { bar.style.height = finalHeight; }, 80 + i * 60);
  });
}
window.addEventListener('load', animateBars);

// ─── WMS MOCK TABS ────────────────────────────────────────────────
const tabData = {
  dashboard: {
    title: 'WMS — Dashboard',
    html: `
      <div class="mock-cards">
        <div class="mock-card"><span class="mock-card-label">Pedidos hoje</span><span class="mock-card-val accent">1.248</span></div>
        <div class="mock-card"><span class="mock-card-label">Acuracidade</span><span class="mock-card-val">99.7%</span></div>
        <div class="mock-card"><span class="mock-card-label">Posições livres</span><span class="mock-card-val">3.402</span></div>
      </div>
      <div class="mock-chart">
        <div class="chart-bar" style="height:40%"></div>
        <div class="chart-bar" style="height:65%"></div>
        <div class="chart-bar" style="height:50%"></div>
        <div class="chart-bar" style="height:80%"></div>
        <div class="chart-bar" style="height:55%"></div>
        <div class="chart-bar" style="height:90%"></div>
        <div class="chart-bar" style="height:70%"></div>
      </div>`
  },
  recebimento: {
    title: 'WMS — Recebimento',
    html: `
      <div class="mock-cards">
        <div class="mock-card"><span class="mock-card-label">NF-es hoje</span><span class="mock-card-val accent">42</span></div>
        <div class="mock-card"><span class="mock-card-label">Volumes recv.</span><span class="mock-card-val">1.840</span></div>
        <div class="mock-card"><span class="mock-card-label">Pendentes</span><span class="mock-card-val">3</span></div>
      </div>
      <div class="mock-list">
        <div class="mock-list-row"><span>NF 000.421 — DM Brasil</span><span class="tag tag-ok">Conferida</span></div>
        <div class="mock-list-row"><span>NF 000.420 — Fortlev</span><span class="tag tag-ok">Conferida</span></div>
        <div class="mock-list-row"><span>NF 000.419 — Elsons</span><span class="tag tag-warn">Divergência</span></div>
        <div class="mock-list-row"><span>NF 000.418 — Alinutri</span><span class="tag tag-pend">Aguardando</span></div>
      </div>`
  },
  armazenagem: {
    title: 'WMS — Armazenagem',
    html: `
      <div class="mock-cards">
        <div class="mock-card"><span class="mock-card-label">Pos. ocupadas</span><span class="mock-card-val accent">8.998</span></div>
        <div class="mock-card"><span class="mock-card-label">Taxa ocupação</span><span class="mock-card-val">72%</span></div>
        <div class="mock-card"><span class="mock-card-label">Disponíveis</span><span class="mock-card-val">3.402</span></div>
      </div>
      <div class="mock-progress">
        <div class="prog-row"><div class="prog-label"><span>Rua A</span><span>91%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:91%"></div></div></div>
        <div class="prog-row"><div class="prog-label"><span>Rua B</span><span>74%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:74%"></div></div></div>
        <div class="prog-row"><div class="prog-label"><span>Rua C</span><span>58%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:58%"></div></div></div>
        <div class="prog-row"><div class="prog-label"><span>Câmara Fria</span><span>43%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:43%"></div></div></div>
      </div>`
  },
  expedicao: {
    title: 'WMS — Expedição',
    html: `
      <div class="mock-cards">
        <div class="mock-card"><span class="mock-card-label">Expedidos</span><span class="mock-card-val accent">284</span></div>
        <div class="mock-card"><span class="mock-card-label">Em separação</span><span class="mock-card-val">47</span></div>
        <div class="mock-card"><span class="mock-card-label">Aguard. NF</span><span class="mock-card-val">12</span></div>
      </div>
      <div class="mock-list">
        <div class="mock-list-row"><span>Pedido #10482 — Rio Master</span><span class="tag tag-ok">Expedido</span></div>
        <div class="mock-list-row"><span>Pedido #10481 — Baiana</span><span class="tag tag-ok">Expedido</span></div>
        <div class="mock-list-row"><span>Pedido #10480 — Lojas Dular</span><span class="tag tag-warn">Separando</span></div>
        <div class="mock-list-row"><span>Pedido #10479 — Bestfer</span><span class="tag tag-pend">Aguard. NF</span></div>
      </div>`
  },
  inventario: {
    title: 'WMS — Inventário',
    html: `
      <div class="mock-cards">
        <div class="mock-card"><span class="mock-card-label">Divergências</span><span class="mock-card-val accent">2</span></div>
        <div class="mock-card"><span class="mock-card-label">Itens contados</span><span class="mock-card-val">12.400</span></div>
        <div class="mock-card"><span class="mock-card-label">Acuracidade</span><span class="mock-card-val">99.8%</span></div>
      </div>
      <div class="mock-progress">
        <div class="prog-row"><div class="prog-label"><span>Progresso geral</span><span>87%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:87%"></div></div></div>
        <div class="prog-row"><div class="prog-label"><span>Secos</span><span>100%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:100%"></div></div></div>
        <div class="prog-row"><div class="prog-label"><span>Refrigerados</span><span>76%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:76%"></div></div></div>
        <div class="prog-row"><div class="prog-label"><span>Perecíveis</span><span>62%</span></div><div class="prog-bar-wrap"><div class="prog-bar" style="width:62%"></div></div></div>
      </div>`
  },
  relatorios: {
    title: 'WMS — Relatórios',
    html: `
      <div class="mock-cards">
        <div class="mock-card"><span class="mock-card-label">Gerados hoje</span><span class="mock-card-val accent">15</span></div>
        <div class="mock-card"><span class="mock-card-label">Alertas</span><span class="mock-card-val">0</span></div>
        <div class="mock-card"><span class="mock-card-label">Atualização</span><span class="mock-card-val">Agora</span></div>
      </div>
      <div class="mock-list">
        <div class="mock-list-row"><span>Produtividade — Turno A</span><span class="tag tag-ok">Gerado</span></div>
        <div class="mock-list-row"><span>Custo por pedido — Mês</span><span class="tag tag-ok">Gerado</span></div>
        <div class="mock-list-row"><span>Acuracidade de estoque</span><span class="tag tag-ok">Gerado</span></div>
        <div class="mock-list-row"><span>Relatório de frota</span><span class="tag tag-warn">Processando</span></div>
      </div>`
  }
};

function switchTab(el, tab) {
  // Atualiza sidebar ativo
  document.querySelectorAll('.mock-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');

  // Atualiza título
  document.getElementById('mockTitle').textContent = tabData[tab].title;

  // Atualiza conteúdo com animação
  const content = document.getElementById('mockContent');
  content.classList.remove('fade-in');
  void content.offsetWidth; // reflow para reiniciar animação
  content.innerHTML = tabData[tab].html;
  content.classList.add('fade-in');

  // Anima barras se existirem
  animateBars();
}

// Animate elements on scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to cards
const animatedElements = document.querySelectorAll(
  '.solution-card, .benefit-card, .testimonial-card, .ideal-card, .stat'
);

animatedElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
  observer.observe(el);
});

// Form submission
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Mensagem enviada!';
  btn.style.background = '#00c964';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar Mensagem →';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#ffffff';
    }
  });
});
