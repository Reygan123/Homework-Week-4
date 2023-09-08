//function untuk mendapatkan nilai acak/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function untuk mencari nilai minimum
function minimum(array) {
  let minimum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    }
  }
  return minimum;
}

//function untuk mencari nilai maximum
function maximum(array) {
  let maximum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}

//function untuk Menghitung total
function total(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

let arr = [];
let ArrayGanjil = [];
let ArrayGenap = [];
let jumlahIndeksGanjil = 0;
let jumlahIndeksGenap = 0;

//untuk membuat bilangan random dari angka 1-50 sebanyak 100 nilai
for (let i = 0; i < 100; i++) {
  let nilaiAcak = getRandomInt(1, 50); //memanggil fungsi untuk menentukan jarak angka
  arr.push(nilaiAcak); //push bilangan random ke dalam array arr

  if (nilaiAcak % 2 === 0 && jumlahIndeksGenap < 50) {
    //untuk memilih bilangan genap dan dimasukan ke dalam array JumlahIndeksGenap
    ArrayGenap.push(nilaiAcak);
    jumlahIndeksGenap++;
  } else if (jumlahIndeksGanjil < 50) {
    ArrayGanjil.push(nilaiAcak);
    jumlahIndeksGanjil++;
  }

  if (jumlahIndeksGenap === 50 && jumlahIndeksGanjil === 50) {
    //perualangan akan berhenti jika masing masing array sudah memiliki 50 indeks
    break;
  }
}

let minGenap = minimum(ArrayGenap); //menghitung nilai minimum dari array genap
let maxGenap = maximum(ArrayGenap); //menghitung nilai maximum dari array genap
let totalGenap = total(ArrayGenap); //menghitung total array genap

//menghitung rata-rata dari array genap
let rataRataGenap = totalGenap / ArrayGenap.length;

let minGanjil = minimum(ArrayGanjil); //menghitung nilai minimum dari array ganjil
let maxGanjil = maximum(ArrayGanjil); //menghitung total array ganjil
let totalGanjil = total(ArrayGanjil); //menghitung nilai maximum dari array ganjil
let rataRataGanjil = totalGanjil / ArrayGanjil.length; //menghitung rata-rata dari array ganjil

console.log("Array dengan 100 nilai acak: " + arr);
console.log("Array pada indeks genap: " + ArrayGenap);
console.log("Jumlah indeks array genap: " + jumlahIndeksGenap);
console.log("Nilai Minimum pada array genap: " + minGenap);
console.log("Nilai Maximum pada array genap: " + maxGenap);
console.log("Total array genap: " + totalGenap);
console.log("Rata-Rata array genap: " + rataRataGenap);
console.log("");
console.log("Array pada indeks Ganjil: " + ArrayGanjil);
console.log("Jumlah indeks array Ganjil: " + jumlahIndeksGanjil);
console.log("Nilai Minimum pada array Ganjil: " + minGanjil);
console.log("Nilai Maximum pada array Ganjil: " + maxGanjil);
console.log("Total array Ganjil: " + totalGanjil);
console.log("Rata-Rata array Ganjil: " + rataRataGanjil);
console.log("");

//Perbandingan Nilai Minimum
if (minGenap < minGanjil) {
  console.log(
    "Nilai minimum ArrayGenap (" +
      minGenap +
      ") lebih kecil dari nilai minimum ArrayGanjil (" +
      minGanjil +
      ")"
  );
} else if (minGenap > minGanjil) {
  console.log(
    "Nilai minimum ArrayGanjil (" +
      minGanjil +
      ") lebih kecil dari nilai minimum ArrayGenap (" +
      minGenap +
      ")"
  );
} else {
  console.log(
    "Nilai minimum ArrayGenap dan ArrayGanjil sama (" + minGenap + ")"
  );
}

//Perbandingan Nilai Maximum
if (maxGenap < maxGanjil) {
  console.log(
    "Nilai maksimum ArrayGenap (" +
      maxGenap +
      ") lebih kecil dari nilai maksimum ArrayGanjil (" +
      maxGanjil +
      ")"
  );
} else if (maxGenap > maxGanjil) {
  console.log(
    "Nilai maksimum ArrayGanjil (" +
      maxGanjil +
      ") lebih kecil dari nilai maksimum ArrayGenap (" +
      maxGenap +
      ")"
  );
} else {
  console.log(
    "Nilai maksimum ArrayGenap dan ArrayGanjil sama (" + maxGenap + ")"
  );
}

//Perbanfingan Total
if (totalGanjil < totalGenap) {
  console.log(
    "Total Array Ganjil (" +
      totalGanjil +
      ") lebih kecil dari Total Array Genap (" +
      totalGenap +
      ")"
  );
} else if (totalGanjil > totalGenap) {
  console.log(
    "Total Array Genap (" +
      totalGenap +
      ") lebih kecil dari Total Array Ganjil (" +
      totalGanjil +
      ")"
  );
} else {
  console.log("Total Array Genap dan Array Ganjil sama (" + totalGanjil + ")");
}

//Perbandingan Rata-Rata
if (rataRataGanjil < rataRataGenap) {
  console.log(
    "Rata-Rata Array Ganjil (" +
      rataRataGanjil +
      ") lebih kecil dari Rata-Rata Array Genap (" +
      rataRataGenap +
      ")"
  );
} else if (rataRataGanjil > rataRataGenap) {
  console.log(
    "Rata-Rata Array Genap (" +
      rataRataGenap +
      ") lebih kecil dari Rata-Rata Array Ganjil (" +
      rataRataGanjil +
      ")"
  );
} else {
  console.log(
    "Rata-Rata Array Genap dan Array Ganjil sama (" + rataRataGanjil + ")"
  );
}
