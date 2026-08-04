export default function Page() {
  return (
    <>
      <div className="bg-black text-[#b4b4b4] px-6 pt-4 font-bold text-white text-justify">
        <h1 className="text-2xl">Som • Menos depois</h1>
      </div>
      <div className="bg-black px-6 pb-4 ">
        <div>
          <iframe
          className="mx-auto mb-10"
            style={{ border: "0", width: "350px", height: "442px" }}
            src="https://bandcamp.com/EmbeddedPlayer/track=2568722901/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
            seamless
          >
            <a href="https://menosdepois.bandcamp.com/track/horizonte-in-spito">
              horizonte inóspito by menos depois
            </a>
          </iframe>
        </div>

        <iframe
        className="mx-auto"
          style={{ border: "0", width: "350px", height: "442px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=1682237083/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://menosdepois.bandcamp.com/track/t-ticas-de-autoengano">
            táticas de autoengano by menos depois
          </a>
        </iframe>

        <iframe
        className="mx-auto "
          style={{ border: "0", width: "350px", height: "442px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=3998787998/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
          seamless
        >
          <a href="https://menosdepois.bandcamp.com/track/profeta-do-presente">
            profeta do presente by menos depois
          </a>
        </iframe>
      </div>
    </>
  );
}
