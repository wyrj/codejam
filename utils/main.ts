import { CustomIO } from "./io";

export async function main(
  caseResolver: (io: CustomIO) => Promise<string>,
  printOption?: Parameters<CustomIO['printAns']>[2],
) {
  const io = new CustomIO();
  const [T] = await io.getIntArray();

  for (let i = 1; i <= T; i++) {
    io.printAns(i, await caseResolver(io), printOption);
  }
  io.close();
}
