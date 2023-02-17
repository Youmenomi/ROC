export type IndexType = string | number | symbol;

/* c8 ignore start */
export function report(pkgName: string | undefined) {
  return new Error(`[${pkgName}] Please report this bug to the author.`);
}
/* c8 ignore stop */
