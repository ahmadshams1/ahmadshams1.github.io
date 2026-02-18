// شمارنده‌های جذاب
const counters = document.querySelectorAll("[data-count]");
const animateCounters = () => {
  counters.forEach(el => {
    const target = Number(el.dataset.count);
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 50));
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = cur;
    }, 22);
  });
};
animateCounters();

// فیلتر منو (چیپس بالا)
const chips = document.querySelectorAll(".chip");
const items = document.querySelectorAll(".item");
chips.forEach(btn => {
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    items.forEach(card => {
      const cat = card.dataset.cat;
      card.style.display = (f === "all" || f === cat) ? "block" : "none";
    });
  });
});

// سبد انتخاب
const basketEl = document.getElementById("basket");
const countEl = document.getElementById("count");
const itemsField = document.getElementById("items");
const pkgField = document.getElementById("package");
const outputEl = document.getElementById("output");
const whatsAppLink = document.getElementById("whatsApp");

let basket = [];
const renderBasket = () => {
  basketEl.innerHTML = "";
  countEl.textContent = basket.length;
  itemsField.value = basket.join(", ");

  basket.forEach((name, idx) => {
    const row = document.createElement("div");
    row.className = "basket-item";
    row.innerHTML = `<span>${name}</span><button data-i="${idx}">حذف</button>`;
    basketEl.appendChild(row);
  });

  basketEl.querySelectorAll("button").forEach(b => {
    b.addEventListener("click", () => {
      const i = Number(b.dataset.i);
      basket.splice(i, 1);
      renderBasket();
    });
  });
};

document.querySelectorAll(".add").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    basket.push(name);
    renderBasket();
  });
});

document.getElementById("clear").addEventListener("click", () => {
  basket = [];
  renderBasket();
  outputEl.textContent = "";
});

// انتخاب پکیج
document.querySelectorAll(".pick").forEach(btn => {
  btn.addEventListener("click", () => {
    pkgField.value = btn.dataset.pack;
    document.getElementById("package").scrollIntoView({behavior:"smooth", block:"center"});
  });
});

// ساخت پیام سفارش + لینک واتساپ
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const guests = document.getElementById("guests").value.trim();
  const eventType = document.getElementById("eventType").value;
  const pack = pkgField.value || "—";
  const chosen = (basket.length ? basket.join(", ") : (itemsField.value.trim() || "—"));

  const msg =
`سلام! من سفارش کترینگ دارم:
نام: ${name}
شماره تماس: ${phone}
تعداد مهمان: ${guests}
نوع ایونت: ${eventType}
پکیج: ${pack}
آیتم‌ها: ${chosen}

لطفاً قیمت و زمان آماده‌سازی را بگویید.`;

  outputEl.textContent = msg;

  // لینک واتساپ (شماره خودت را اینجا بگذار)
  const waNumber = "14704201001"; // +1 470-420-1001
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  whatsAppLink.href = url;
});
