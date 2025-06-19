const displayName = document.getElementById("namaPeserta"); // menjadi ul karena biar terlihat seperti list
const inputText = document.getElementById("textInput");
const buttonAdd = document.getElementById("buttonAdd");

let daftarPeserta = []; // Kemudian disini terdapat array untuk menyimpan suatu data yang telah ditambahkan

// fungsi dibawah ini berfungsi untuk menampilkan data nama peserta ke displayName(HTML)
function renderDaftarPeserta() {
  displayName.innerHTML = ""; //kosongkan tampilan UL agat daftar tidak duplikat setiap kali fungsi di panggil. Contoh seperti kita menulis di canvas baru lalu menghapusnya dan memulai lagi dari awal nah itu merupakan konsep dari di  displayName.innerHTML = "";

  //Looping setiap data dimasukkan
  daftarPeserta.forEach(function (nama) {
    const listItem = document.createElement("li"); //Menambahkan element HTML baru li, kenapa li karena awal dari namaPeserta itu ul
    listItem.textContent = nama; // Mengatur teks di dalam li menjadi nama peserta saat ini

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "X";

    deleteButton.dataset.nama = nama; // Ini adalah pengguna data atribut yang nantiya dapat memudahkan kita untuk menghapus langsung dari atribut data-nama. Nanti, saat tombol ini diklik, kita bisa dengan mudah mengambil nama yang harus dihapus.
    displayName.appendChild(listItem);
    listItem.appendChild(deleteButton);
  });
}

function add() {
  const namaBaru = inputText.value; // menyimpan nilai input text ke variabel nama Baru
  if (namaBaru !== "") {
    //jika nama baru tidak kosong
    daftarPeserta.push(namaBaru); // Menambahkan namapeserta ke array
    inputText.value = ""; // mengkosongkan input setelah ditambahkan
    renderDaftarPeserta(); // panggil fungsi render lagi untuk memperbarui tampilan daftar peserta
  } else {
    alert("Nama Peserta tidak boleh kosong");
  }
}

// Disini menggunakan event listener untuk menghapus nama yang ada di daftar peserta
displayName.addEventListener("click", function (event) {
  const clickElement = event.target; // event.target adalah elemen spesifik yang diklik
  const deleteButton = clickElement.classList.contains("delete-btn"); // variable ini mendeklarasikan bahwa target yang yang ingin diclick itu adalah delete-btn yang sudah dibuat di displayName

  if (deleteButton) {
    const namaYangDihapus = clickElement.dataset.nama; // mengambil data atribute peserta yang nantinya akan dihapus
    const indexNama = daftarPeserta.indexOf(namaYangDihapus); // mencari indeks nama tersebut di dalam array 'daftaPeserta'

    if (indexNama !== -1) {
      // index itu berawal dari 0 jadinya kalo kurang dari 0 itu tidak menjalankan code selanjutnya
      daftarPeserta.splice(indexNama, 1); // ini bagian penting splice() berguna untuk menghapus dan memanipulasi array yang asli.
      /**
       * parameter splice(indexNama, 1)
       * indexNama itu merupakan index yang akan mulai bekerja dielemen index 1
       * kemudian yang angka 1 deleteCount yang artinya splice akan menghapus 1 element mulai dari startIndex(yaitu index 1)
       */
    }

    renderDaftarPeserta();
  }
});
