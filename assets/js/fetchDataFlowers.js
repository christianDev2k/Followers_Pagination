const fetchDataFlowers = pages => {
    const html = pages.map(p => {
        const { avatar_url, login, html_url } = p;
        return `
        <div class="col-3">
            <div class="px-2">
                <div class="card">
                    <img
                        class="card-img-top mx-auto"
                        src="${avatar_url}"
                        alt="Title" />
                    <div class="card-body text-center">
                        <h4 class="card-title">${login}</h4>
                        <a href="${html_url}" target="_blank" class="btn">VIEW PROFILE</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.querySelector('#profile-list').innerHTML = html.join('');
};

export default fetchDataFlowers;
