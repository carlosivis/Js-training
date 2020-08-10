const cache = {};

export async function friendlyFetch(url) {
    // procura em cache, antes de fazer a requisição
    let cached = localStorage.getItem(url) || cache[url];

    // se não está em cache, faz requisição com fetch
    if (!cached) {
        cached = await fetch(url).then(r => r.json());

        // a. tenta armazenar no localStorage (mas ele é pequeno, ~5MB)
        try {
            localStorage.setItem(url, JSON.stringify(cached));
        } catch (error) {
            cache[url] = cached;
        }

    } else {
        // ela estava em cache (já foi feita antes)... então recuperamos a resposta
        cached = JSON.parse(cached);
    }
    
    return cached;
}