export const transformToProduct = (data) => {
  return {
    title: data?.DeviceName || "Hardly Anything Takes More Coura...",
    image: data?.image || "https://source.unsplash.com/dS2hi__ZZMk/840x840",
    price: data?.price || 180,
    horizontal: data?.horizontal || true,
    ...data,
  };
};
