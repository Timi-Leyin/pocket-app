import { Edit } from "iconsax-react";
import { NoteProps } from "@/interfaces/index";
import { date } from "@/utils/index";

const Note = ({ data }:{data:NoteProps}) => {
  // console.log(data)
  const element= document.createElement("p")
    element.innerHTML=atob(data.note)
  return (
    <button className="note outline-none relative max-w-[300px] h-[300px] text-left p-1 rounded-lg bg-gradient-accent text-black">
      <div className="bg-pink-500 p-5 h-full rounded-[inherit] flex flex-col justify-between ">
        <div className="content-highlight font-bold pt-2 text-xl">
          <span>{element.textContent}</span>
          {/* {` The beginning of screenless design:
        UI jobs to be taken
        over by solution Architect.`} */}
        </div>

        <div className="meta-data py-0 flex justify-between items-center">
          <p className="date">
            <span>{date(data.created_at)}</span>
            {/* October 16, 2022 */}
          </p>
          <div className="w-[50px] flex-center text-black cursor-pointer  h-[50px] rounded-full bg-white">
            <Edit size="20px" />
          </div>
        </div>
      </div>
    </button>
  );
};
export default Note;
