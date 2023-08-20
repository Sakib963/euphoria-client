import Heading from "../../Shared/Heading/Heading";

const TopBrandsDeal = () => {
    return (
        <div className="py-10 px-4 lg:px-10">
            <Heading title={"Top Brands"}/>
            <div className="flex flex-col items-center justify-center my-10 py-4 lg:py-10 lg:px-5 bg-black text-[#ffffff] rounded-lg">
                <h1 className="font-bold lg:font-extrabold text-3xl lg:text-5xl mb-3 lg:mb-6">Top Brands Deal</h1>
                <p className="text-lg font-normal mb-8 lg:mb-14">Up To <span className="font-bold text-[#FBD103]">60%</span> off on brands</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6">
                    <div className="flex items-center justify-center p-1 lg:p-4 bg-[#ffffff] rounded-lg">
                        <img className="scale-50 md:scale-75 lg:scale-100" src="https://i.ibb.co/KhrNtyJ/h-m.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center p-1 lg:p-4 bg-[#ffffff] rounded-lg">
                        <img className="scale-50 md:scale-75 lg:scale-100" src="https://i.ibb.co/dKk5c6s/puma.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center p-1 lg:p-4 bg-[#ffffff] rounded-lg">
                        <img className="scale-50 md:scale-75 lg:scale-100" src="https://i.ibb.co/X34P59z/nike.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center p-1 lg:p-4 bg-[#ffffff] rounded-lg">
                        <img className="scale-50 md:scale-75 lg:scale-100" src="https://i.ibb.co/VVqx8R2/levi-s.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center p-1 lg:p-4 bg-[#ffffff] rounded-lg">
                        <img className="scale-50 md:scale-75 lg:scale-100" src="https://i.ibb.co/tpFFNLz/us-polo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBrandsDeal;