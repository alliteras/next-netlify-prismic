function Post({ name, description, portrait }) {
  let { url, alt } = portrait

  return (
    <div className="post">
      <img alt={alt} src={`${url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{name}</h2>
      </div>
    </div>
  )
}
export default Post
