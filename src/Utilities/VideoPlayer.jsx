const VideoPlayer = ({source}) => {

    return(
        <div className="flex justify-center my-8">
          {source == null ? 
          <div className="w-[95%] h-[500px] flex items-center justify-center bg-[--CardColor]">
            <h1 className="text-5xl text-white font-bold overflow-hidden">Maaf Trailer tidak tersedia</h1> 
          </div>
          : 
          <iframe
            width="95%"
            height="500px"
            src={source}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
            allowFullScreen
          ></iframe>
        }
        </div>
    )
}


export default VideoPlayer