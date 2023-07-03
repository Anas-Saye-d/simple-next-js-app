import Link from "next/link";
import Image from "next/image";

export default function Movie({title,id,poster_path,release_data}){
    const imagePath= "https://image.tmdb.org/t/p/original"
    // console.log(poster_path)

    return(
        <div>
            <h1>{title}</h1>
            <h2>{release_data}</h2>
            <Link href={'/asd'}>
                <img src={imagePath + poster_path} width={400} height={400} alt={title} />
            </Link>
        </div>
    )
}