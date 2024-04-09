{
  /* post a comment post api call mutation */
}

export const PostAComment = ({ handlePost }: any) => {
  return (
    <>
      <br />
      <button type="submit" onClick={handlePost}>
        Post a comment
      </button>
      <br />
    </>
  );
};

export const UpdateComment = ({ handleUpdatePost }: any) => {
  return (
    <>
      <button type="submit" onClick={handleUpdatePost}>
        update exisiting comment
      </button>
    </>
  );
};
