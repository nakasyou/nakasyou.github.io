import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@nakasyou0" />
      <meta name="twitter:creator" content="@nakasyou0" />

      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: this is a static script
        dangerouslySetInnerHTML={`
      (() => {
        const GA_ID = 'G-XCPC66GQ5T';
        if (navigator.doNotTrack === '1') return;
        if (window.__gaLoaded) return;

        const init = () => {
          if (window.__gaLoaded) return;
          window.__gaLoaded = true;
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){dataLayer.push(arguments);};

          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
          script.onload = () => {
            window.gtag('js', new Date());
            window.gtag('config', GA_ID);
          };
          document.head.appendChild(script);
        };

        if ('requestIdleCallback' in window) {
          requestIdleCallback(init, { timeout: 2500 });
        } else {
          setTimeout(init, 2000);
        }
      })();
    `}
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  )
})
