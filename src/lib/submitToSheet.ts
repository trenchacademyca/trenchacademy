import { site } from "@/lib/site";

export function submitToSheet(form: string, fields: Record<string, string>) {
  if (!site.sheetUrl) return;
  const fd = new FormData();
  fd.append("token", site.sheetToken);
  fd.append("form", form);
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  fetch(site.sheetUrl, {
    method: "POST",
    mode: "no-cors",
    body: fd,
  }).catch(() => {});
}
