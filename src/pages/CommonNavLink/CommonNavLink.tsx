import { useParams } from "react-router-dom";

const CommonNavLink = () => {
    const {id} = useParams();
    return (
      <div className="w-11/12 mx-auto bg-slate-100">
        <div className="py-10 ">
          <div className="text-center">
            <h3 className="text-xl font-bold">{id}</h3>
            <hr className="border-[#00a751f3] text-lg border-2 w-11/12 mx-auto mt-3" />
            <div className="flex justify-center items-center h-screen">
              <h4 className="text-xl font-semibold">
               {id} সম্পর্কে বর্তমানে কোন তথ্য নেই...
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CommonNavLink;