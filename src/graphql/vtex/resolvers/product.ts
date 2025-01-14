import type { StoreProductRoot } from "@faststore/api";

const productResolver = {
  StoreProduct: {
    customData: (root: StoreProductRoot) => {
      return "This comes from productResolver";
    },
  },
};

export default productResolver;