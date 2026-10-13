/**
 * Carga de Mermaid.
 *
 * Mermaid NO se empaqueta con Vite: son ~3 000 módulos que hacían el build
 * 5–6 veces más lento. Se sirve como un archivo estático (`public/vendor/
 * mermaid.min.js`, copiado de node_modules por vite.config.ts) y se carga con
 * <script> solo cuando una diapositiva tiene un diagrama.
 *
 * Mermaid MIDE el texto de cada rótulo para calcular el tamaño de las cajas y
 * después lo dibuja. Si mide con una fuente y dibuja con otra, las cajas quedan
 * angostas y los rótulos salen recortados. Con una fuente web (Inter) eso pasa
 * siempre que la fuente aún no esté cargada — y esta app restaura la última
 * diapositiva al abrir, así que puede medir antes de que Inter cargue.
 * Solución: una pila de fuentes LOCALES -> medición y dibujo coinciden siempre.
 */
export interface MermaidApi {
  initialize: (config: Record<string, unknown>) => void;
  run: (opts: { nodes: ArrayLike<HTMLElement> }) => Promise<void>;
}

let pending: Promise<MermaidApi> | null = null;

export function loadMermaid(): Promise<MermaidApi> {
  if (pending) return pending;
  pending = new Promise<MermaidApi>((resolve, reject) => {
    const ready = () => {
      const api = (window as unknown as { mermaid?: MermaidApi }).mermaid;
      if (!api) return reject(new Error('Mermaid no se inicializó'));
      api.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'Arial, Helvetica, sans-serif',
        flowchart: { htmlLabels: true, curve: 'basis', padding: 12, nodeSpacing: 40, rankSpacing: 60 },
      });
      resolve(api);
    };
    if ((window as unknown as { mermaid?: unknown }).mermaid) return ready();
    const s = document.createElement('script');
    s.src = `${import.meta.env.BASE_URL}vendor/mermaid.min.js`;
    s.async = true;
    s.onload = ready;
    s.onerror = () => { pending = null; reject(new Error('No se pudo cargar Mermaid')); };
    document.head.appendChild(s);
  });
  return pending;
}
