//kategori usia
function tentukanKategori(usia) {
    if (usia >= 0 && usia <= 12) {
        return "Anak-anak";
    } else if (usia >= 13 && usia <= 17) {
        return "Remaja";
    } else if (usia >= 18 && usia <= 59) {
        return "Dewasa";
    } else if (usia >= 60) {
        return "Lansia";
    } else {
        return "Usia tidak valid";
    }
}


function klasifikasiUsia() {
    const prompt = require("prompt-sync")()
    
    let jumlahAnak = 0;
    let jumlahRemaja = 0;
    let jumlahDewasa = 0;
    let jumlahLansia = 0;

    let jumlahOrang = parseInt(prompt("Masukkan jumlah orang: "));

    for (let i = 1; i <= jumlahOrang; i++) {
        let usia = parseInt(prompt(`Masukkan usia orang ke-${i}: `));
        let kategori = tentukanKategori(usia);

        switch (kategori) {
            case "Anak-anak":
                jumlahAnak++;
                break;
            case "Remaja":
                jumlahRemaja++;
                break;
            case "Dewasa":
                jumlahDewasa++;
                break;
            case "Lansia":
                jumlahLansia++;
                break;
            default:
                console.log(`Usia tidak valid untuk orang ke-${i}`);
        }
    }


    console.log("\n--- Hasil Klasifikasi ---");
    console.log(`Anak-anak : ${jumlahAnak} orang`);
    console.log(`Remaja    : ${jumlahRemaja} orang`);
    console.log(`Dewasa    : ${jumlahDewasa} orang`);
    console.log(`Lansia    : ${jumlahLansia} orang`);
}


klasifikasiUsia();
