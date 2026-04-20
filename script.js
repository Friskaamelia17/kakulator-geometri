function switchTab(tabName) {
    // Switch tab aktif
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Clear hasil
    document.getElementById('hasil').innerHTML = '';
}

// Hitung Baris Geometri: Un = a * r^(n-1)
function hitungBaris() {
    const a = parseFloat(document.getElementById('suku1').value);
    const r = parseFloat(document.getElementById('rasio').value);
    const n = parseInt(document.getElementById('n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = '❌ Masukkan angka yang valid!';
        return;
    }
    
    const un = a * Math.pow(r, n - 1);
    const rumus = `Un = ${a} × ${r}<sup>${n-1}</sup> = <strong>${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>`;
    
    document.getElementById('hasil').innerHTML = `
        <div>
            <div>Suku ke-${n}: ${un.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
            <div style="font-size: 0.8rem; opacity: 0.9; margin-top: 5px;">${rumus}</div>
        </div>
    `;
}

// Hitung Deret Geometri: Sn = a * (r^n - 1) / (r - 1)
function hitungDeret() {
    const a = parseFloat(document.getElementById('deret_a').value);
    const r = parseFloat(document.getElementById('deret_r').value);
    const n = parseInt(document.getElementById('deret_n').value);
    
    if (isNaN(a) || isNaN(r) || isNaN(n) || n <= 0) {
        document.getElementById('hasil').innerHTML = '❌ Masukkan angka yang valid!';
        return;
    }
    
    let sn;
    if (Math.abs(r - 1) < 0.0001) {
        // Kasus r = 1
        sn = a * n;
        document.getElementById('hasil').innerHTML = `
            <div>
                <div>Jumlah ${n} suku: ${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
                <div style="font-size: 0.8rem; opacity: 0.9; margin-top: 5px;">
                    Sn = ${a} × ${n} = ${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}
                </div>
            </div>
        `;
    } else {
        // Rumus umum
        sn = a * (Math.pow(r, n) - 1) / (r - 1);
        const rumus = `Sn = ${a} × (${r}<sup>${n}</sup>-1)/( ${r}-1 ) = <strong>${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</strong>`;
        
        document.getElementById('hasil').innerHTML = `
            <div>
                <div>Jumlah ${n} suku: ${sn.toLocaleString('id-ID', {maximumFractionDigits: 4})}</div>
                <div style="font-size: 0.8rem; opacity: 0.9; margin-top: 5px;">${rumus}</div>
            </div>
        `;
    }
}

// Enter key support
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (document.getElementById('baris-tab').classList.contains('active')) {
            hitungBaris();
        } else {
            hitungDeret();
        }
    }
});