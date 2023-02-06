import { createContext, useState, useMemo } from "react";
import { assets } from "./assets";

export const AssetsContext = createContext({});

export function AssetsWrapper({ children }) {
  const [asset, setAsset] = useState(assets);

  const grabAsset = async () => {
    return asset;
  }

  const assetContext = useMemo(() => ({
    asset, 
    assets,
    grabAsset,
    updateAssetInfo: (obj) => {
      let arr = [...asset]
      let findIndex = arr.find((element, index) => {
        if (element.price == obj.price) {
          arr[index] = obj;
          setAsset(arr)
        }
      })
    }
  }), [asset]);

  return (
    <AssetsContext.Provider value={assetContext}>
      {children}
    </AssetsContext.Provider>
  );
}
