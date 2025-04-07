import { MMKV } from "react-native-mmkv";
export const mmkvStorage = new MMKV({
  encryptionKey: "com.tvtam",
  id: "com.tvtam"
  // mode: Mode.MULTI_PROCESS,
});
