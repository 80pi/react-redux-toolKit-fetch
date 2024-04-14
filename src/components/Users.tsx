import {
  useAddPostMutation,
  useUpdatePostMutation,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../slice/userSlice";
import { MultipleUsers, SingleUserByInput } from "./AllUsers";
import { PostAComment, UpdateComment } from "./CommentsSection";
import { AddProducts, DeleteProducts, UpdateProducts } from "./ProductsSection";

const Users = () => {
  const [addPost, { data, isLoading }] = useAddPostMutation();
  const [updatePost, { data: updateData, isLoading: updatedLoading }] =
    useUpdatePostMutation();

  const [addProduct, { data: addedProductData, isSuccess: productAddStatus }] =
    useAddProductMutation();
  const [
    updateProduct,
    { data: updatedProductData, isSuccess: productUpdatedStatus },
  ] = useUpdateProductMutation();
  const [
    deleteProduct,
    { data: deletedProductData, isSuccess: productDeletionStatus },
  ] = useDeleteProductMutation();

  console.log("add post", data, isLoading);
  console.log("update post", updateData, updatedLoading);
  console.log("data", addedProductData, productAddStatus);
  console.log("data", updatedProductData, productUpdatedStatus);
  console.log("data", deletedProductData, productDeletionStatus);

  const handlePost = async () => {
    try {
      const postData: any = {
        userId: 10,
        id: 101,
        title: "post test",
        body: "post body",
      };
      await addPost(postData);
    } catch (error: any) {
      console.log("error while post", error);
    }
  };
  const handleUpdatePost = async () => {
    try {
      const updatedPostData: any = {
        userId: 10,
        id: 1,
        body: "post body",
        title: "post test update",
      };
      await updatePost({ id: 1, updatedData: updatedPostData });
    } catch (error: any) {
      console.log("error while post", error);
    }
  };
  const handleAddProduct = async () => {
    try {
      const newProductData: any = {
        title: "Gopi Iphone",
      };
      await addProduct(newProductData);
    } catch (error: any) {
      console.log("error while post", error);
    }
  };
  const handleUpdateProduct = async () => {
    try {
      const updatedProductData: any = {
        title: "Gopi Iphone 15 pro max",
      };
      await updateProduct({ id: 1, updatedData: updatedProductData }); //in which if we add getting 201 btu we can't update it
    } catch (error: any) {
      console.log("error while post", error);
    }
  };
  const handleDeleteProduct = async () => {
    try {
      await deleteProduct({ id: 1 });
    } catch (error: any) {
      console.log("error while deleting a product", error);
    }
  };
  return (
    <>
      <SingleUserByInput />
      <MultipleUsers />

      {/* post a comment post api call mutation */}
      <PostAComment handlePost={handlePost} />
      <br />
      <UpdateComment handleUpdatePost={handleUpdatePost} />

      <br />
      {/* post adding a product in product from dummyjson.com */}
      <br />
      <AddProducts
        handleAddProduct={handleAddProduct}
        addedProductData={addedProductData}
      />
      <br />
      <UpdateProducts
        handleUpdateProduct={handleUpdateProduct}
        updatedProductData={updatedProductData}
      />
      <br />
      <DeleteProducts
        handleDeleteProduct={handleDeleteProduct}
        deletedProductData={deletedProductData}
      />
    </>
  );
};
export default Users;
