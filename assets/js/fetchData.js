const api = 'https://api.github.com/users/john-smilga/followers?per_page=100';
const fetchData = async () => {
    const res = await fetch(api);
    return await res.json();
};
export default fetchData;
