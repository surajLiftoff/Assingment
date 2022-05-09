const artist = document.getElementById('artist_name');
const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();
    getArtist();
});



async function getArtist() {
    let artistName = artist.value;
    const token = 'BQB0Wol5pzaucp_oozU27VBl0BSllvxQvLN8jLl4AeRw2gBkq_573pVQfGgZoc9wR6LNwHnsk44GoXtBnM2UFsMCUmC-5p65ssHAeUuwP7DsqAlU0f3o1DT0-_HKtzshnlKR0W-kmv3GP8iGEaQU-hy2ZlZXXFLWL6w';
    const response = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    });
    const myJson = await response.json();
    console.log(myJson);

    document.getElementById("artistTable").innerHTML = '<tr><th></th><th></th></tr>'

    myJson.artists.items.forEach(artist => {
        // document.getElementById("artistTable").innerHTML = document.getElementById("artistTable").innerHTML + `<tr><td>${artist.name}</td><img src="${artist.images[2].url}"></tr>`;

        document.getElementById("artistTable").innerHTML = document.getElementById("artistTable").innerHTML + `<tr><img src="${artist.images[2].url}"></tr>`;
        document.getElementById("artistTable").innerHTML = document.getElementById("artistTable").innerHTML + `<tr><td>${artist.name}</td></tr>`;
    });

}