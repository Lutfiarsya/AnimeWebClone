const VideoPlayer = ({source}) => {

    return(
        <div className="flex justify-center my-8">
      <iframe
        width="95%"
        height="500px"
        src={source}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
        allowFullScreen
      ></iframe>
        </div>
    )
}


export default VideoPlayer