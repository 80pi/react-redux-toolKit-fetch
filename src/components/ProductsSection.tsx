export const AddProducts = ({ handleAddProduct, addedProductData }: any) => {
  return (
    <>
      <button type="submit" onClick={handleAddProduct}>
        Add a product
      </button>
      <br />
      {addedProductData && (
        <>
          <h4>Added Product Details</h4>
          <p>{addedProductData?.id}</p>
          <p>{addedProductData?.title}</p>
        </>
      )}
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
      <br />
      {updatedProductData && (
        <>
          <h4>Updated Product Details</h4>
          <p>{updatedProductData?.id}</p>
          <p>{updatedProductData?.title}</p>
          <p>{updatedProductData?.brand}</p>
        </>
      )}
    </>
  );
};
export const DeleteProducts = ({
  handleDeleteProduct,
  deletedProductData,
}: any) => {
  return (
    <>
      <button type="submit" onClick={handleDeleteProduct}>
        deleted product data
      </button>
      <br />
      {deletedProductData && (
        <>
          <h4>Deleted Product Details</h4>
          <p>{deletedProductData?.id}</p>
          <p>{deletedProductData?.title}</p>
          <p>{deletedProductData?.brand}</p>
        </>
      )}
    </>
  );
};
