import "./page-header.scss";

/** Properties for the {@linkcode PageHeader} component. */
type Props = {
  /** Whether this header should use the full width and height of the viewport. */
  fullPage?: boolean;
  /** The `alt` attribute to use for the logo `<img>`. */
  logoAlt?: string;
  /** The `src` attribute to use for the logo `<img>`. */
  logoSrc?: string;
  /** The subtitle to put beneath the `<h1>`. */
  subtitle?: string;
  /** The text for the `<h1>`. */
  title?: string;
};

/** Shared header component for all pages. */
export function PageHeader(props: Props): JsxElement {
  const {fullPage, logoAlt, logoSrc, subtitle, title} = props;

  let logoElement: OptionalJsxElement;
  if (logoAlt !== undefined && logoSrc !== undefined) {
    logoElement = <img class="logo" alt={logoAlt} src={logoSrc} />;
  }

  let subtitleElement: OptionalJsxElement;
  if (subtitle !== undefined) {
    subtitleElement = <p class="subtitle">{subtitle}</p>;
  }

  const headerClasses: string[] = ["page-header"];
  if (fullPage === true) {
    headerClasses.push("full-page");
  }

  return (
    <header class={headerClasses.join(" ")}>
      <h1>
        {logoElement}
        {title}
      </h1>
      {subtitleElement}
    </header>
  );
}
