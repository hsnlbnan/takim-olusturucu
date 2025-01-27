import { useEffect, useState } from "react";
import { randomizeAndSplit } from "./helper/random";
import CustomTextArea from "./components/Input/Input";
import TeamIcon from "./components/Icon/Team";
import ScreenShotIcon from "./components/Icon/ScreenShot";
import html2canvas from "html2canvas";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Helmet } from "react-helmet";

function App() {
  const [data, setData] = useState(null);
  const [grouped, setGrouped] = useState(null);
  const [teamSize, setTeamSize] = useState(2);

  const buttonOnClick = () => {
    const grouped = randomizeAndSplit(data, Number(teamSize));
    setGrouped(grouped);
  };

  const handleTextChange = (e) => {
    let value = e.target.value;
    if (value.includes("\n")) {
      setData(value.split("\n").filter((i) => i));
    }
    if (value.length === 0) {
      return;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        const grouped = randomizeAndSplit(data, Number(teamSize));
        setGrouped(grouped);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, teamSize]);

  return (
    <>
      <Helmet>
        <title>Takım Oluşturucu | Rastgele Takım Oluşturma Aracı</title>
        <meta name="description" content="Hızlı ve kolay bir şekilde rastgele takımlar oluşturun. İsim listesini girin, takım büyüklüğünü seçin ve takımlarınızı oluşturun." />
        <meta name="keywords" content="takım oluşturucu, random takım, takım oluşturma, grup oluşturma" />
        <meta name="author" content="Hüsnü Lübnan" />
        <meta property="og:title" content="Takım Oluşturucu | Rastgele Takım Oluşturma Aracı" />
        <meta property="og:description" content="Hızlı ve kolay bir şekilde rastgele takımlar oluşturun." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://takim-olustur.com" />
        <meta property="og:author" content="https://husnu.dev" />
        <link rel="canonical" href="https://takim-olustur.com" />
        <html lang="tr" />
        <meta property="og:locale" content="tr_TR" />
      </Helmet>

      <div className="mx-auto mt-9 px-4 md:px-0 container">
        <h1 className="mb-[20px] font-bold text-4xl text-gray-900 md:text-5xl lg:text-6xl leading-none tracking-tight">
          takim-
          <span className="underline underline-offset-3 decoration-8 decoration-blue-400">
            olustur
          </span>
          <span className="text-blue-700">.com</span>
        </h1>

        <p className="mb-[20px] font-normal text-gray-500 text-sm">
          <a
            href="https://husnu.dev"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            Hüsnü Lübnan
          </a>{" "}
          tarafından geliştirildi.
        </p>

        <CustomTextArea
          onChange={handleTextChange}
          buttonOnClick={buttonOnClick}
          setTeamSize={setTeamSize}
        />
        {data && (
          <div className="flex justify-between items-start border-gray-200 mt-10 py-6 border-t border-b">
            <h5 className="w-full min-w-16 font-bold text-gray-900 text-medium leading-none">
              Toplam {data.length} kişi eklendi:
            </h5>
            <ul className="flex flex-wrap justify-end items-center gap-x-2 gap-y-1 w-full">
              {data.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="relative border-gray-700 px-3 py-1 border rounded-md min-w-6 font-normal text-gray-700 text-sm"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <br />
        <div
          id="teams-section"
          className="flex flex-wrap justify-between gap-3 mt-5"
        >
          {grouped?.map((item, index) => {
            return (
              <div
                key={index}
                class="bg-white mb-12 p-4 border rounded-lg w-full max-w-md"
              >
                <div class="relative flex justify-between items-center mb-4">
                  <h5 class="flex items-center border-gray-500 pb-3 border-b w-full font-medium text-blue-700 text-xl leading-none">
                    <TeamIcon class="mr-2 w-8 h-8 fill-blue-700" /> {index + 1}.
                    Takım
                  </h5>
                </div>
                <div class="justify-end flow-root w-full">
                  <ul class="flex flex-col divide-y divide-gray-200">
                    {item.map((item, index) => {
                      return (
                        <li class="py-2" key={index}>
                          <div class="flex items-center space-x-4">
                            <div class="inline-flex items-center font-semibold text-base text-gray-900">
                              {item}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* fixed button to save screenshot */}
        {grouped && (
          <button
            onClick={() => {
              const node = document.getElementById("teams-section");
              html2canvas(node).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const downloadURI = (uri, name) => {
                  var link = document.createElement("a");
                  link.download = name;
                  link.href = uri;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                };

                downloadURI(imgData, "teams.png");
              });
            }}
            className="right-0 bottom-0 fixed flex items-center space-x-2 m-10 px-2 py-2 border border-blue-700 border-dashed rounded-lg text-blue-700 text-sm cursor-pointer"
          >
            <ScreenShotIcon
              data-tooltip-id="screenshot-save"
              className="w-5 h-5 select-none fill-blue-700 focus:outline-none"
            />
          </button>
        )}

        <Tooltip
          id="screenshot-save"
          effect="fade"
          place="top"
          variant="info"
          float="true"
          type="light"
        >
          <span className="text-white text-xs">PNG olarak kaydet</span>
        </Tooltip>
      </div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8616192210761755"
        crossorigin="anonymous"
      ></script>
    </>
  );
}

export default App;
