import "./page-header.scss";

type Props = {
  fullPage?: boolean;
  logoAlt?: string;
  logoSrc?: string;
  subtitle?: string;
  title?: string;
};

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
