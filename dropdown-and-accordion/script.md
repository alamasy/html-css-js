# Membuat Dropdown dan Accordion dengan HTML dan CSS

> Dropdown dan acordion itu memiliki mekanisme yang serupa, sembunyikan konten bila ada event tertentu. The difference is that a dropdown will lay over other content on the page, while an accordion will push down the content to make room for itself. This article will show you how to build them with just CSS or with CSS plus JavaScript.

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

Pertama-tama yang kita buat adalah elemen nav. Kita juga bisa menggunakan tag `<div>` sebenarnya, tapi untuk alasan semantik baiknya gunakan tag `<nav>` ketika membuat komponen navigasi.

Setelah itu, buat links dengan menggunakan tag unordered list untuk tiap item list menu. Lalu buat container dengan tag `<div>` pada menu item untuk membungkus komponen dropdown yang akan kita buat. Kali ini kita akan membuat komponen dropdown di menu service.

You should also indicate that the link contains a dropdown. You can either use the plus sign or an icon.
