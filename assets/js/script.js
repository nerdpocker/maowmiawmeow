const btnPlay = document.querySelector('#button .mulai')
const messege = document.querySelector('.messege-box')
const messege1 = document.querySelector('.messege-box1')
const messege2 = document.querySelector('.messege-box2')
const messege3 = document.querySelector('.messege-box3')
const messege4 = document.querySelector('.messege-box4')
const messege2P = document.querySelector('.messege-box2 .pesan p')
const hilang1 = document.querySelector('.hilang1')
const hilang2 = document.querySelector('.hilang2')
const semuaNama = document.querySelectorAll('.nama h2')
const waktu = document.getElementById('waktu')
const jam = waktu.querySelector('h1')
const hari = waktu.querySelector('p')
const bg1 = document.querySelector('.background1')
const bg2 = document.querySelector('.background2')
const body = document.querySelector('.body')
const audio = document.querySelector('.audio')

body.classList.add('background1')

const date = new Date()
const hour = String(date.getHours()).padStart(2, '0')
const minutes = String(date.getMinutes()).padStart(2, '0')
const day = date.getDay()
const tgl = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`
jam.innerHTML = `${hour}:${minutes}`


// ================================
// ISI PESAN
// ================================

const pengirim = "princess kayasha"

const pesan = `nopal sorry ya yg kemarin,maaf selalu bikin lu badmood dan selalu ngulangin. gua tau lu udah bilang aman tapi gua ngerasa bersalah banget,gua mungkin ga selalu bisa express my feelings properly n sometimes i tease u a lil too much but i hope u know tht i genuinely care abt u,thank u nopal for always making me feel so loved,makasih selalu dengerin cerita sm masalah" gua even when u had ur own,thank u for always make time for me :) i might not say it often but i deeply appreciate everything you do for me. you matter so muuuchh more than you think u do, n sorry i haven't always been the best at showing it😅`


semuaNama.forEach((el) => {
  el.innerHTML = pengirim ? pengirim : "Nama Kamu"
})


// ================================
// TOMBOL MULAI
// ================================

btnPlay.addEventListener('click', () => {

  audio.play()

  messege1.style.display = "block"
  messege1.style.transform = "translateX(0)"

  btnPlay.style.display = "none"
  hilang1.style.display = "block"

})


// ================================
// TOMBOL LANJUT
// ================================

hilang1.addEventListener('click', () => {

  messege1.style.display = "none"

  messege2.style.display = "block"
  void messege2.offsetWidth
  messege2.style.transform = "translateX(0)"

  hilang1.style.display = "none"
  hilang2.style.display = "block"


  let i = 0
  const speed = 50

  // ================================
  // PESAN YANG AKAN DIKETIK
  // ================================

  const txt = pesan


  // ================================
  // TYPEWRITER
  // ================================

  const typeWriter = () => {

    if (i < txt.length) {

      messege2P.innerHTML += txt.charAt(i)

      i++

      messege2.classList.remove('kelip')

      hilang2.style.display = "none"

      setTimeout(typeWriter, speed)

    } else {

      messege2.classList.add('kelip')

      body.classList.replace(
        'background1',
        'background2'
      )

      body.classList.add('muncul')

      // Setelah pesan panjang selesai: "sayang" -> "maaf" -> tombol Balas
      const notifAkhir = [messege3, messege4]
      notifAkhir.forEach((notif, idx) => {
        setTimeout(() => {
          notif.style.display = "block"
          void notif.offsetWidth
          notif.style.transform = "translateX(0)"
          body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' })

          if (idx === notifAkhir.length - 1) {
            hilang2.style.display = "block"
          }
        }, (idx + 1) * 1000)
      })
    }
  }

  typeWriter()

})


// ================================
// TOMBOL AKHIR
// ================================

hilang2.addEventListener('click', () => {

})
