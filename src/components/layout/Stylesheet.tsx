import { ASSET_VERSION } from '@/lib/photographs';

/**
 * Links one of the hand-written stylesheets from /public/styles.
 * CSS remains an independent, framework-free layer served as static files.
 */
export default function Stylesheet({ name }: { name: string }) {
  return <link href={`/styles/${name}.css?v=${ASSET_VERSION}`} rel="stylesheet" precedence="default" />;
}
