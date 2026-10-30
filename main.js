// Duplicate ticker items so the marquee loops seamlessly.
document.querySelectorAll('.ticker-track').forEach(t => { t.innerHTML += t.innerHTML; });
// Fade sections in as they scroll into view.
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 }) : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
