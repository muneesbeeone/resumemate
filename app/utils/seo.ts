export function setMeta(options: { title: string; description?: string; url?: string; image?: string }) {
  const { title, description, url, image } = options
  if (title) document.title = title

  function upsertMeta(attrName: string, attrValue: string, content: string) {
    let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attrName, attrValue)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  if (description) upsertMeta('name', 'description', description)
  if (url) upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:title', title)
  if (description) upsertMeta('property', 'og:description', description)
  if (image) upsertMeta('property', 'og:image', image)
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  if (description) upsertMeta('name', 'twitter:description', description)
}
