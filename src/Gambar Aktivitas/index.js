import {
    a,
} from "react-router-dom";

export default function GambarAktivitas(props) {
    if (props.position == 'left') {
        return (
            <>
                <div className="my-5">
                    <div className="relative h-44 w-80 lg:h-56 lg:w-96 transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
                        <img alt=""
                            src={props.src}
                            className="z-50 absolute top-0 right-0 h-full w-full pb-4 pl-4 lg:pb-8 lg:pl-8"
                        />
                        <div className="z-0 absolute left-0 bottom-0 bg-palegreen rounded-xl lg:rounded-3xl w-11/12 h-full"></div>
                    </div>
                </div>
            </>
        )
    }
    else if (props.position == 'right') {
        return (
            <>
                <div className="my-5">
                    <div className="relative h-44 w-80 lg:h-56 lg:w-96 mx-auto transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
                        <img alt=""
                            src={props.src}
                            className="z-50 absolute top-0 left-0 h-full w-full pb-4 pr-4 lg:pb-8 lg:pr-8"
                        />
                        <div className="z-0 absolute right-0 bottom-0 bg-palegreen rounded-xl lg:rounded-3xl w-11/12 h-full"></div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="my-5">
                    <div className="relative h-44 w-80 lg:h-56 lg:w-96 mx-auto transition ease-out duration-200 transform hover:-translate-y-0.5 hover:scale-105">
                        <img alt=""
                            src={props.src}
                            className="z-50 absolute top-0 left-0 h-full w-full pb-4 pr-4 lg:pb-8 lg:pr-8"
                        />
                        <div className="z-0 absolute right-0 bottom-0 bg-palegreen rounded-xl lg:rounded-3xl w-11/12 h-full"></div>
                    </div>
                </div>
            </>
        )
    }
}