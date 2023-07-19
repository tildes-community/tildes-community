import path from "node:path";
// eslint-disable-next-line n/file-extension-in-import
import {defineConfig} from "astro/config";
import mdxIntegration from "@astrojs/mdx";
import preactIntegration from "@astrojs/preact";

/**
 * Create an absolute path from a given relative one, using the directory
 * this file is located in as the base.
 *
 * @param relative The relative path to make absolute.
 * @returns The absolute path.
 */
function toAbsolutePath(relative: string): string {
  return new URL(relative, import.meta.url).pathname;
}

// Create absolute paths to various directories.
const buildDir = toAbsolutePath("./public");
const sourceDir = toAbsolutePath("./source");

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  compressHTML: true,
  integrations: [mdxIntegration(), preactIntegration()],
  outDir: buildDir,
  publicDir: path.join(sourceDir, "assets/"),
  site: "https://tildes.community",
  srcDir: sourceDir,
});
