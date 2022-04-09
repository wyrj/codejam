import { CustomIO } from "./io";

export async function interaction(caseResolver: (io: CustomIO) => Promise<void>) {
  const io = new CustomIO();
  const [T] = await io.getIntArray();

  for (let i = 1; i <= T; i++) {
    await caseResolver(io);
  }
  io.close();
}