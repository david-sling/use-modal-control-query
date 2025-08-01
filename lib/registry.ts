export const getRegistryJson = (name: string) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/r/${name}.json`
