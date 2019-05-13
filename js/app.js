const marvel = {
    render:() => {
        const urlAPI = 'https://gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=80&ts=1&apikey=b8394dc6ec1dfca478c897fb09afc93d&hash=64ab72e23c608c4733f3b9265299f7f9';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
            console.log(json, 'RES.JSON');
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+=`
                   <div class="col-md-4">
                        <div class="hero-content">
                        <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <div class="continier title"><h5>${hero.name}</h5></div>
                        </div>
                   </div>`;
            }
            container.innerHTML = contentHTML;
        })
    }
};
marvel.render();