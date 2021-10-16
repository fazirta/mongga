import {
    a,
} from "react-router-dom";

export default function CardReview(props) {
    return (
        <>
            <div className="relative mx-auto flex justify-center my-5">
                <div class="transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
                    <img class="z-0 mx-auto"
                        src={props.src} />
                    <div class="absolute top-0 flex flex-col px-10 h-full max-w-xs">
                        <div class="flex-1 flex flex-col justify-end z-10 text-center">
                            <h1 class="font-bold text-yellow-400 text-lg font-poppins">{props.name}</h1>
                            <h2 class="text-white font-light pb-2 font-poppins text-sm">{props.course}</h2>
                        </div>
                        <div class="flex-1 z-10">
                            <p class="text-gray-300 text-xs mt-5 font-light text-justify font-poppins">
                                {props.review}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
