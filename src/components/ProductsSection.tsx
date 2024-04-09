export const AddProducts = ({ handleAddProduct, addedProductData }: any) => {
  return (
    <>
      <button type="submit" onClick={handleAddProduct}>
        Add a product
      </button>
      <p>{addedProductData?.id}</p>
      <p>{addedProductData?.title}</p>
    </>
  );
};

export const UpdateProducts = ({
  handleUpdateProduct,
  updatedProductData,
}: any) => {
  return (
    <>
      <button type="submit" onClick={handleUpdateProduct}>
        Update the product
      </button>
      <p>{updatedProductData?.id}</p>
      <p>{updatedProductData?.title}</p>
      <p>{updatedProductData?.brand}</p>
    </>
  );
};
