import { useState } from "react";
import { randomizeAndSplit } from "./helper/random";
import CustomTextArea from "./components/Input/Input";
function App() {
  const [data, setData] = useState(null);
  const [grouped, setGrouped] = useState(null);
  const [teamSize, setTeamSize] = useState(2);

  const buttonOnClick = () => {
    const grouped = randomizeAndSplit(data, teamSize);
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

  // console.log(data);

  return (
    <div className="container mx-auto mt-9">
      <h1 className="mb-[20px] text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
        Takım{" "}
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          oluştur
        </span>
      </h1>

      <p className="mb-[20px]  text-sm font-normal text-gray-500  dark:text-gray-400">
        Develop by{" "}
        <a
          href="https://www.linkedin.com/in/husnu/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          Hüsnü Lübnan
        </a>
      </p>

      <CustomTextArea
        onChange={handleTextChange}
        buttonOnClick={buttonOnClick}
        setTeamSize={setTeamSize}
      />
      <br />
      <div className="flex gap-3 justify-between mt-5 flex-wrap">
        {grouped?.map((item, index) => {
          return (
            <div
              key={index}
              class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  {index + 1}. Takım
                </h5>
              </div>
              <div class="flow-root">
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                  {item.map((item, index) => {
                    return (
                      <li class="py-3 sm:py-4" key={index}>
                        <div class="flex items-center space-x-4">
                          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
    </div>
  );
}

export default App;
