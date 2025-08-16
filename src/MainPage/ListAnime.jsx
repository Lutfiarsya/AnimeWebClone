import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const GetTopAnime = ({ ApiAnime, AnimeRecommendations, HomePage, setLoading, Page, searchQuery }) => {
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setItems(null) // reset data tiap render
    const fetchData = async () => {
      try {
        const response = await fetch(ApiAnime)
        if (!response.ok) {
          throw new Error("Failed to fetch")
        }
        const result = await response.json()
        setItems(result)
      } catch (error) {
        console.error("Network error", error)
        setError(error)
      }
    }
    fetchData()
  }, [Page, searchQuery])

  const page = HomePage ? items?.data?.slice(0, 8) : items?.data

  const navigate = useNavigate()
  const getAnimebyId = (id) => {
    navigate(`/anime/${id}`)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div>
      {items && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-y-6 gap-x-4 
            my-4 
            overflow-hidden
          "
        >
          {page?.map((anime) => {
            const title = AnimeRecommendations ? anime.entry[0].title : anime.title
            const Images = AnimeRecommendations
              ? anime.entry[0].images?.webp.image_url
              : anime.images?.webp.image_url

            return (
              <motion.div
                key={anime.mal_id}
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => getAnimebyId(anime.mal_id)}
                className="w-full flex justify-center"
              >
                <motion.button
                  className="
                    group mt-6 relative flex flex-col items-center 
                    shadow-md rounded-md overflow-hidden
                    py-3 
                    w-64 sm:w-72 h-[380px] sm:h-[450px] 
                    m-auto bg-[--CardColor]
                    before:absolute before:inset-0 before:bg-gradient-to-r 
                    before:from-transparent before:via-white/5 before:to-transparent
                    before:translate-x-[-200%] hover:before:translate-x-[200%]
                    before:transition-transform before:duration-[1.5s] before:ease-linear
                    after:absolute after:inset-0 after:bg-gradient-to-t 
                    after:from-[--SecondColor] after:to-transparent after:opacity-0 
                    hover:after:opacity-50 after:transition-opacity after:duration-300
                  "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[--SecondColor] via-[--ThirdColor] to-[--SecondColor]
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300
                             rounded-md -z-10"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 0%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{ padding: "2px" }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[--SecondColor]/30 via-transparent to-[--ThirdColor]/30"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      opacity: 0,
                      scale: 1.5,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                  />

                  <div className="overflow-hidden rounded-md relative z-0">
                    <img
                      src={Images}
                      alt={title}
                      width={250}
                      height={250}
                      className="m-auto object-cover rounded-md"
                    />
                  </div>

                  <motion.div
                    className="relative top-2 px-2 z-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h1
                      className="text-lg sm:text-xl font-['Exo_2'] font-bold text-white text-center line-clamp-2
                                 group-hover:text-black transition-colors duration-300"
                    >
                      {title}
                    </h1>
                  </motion.div>
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}

export default GetTopAnime
