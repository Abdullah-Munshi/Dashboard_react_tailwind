export const LabelBoxInput = ({ label, input }) => {
  return (
    <div>
      <label htmlFor="" className="block text-white font-normal text-sm mb-3">
        Project Name
      </label>
      <input
        type="text"
        className="w-full h-12 bg-[#515151] px-4 text-base text-white border border-[#515151] transition duration-200 focus:border-[#666666] outline-none rounded-[8px]"
      />
      <span className="block text-right text-[#FF2020] text-xs font-bold mt-2">
        Cannot be more than 100 characters
      </span>
    </div>
  );
};
