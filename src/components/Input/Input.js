import React, { useRef } from "react";
import useAutosizeTextArea from "../../hooks/useAutoHeight";
import Shift from "../Icon/Shift";

export const CustomTextArea = ({ onChange, buttonOnClick, setTeamSize }) => {
  const [value, setValue] = React.useState("");
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="px-4 py-2 bg-white rounded-t-lg">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full min-h-[100px] p-3 text-sm text-gray-900 bg-white border-0 focus:ring-0  focus: outline-cyan-800 focus: outline-1"
              placeholder="İsimlerini alt alta yazınız."
              required
              onChange={(e) => {
                onChange(e);
                setValue(e.target.value);
              }}
              ref={textAreaRef}
            ></textarea>
          </div>
          <div className="flex items-start gap-3 md:gap-0 md:items-center justify-between px-3 py-2 border-t flex-col-reverse md:flex-row">
            <button
              type="button"
              onClick={buttonOnClick}
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              <span>Takım Oluştur</span>
              <span className="text-xs ml-1 opacity-50  flex items-center">
                (<Shift className="w-4 h-4" /> + Enter)
              </span>
            </button>
            <div className="flex pl-0 space-x-1 sm:pl-2 justify-center items-center">
              <input
                type="text"
                id="default-input"
                className="max-w-[100px] max-h-[30px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
                defaultValue="2"
                onChange={(e) => setTeamSize(e.target.value)}
              />
              <label
                htmlFor="default-input"
                className="block text-sm font-medium text-gray-900"
              >
                Takım Boyutu
              </label>
            </div>
          </div>
        </div>
      </form>
      <p className="ml-auto text-xs text-gray-500">
        Lütfen satırlar arası boşluk bırakmayınız.
      </p>
      <p className="text-blue-600 underline text-xs mt-2">
        Verdiğin bilgiler hiçbir şekilde kaydedilmemektedir.
      </p>
    </>
  );
};
export default CustomTextArea;
