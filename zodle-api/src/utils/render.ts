import ejs from "ejs";
import { readFileSync } from "fs";
import { join } from "path";

const viewsPath = join(import.meta.dir, "../views");

export function render(page: string, data: Record<string, unknown> = {}): string {
  const pagePath = join(viewsPath, `${page}.ejs`);
  const layoutPath = join(viewsPath, "layout/application.ejs");

  const pageTemplate = readFileSync(pagePath, "utf-8");
  const content = ejs.render(pageTemplate, data);

  const layoutTemplate = readFileSync(layoutPath, "utf-8");
  if (layoutTemplate.includes("<%- body %>")) {
    return ejs.render(layoutTemplate, { ...data, body: content });
  }

  return content;
}

export function renderRaw(page: string, data: Record<string, unknown> = {}): string {
  const pagePath = join(viewsPath, `${page}.ejs`);
  const template = readFileSync(pagePath, "utf-8");
  return ejs.render(template, data);
}
