import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function DropdownBaru(props) {
  return (
    <>
      <Disclosure as="div" className="font-poppins mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? "hidden" : ""
              } transition ease-in-out text-xl font-semibold w-full text-center`}
            >
              {props.title}
              <ChevronDownIcon className="w-5 h-5 my-3 w-full object-center animate-bounce" />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2">
              {props.desc}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
