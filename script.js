let angkaBenar = null;

function mulaiGame() {
  angkaBenar = Math.floor(Math.random() * 10) + 1;
  document.getElementById("message").textContent = "Game dimulai! Masukkan tebakan kamu.";
  document.getElementById("tebakan").disabled = false;
  document.getElementById("cekBtn").disabled = false;
  document.getElementById("clueBtn").disabled = false;
  document.getElementById("tebakan").value = "";
}

function cekTebakan() {
  const tebakan = parseInt(document.getElementById("tebakan").value);
  if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
    document.getElementById("message").textContent = "Masukkan angka antara 1 dan 10.";
    return;
  }

  if (tebakan === angkaBenar) {
    document.getElementById("message").textContent = "Selamat! Tebakan kamu benar.";
    document.getElementById("cekBtn").disabled = true;
    document.getElementById("clueBtn").disabled = true;
  } else {
    document.getElementById("message").textContent = "Tebakan salah. Coba lagi atau minta Clue.";
  }
}

function beriClue() {
  const tebakan = parseInt(document.getElementById("tebakan").value);
  if (isNaN(tebakan)) {
    document.getElementById("message").textContent = "Masukkan angka tebakan dulu untuk mendapatkan clue.";
    return;
  }

  if (tebakan < angkaBenar) {
    document.getElementById("message").textContent = "Clue: Angka terlalu kecil.";
  } else if (tebakan > angkaBenar) {
    document.getElementById("message").textContent = "Clue: Angka terlalu besar.";
  } else {
    document.getElementById("message").textContent = "Kamu sudah benar!";
  }
}

function resetGame() {
  angkaBenar = null;
  document.getElementById("tebakan").value = "";
  document.getElementById("tebakan").disabled = true;
  document.getElementById("cekBtn").disabled = true;
  document.getElementById("clueBtn").disabled = true;
  document.getElementById("message").textContent = "Game telah di-reset.";
}