import { HttpServerResponse } from "@effect/platform"
import { render } from "../../utils/render"

export const index = HttpServerResponse.html(render("hello/index", { title: "Home" }));
export const create = HttpServerResponse.html(render("hello/create", { title: "Create" }));
export const show = HttpServerResponse.html(render("hello/show", {title: "show"}));
