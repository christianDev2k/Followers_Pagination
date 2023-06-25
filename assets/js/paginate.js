const paginate = p => {
    const itemsPage = 10;
    const numOfPages = Math.ceil(p.length / itemsPage);
    
    const newFlowers = Array.from({length: numOfPages}, (_, page) => {
        const start = page * numOfPages;
        return p.slice(start, start + numOfPages);
    })
    return newFlowers;
}
export default paginate;