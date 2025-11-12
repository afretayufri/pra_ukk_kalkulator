const riwayat = document.querySelector('#riwayat')
const riwayatButton = document.querySelector('#riwayat-button');
const closeRiwayat = document.querySelector('#close-riwayat');
const bgBlur = document.querySelector('.bg-blur');
const listRiwayat = document.querySelector('#list_riwayat');

async function fetchRiwayat() {
    const data = await JSON.parse(localStorage.getItem('riwayat')) || [];

    listRiwayat.innerHTML = '';

    if(data.length == 0) {
        listRiwayat.innerHTML = '<p class="not_found_text">Belum ada riwayat perhitungan</p>'
        return;
    }
    data.forEach((item, index)=> {
        listRiwayat.innerHTML += `<li>
                    <div class="perhitungan">
                        <h3>${item.konten}</h3>
                        <h4>${item.hasil}</h4>
                    </div>

                    <i id= 'hapus_riwayat' data-index="${index}" class="bi bi-trash cursor-pointer"></i>
                </li>`;
    })
}

riwayatButton.addEventListener('click', async() => {
    await fetchRiwayat();
    riwayat.classList.toggle('active');
    bgBlur.classList.toggle('active')
})
closeRiwayat.addEventListener('click', () => {
    riwayat.classList.remove('active')
    bgBlur.classList.remove('active')
})

listRiwayat.addEventListener('click', (e) => {
    const btn = e.target.closest('#hapus_riwayat');

    if(!btn) return;

    const isConfirm = confirm('Yakin ingin menghapus riwayat ini?');
    if(!isConfirm) return;

    const index = btn.dataset.index;
    const data = JSON.parse(localStorage.getItem('riwayat')) || [];
    data.splice(index, 1);
    localStorage.setItem('riwayat', JSON.stringify(data));
    fetchRiwayat();
})

document.querySelector('#hapus-semua').addEventListener('click', () => {
    if(localStorage.getItem('riwayat') == null || localStorage.getItem('riwayat') == []) return; 

    const isConfirm = confirm('Yakin ingin menghapus semua riwayat ini ?');
    if(!isConfirm) return;

    localStorage.removeItem('riwayat');
    fetchRiwayat();

})