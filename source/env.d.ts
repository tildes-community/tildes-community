// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="astro/client" />

import {type JSX} from "preact";

declare global {
  /** Shorthand for {@linkcode JSX.Element}. */
  type JsxElement = JSX.Element;

  /** An optional {@linkcode JsxElement}. */
  type OptionalJsxElement = JsxElement | undefined;
}
