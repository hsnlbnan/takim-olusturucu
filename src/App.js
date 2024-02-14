import { useEffect, useState } from "react";
import { randomizeAndSplit } from "./helper/random";
import CustomTextArea from "./components/Input/Input";
import TeamIcon from "./components/Icon/Team";
import ScreenShotIcon from "./components/Icon/ScreenShot";
import html2canvas from "html2canvas";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("G-BKTTQ8Y8Q1");

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
    <div className="container mx-auto mt-9">
      <h1 className="mb-[20px] text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
        takim-
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 ">
          olustur
        </span>
        <span className="text-blue-700">.com</span>
      </h1>

      <p className="mb-[20px]  text-sm font-normal text-gray-500">
        <a
          href="https://www.linkedin.com/in/husnu/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          Hüsnü Lübnan
        </a>{" "}
        tarafından gelistirildi.
      </p>

      <CustomTextArea
        onChange={handleTextChange}
        buttonOnClick={buttonOnClick}
        setTeamSize={setTeamSize}
      />
      {data && (
        <div className="flex items-start justify-between mt-10 py-6 border-t border-b border-gray-200">
          <h5 className="text-medium font-bold leading-none text-gray-900 min-w-16 w-full">
            Toplam {data.length} kişi eklendi:
          </h5>
          <ul className="flex items-center gap-y-1 gap-x-2 flex-wrap w-full justify-end">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className="py-1 border border-gray-700 text-gray-700 px-3 text-sm font-normal rounded-md min-w-6 relative"
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
        className="flex gap-3 justify-between mt-5 flex-wrap"
      >
        {grouped?.map((item, index) => {
          return (
            <div
              key={index}
              class="w-full max-w-md p-4 bg-white border rounded-lg mb-12"
            >
              <div class="flex items-center justify-between mb-4 relative">
                <h5 class="flex items-center text-xl font-medium leading-none text-blue-700 pb-3 border-b border-gray-500 w-full">
                  <TeamIcon class="w-8 h-8 mr-2 fill-blue-700" /> {index + 1}.
                  Takım
                </h5>
              </div>
              <div class="flow-root w-full  justify-end">
                <ul class="divide-y divide-gray-200 flex flex-col">
                  {item.map((item, index) => {
                    return (
                      <li class="py-2" key={index}>
                        <div class="flex items-center space-x-4">
                          <div class="inline-flex items-center text-base font-semibold text-gray-900">
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
          className="fixed bottom-0 right-0 m-10 px-2 py-2 
       border border-blue-700 border-dashed
       text-sm text-blue-700 rounded-lg flex items-center space-x-2 cursor-pointer "
        >
          <ScreenShotIcon
            data-tooltip-id="screenshot-save"
            className="w-5 h-5 fill-blue-700 select-none focus:outline-none"
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
        <span className="text-xs text-white">PNG olarak kaydet</span>
      </Tooltip>
    </div>
  );
}

export default App;
