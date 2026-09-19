export default function Page() {
  return (
    <>
      <div className="bg-black text-[#b4b4b4] px-6 pt-4 font-bold text-white text-justify">
        <h1 className="text-2xl">Som • axaxaxas-mlö</h1>
      </div>
      <div className="bg-black px-6 pb-4 ">
        <iframe
          className="pt-6"
          style={{ width: "100%", height: "120" }}
          src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Faxaxaxas%2Fdark-wave-71%2F&utm_medium=share&utm_source=embed&utm_content=show&utm_term=VXNlcjoyMzI5Mzg2NA%3D%3D"
          allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
        ></iframe>

        <iframe
          style={{ width: "100%", height: "120" }}
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Faxaxaxas%2Ftechno-7-2%2F"
          allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
        ></iframe>

        <iframe
          style={{ width: "100%", height: "120" }}
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Faxaxaxas%2Ftechno-7-1%2F"
          allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
        ></iframe>
      </div>
    </>
  );
}
