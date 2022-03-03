export async function waitSeconds(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds * 1000));
}
