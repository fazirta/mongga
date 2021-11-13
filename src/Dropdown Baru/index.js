import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function DropdownBaru(props) {
    return (
      <>
        <Disclosure as="div" className="font-poppins mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="transition ease-in-out font-semibold w-full text-bold text-center">
                {props.title}
                <ChevronDownIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 w-full object-center`}
              />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-darkgreen">
                {props.description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </>
    );
  }
  