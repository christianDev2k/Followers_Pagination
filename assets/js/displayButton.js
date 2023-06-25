const displayButton = (pagContainer, data, activeButton) => {
    const html = data.map((_, index) => {
        return `
            <button data-index=${index} class="btn btn-page ${activeButton === index ? 'active' : null}">${index + 1}</button>
        `
    });
    html.unshift('<button class="btn btn-pre">Prev</button>');
    html.push('<button class="btn btn-next">Next</button>');
    pagContainer.innerHTML = html.join('');
};

export default displayButton;
