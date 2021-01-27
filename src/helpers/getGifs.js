export const getGifts = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?&q=${ encodeURI(category) }&api_key=FcMw9ehGXGD0W0bOS26HbW07mW58CZSH&limit=15`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifts = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifts;

} 