import { useState, useEffect } from "react";

export function Form() {
  //   const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [meme, setMeme] = useState([
    {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg",
    },
  ]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    console.log("data fetched");
  }, [meme]);

  const [allMemes, setAllMemes] = useState({});

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }
  function handleChange(event) {
    const { name, type, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          name="topText"
          value={meme.topText || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="bottom text"
          name="bottomText"
          value={meme.bottomText || ""}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="grid-col-span-2 ">
          Get a new meme image
        </button>
      </div>
      <section className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-image" />
        <h2 className="top-text">{meme.topText}</h2>
        <h2 className="bottom-text">{meme.bottomText}</h2>
      </section>
    </div>
  );
}
