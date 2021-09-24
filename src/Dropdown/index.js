import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

export default function Dropdown(props) {
    return (
        <>
            <Disclosure as="div" className="font-poppins mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="transition ease-in-out font-semibold flex justify-between w-full px-4 py-3 text-xl font-medium text-left text-white bg-palegreen rounded-lg hover:bg-darkgreen focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>{props.title}</span>
                            <ChevronUpIcon
                                className={`${open ? 'transform rotate-180' : ''
                                    } w-5 h-5 text-white`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                            {props.description}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
