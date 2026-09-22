export default async (request, context) => {
  const url = new URL(request.url);
  const response = await context.next();
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;

  let html = await response.text();
  const raw = url.searchParams.get("r") || "";
  let name = "";
  if (raw) {
    try {
      const pad = raw.length % 4 === 0 ? "" : "=".repeat(4 - (raw.length % 4));
      const b64 = raw.replace(/-/g, "+").replace(/_/g, "/") + pad;
      const bin = atob(b64);
      const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
      const parsed = JSON.parse(new TextDecoder().decode(bytes));
      if (parsed && typeof parsed.name === "string") {
        name = parsed.name.replace(/[\u0000-\u001F\u007F]/g, "").slice(0, 120);
      }
    } catch (_) {}
  }

  const title = name ? `${name} · recipe card` : "Recipe cards";
  const description = name
    ? `${name} — a one-page recipe you can read while you cook.`
    : "A one-page recipe you can read while you cook — ingredients on the left, the order of mixing and baking on the right.";

  const esc = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const safeTitle = esc(title);
  const safeDesc = esc(description);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle} | Jessica Temporal</title>`);
  html = html.replace(/property="og:title" content="[^"]*"/g, `property="og:title" content="${safeTitle}"`);
  html = html.replace(/property="twitter:title" content="[^"]*"/g, `property="twitter:title" content="${safeTitle}"`);
  html = html.replace(/name="description" content="[^"]*"/g, `name="description" content="${safeDesc}"`);
  html = html.replace(/property="og:description" content="[^"]*"/g, `property="og:description" content="${safeDesc}"`);
  html = html.replace(/\/images\/recipe-cards-og\.svg/g, "/images/recipe-cards-og.png");

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  });
};
