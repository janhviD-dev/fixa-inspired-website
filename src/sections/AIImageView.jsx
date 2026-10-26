function AIImageView({ data, openIndex }){
    return (
      <>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={data[openIndex]?.img}
            alt="AI visual"
            className="rounded-2xl w-full max-w-md object-cover transition-all duration-300"
          />
        </div>
      </>
    );
}
export default AIImageView;