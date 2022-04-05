import { CustomIO } from "./io";

export async function main(handleCase: (io: CustomIO, t: number) => Promise<void>) {
  const io = new CustomIO();
  const [T] = await io.getIntArray();

  for (let i = 1; i <= T; i++) {
    await handleCase(io, i);
  }
  io.close();
}
