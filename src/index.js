export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    const redirects = {
        "/": "https://bargenial.com.br/suco-de-uva-e-saude-beneficios-comprovados/",
        "/wp-content/uploads/2019/10/Dani-et-al.-2017.pdf": "https://bargenial.com.br/suco-de-uva-e-saude-beneficios-comprovados/",
        "/2020/04/26/vinho-e-longevidade/": "https://bargenial.com.br/suco-de-uva-e-saude-beneficios-comprovados/",
      }

    if (redirects[path]) {
      return Response.redirect(redirects[path], 301)
    }

    return new Response("Página não encontrada", { status: 404 })
  }
} 