dfunction puanHesapla() {
            // Sözel Dersler
            let turkD = parseFloat(document.getElementById('turk-d').value) || 0;
            let turkY = parseFloat(document.getElementById('turk-y').value) || 0;
            let turkNet = Math.max(0, turkD - (turkY / 3));

            let inkD = parseFloat(document.getElementById('ink-d').value) || 0;
            let inkY = parseFloat(document.getElementById('ink-y').value) || 0;
            let inkNet = Math.max(0, inkD - (inkY / 3));

            let dinD = parseFloat(document.getElementById('din-d').value) || 0;
            let dinY = parseFloat(document.getElementById('din-y').value) || 0;
            let dinNet = Math.max(0, dinD - (dinY / 3));

            let ingD = parseFloat(document.getElementById('ing-d').value) || 0;
            let ingY = parseFloat(document.getElementById('ing-y').value) || 0;
            let ingNet = Math.max(0, ingD - (ingY / 3));

            // Sayısal Dersler
            let matD = parseFloat(document.getElementById('mat-d').value) || 0;
            let matY = parseFloat(document.getElementById('mat-y').value) || 0;
            let matNet = Math.max(0, matD - (matY / 3));

            let fenD = parseFloat(document.getElementById('fen-d').value) || 0;
            let fenY = parseFloat(document.getElementById('fen-y').value) || 0;
            let fenNet = Math.max(0, fenD - (fenY / 3));

            // Toplam Net Kontrolü (Full çekenler için)
            let toplamNet = turkNet + inkNet + dinNet + ingNet + matNet + fenNet;

            let toplamPuan = 0;

            if (toplamNet >= 90) {
                toplamPuan = 500.00; // 90 net yapan kaosa gerek yok, direkt 500 tam puan!
            } else {
                let tabanPuan = 194.8;
                toplamPuan = tabanPuan + 
                    (turkNet * 4.3) + 
                    (inkNet * 1.7) + 
                    (dinNet * 1.9) + 
                    (ingNet * 1.5) + 
                    (matNet * 4.2) + 
                    (fenNet * 4.1);
            }

            if (toplamPuan > 500) toplamPuan = 500;
            if (toplamPuan < 100) toplamPuan = 100;

            // Puanı Göster
            document.getElementById('sonuc').innerHTML = `<i class="fa-solid fa-trophy"></i> Tahmini LGS Puanınız: <span>${toplamPuan.toFixed(2)}</span>`;

            // Netleri Göster
            let netDetay = document.getElementById('netler-detay');
            netDetay.innerHTML = `
                <strong>Ders Net Dağılımınız:</strong><br>
                • Türkçe: ${turkNet.toFixed(2)} Net | İnkılap: ${inkNet.toFixed(2)} Net<br>
                • Din K.: ${dinNet.toFixed(2)} Net | İngilizce: ${ingNet.toFixed(2)} Net<br>
                • Matematik: ${matNet.toFixed(2)} Net | Fen Bilimleri: ${fenNet.toFixed(2)} Net
            `;
        }