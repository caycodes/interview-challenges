import { useContext } from "react";
import { AssetsContext } from "../context/assetsContext";

function useAssets() {
  const assets = useContext(AssetsContext);
  return {...assets}
}
export default useAssets;
