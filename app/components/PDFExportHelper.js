// Lightweight helper to export a DOM node to PDF using html2pdf.js loaded from CDN
// No build-time dependency required

let html2pdfPromise = null

function loadHtml2Pdf() {
  if (typeof window !== 'undefined' && window.html2pdf) return Promise.resolve(window.html2pdf)
  if (html2pdfPromise) return html2pdfPromise
  html2pdfPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
    script.async = true
    script.onload = () => resolve(window.html2pdf)
    script.onerror = () => reject(new Error('Failed to load html2pdf.js'))
    document.head.appendChild(script)
  })
  return html2pdfPromise
}

export async function exportElementToPdf(el, filename = 'resume.pdf') {
  if (!el) throw new Error('No element provided for PDF export')
  const html2pdf = await loadHtml2Pdf()

  const base = {
    margin: [0.25, 0.25, 0.25, 0.25],
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  }

  const deviceScale = typeof window !== 'undefined' && window.devicePixelRatio ? window.devicePixelRatio : 1.5

  const attempts = [
    {
      // default, high-quality
      html2canvas: {
        scale: Math.min(2, Math.max(1, deviceScale)),
        useCORS: true,
        backgroundColor: '#ffffff',
        removeContainer: true,
        letterRendering: true,
        foreignObjectRendering: false,
        scrollX: 0,
        scrollY: 0,
      },
    },
    {
      // fallback: lower scale
      html2canvas: {
        scale: 1,
        useCORS: true,
        backgroundColor: '#ffffff',
        removeContainer: true,
        letterRendering: true,
        foreignObjectRendering: false,
        scrollX: 0,
        scrollY: 0,
      },
    },
  ]

  // Prepare an offscreen print-optimized clone to avoid layout overlays and fixed/sticky elements
  const container = document.createElement('div')
  container.setAttribute('aria-hidden', 'true')
  container.style.position = 'fixed'
  container.style.left = '-10000px'
  container.style.top = '0'
  container.style.width = 'auto'
  container.style.zIndex = '-1'

  const clone = el.cloneNode(true)
  // Force clean, print-focused styling
  clone.style.background = '#ffffff'
  clone.style.boxShadow = 'none'
  clone.style.border = 'none'
  clone.style.maxWidth = 'unset'
  // Content width equals page width minus margins: 8.5in - 0.5in = 8.0in
  clone.style.width = '8in'
  clone.style.padding = '0.2in 0.25in' // mild internal padding

  container.appendChild(clone)
  document.body.appendChild(container)

  let lastError = null
  try {
    for (const attempt of attempts) {
      try {
        await html2pdf().set({ ...base, ...attempt }).from(clone).save()
        lastError = null
        break
      } catch (e) {
        lastError = e
      }
    }
  } finally {
    // Cleanup offscreen container regardless of success
    if (container && container.parentNode) container.parentNode.removeChild(container)
  }

  if (lastError) throw lastError || new Error('Unknown error during PDF export')
}
