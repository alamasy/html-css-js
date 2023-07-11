# Membuat Dropdown dengan HTML dan CSS

> Dropdown adalah sebuah istilah untuk behaviour pada web yang menyembunyikan komponen dan memunculkannya ketika ada event terterntu, misal ketika diklik atau dihover.

Dropdown biasanya ada pada menu navigasi pada website. Misal ada salah satu menu yang juga memiliki submenu, kita bisa menggunakan dropdown untuk menyembuyikan submenu tersebut. Lalu kita munculkan ketika mouse berada di atas item menu tersebut.

Jadi disini kita akan membuat komponen navigasi dengan menggunakan tag `li` sebagai list item menu yang tentu saja dibungkus dengan tag `nav`. Kemudian disalah satu item yang memiliki submenu kita juga akan membuat list yang lainnya sebagai komponen dropdown yang akan muncul ketika dihover.

Pertama kita akan membuat struktur HTML.

```
<nav>
  <a href="#" class="logo">Logo</a>
  <!--Links-->
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li>
      <a href="#"
        >Services
        <div class="dropdown">
          <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </a>
    </li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

```

Setelah selesai membuat struktur HTML sekarang kita bisa menulis style di file CSS. Pertama kita hubungkan dulu file CSS ke file HTML dengan tag `link`.

```
<link rel="stylesheet" href="style.css">
```

Kemudian beri style pada struktur HTML.

Pertama kita akan set ulang margin, padding, dan box-sizing dengan selector `*`. Kemudian ganti warna background dengan yang agak lebih gelap. Terakhir kita hilangkan text dekorasi semua tag anchor `a` di komponen.

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
color: #e0ffff;
background-color: #e8e8e8;
}

a {
color: #e0ffff;
text-decoration: none;
}
```

Setelah itu kita lanjutkan dengan memberi style pada komponen navigasi.

```
nav {
background: #22232e;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 10%;
}

nav .logo {
font-size: 24px;
font-weight: bold;
}

.menu-links-item {
display: flex;
gap: 20px;
list-style: none;
}

nav ul li {
padding: 10px 30px;
position: relative;  /*wrapper komponen dropdown*/
font-weight: bold;
letter-spacing: 1.5px;
}

nav ul li a:hover {
color: #00c2cb;
}

.dropdown {
display: none; /*display awal none, ketika dihover baru munculkan komponen*/
position: absolute;
left: 8%;
top: 100%;
background-color: #22232e;
}

.dropdown ul {
margin: 10px;
}

.dropdown ul li {
width: 150px;
padding: 10px;
}

```

Pada elemen dropdown kita sengaja beri display `none` agar komponen dropdown tidak muncul. Setelah itu atur elemen agar ketika dihover display komponen dropdown berubah menjadi `block`.

```
nav ul li:hover .dropdown {
  display: block; /* Munculkan komponen ketika dihover */
}
```
