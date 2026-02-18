*{ margin:0; padding:0; box-sizing:border-box; }

:root{
  --bg:#f7f3ee;
  --text:#ffffff;
  --gold:#b08d57;
  --glass: rgba(255,255,255,.10);
  --border: rgba(255,255,255,.18);
}

body{
  font-family: Arial, sans-serif;
  background: var(--bg);
}

/* ===== HERO BACKGROUND ===== */
.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 40px 16px;

  /* ✅ بکگراند عکس تو (جای استوک) */
  background:
    linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)),
    url("IMG_7568.jpeg");

  background-size: cover;
  background-position: center;
  color: var(--text);
  text-align:center;
}

.hero-content{
  width:min(900px, 92%);
  padding: 28px 22px;
  border-radius: 22px;
  background: var(--glass);
  border: 1px solid var(--border);
  backdrop-filter: blur(10px);
}

.tag{
  color: rgba(255,255,255,.9);
  letter-spacing: 2px;
  font-size: 12px;
  margin-bottom: 10px;
}

.hero h1{
  font-size: clamp(34px, 5vw, 64px);
  margin-bottom: 10px;
}

.subtitle{
  opacity: .92;
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 18px;
}

.actions{
  display:flex;
  gap: 10px;
  justify-content:center;
  flex-wrap:wrap;
}

.btn{
  display:inline-block;
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration:none;
  font-weight: 700;
  border: 1px solid var(--border);
  transition: transform .15s ease, opacity .15s ease;
}

.btn:hover{ transform: translateY(-1px); opacity:.95; }

.btn.primary{
  background: rgba(176,141,87,.95);
  color:#111;
  border-color: rgba(176,141,87,.55);
}

.btn.ghost{
  background: rgba(255,255,255,.10);
  color:#fff;
}

/* ===== MENU SECTION ===== */
.section{
  padding: 70px 16px;
  max-width: 1100px;
  margin: 0 auto;
}

.section h2{
  text-align:center;
  margin-bottom: 20px;
  color:#2b2623;
}

.cards{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.card{
  background: #fff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 14px 35px rgba(0,0,0,.08);
}

.card h3{ margin-bottom: 6px; color:#2b2623; }
.card p{ color:#555; }

.footer{
  text-align:center;
  padding: 18px 10px;
  color:#444;
  background:#fff;
  border-top: 1px solid #eee;
}

/* Responsive */
@media (max-width: 900px){
  .cards{ grid-template-columns: 1fr; }
}
