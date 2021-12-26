import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  PhoneIcon,
  AcademicCapIcon,
  UsersIcon,
  XIcon,
  UserGroupIcon,
  ArchiveIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const navigation = [
  {
    name: "Tentang Kami",
    href: "/aboutus",
    icon: UsersIcon,
  },
  {
    name: "Aktivitas",
    href: "/aktivitas",
    icon: AcademicCapIcon,
  },
  {
    name: "Produk",
    href: "/produk",
    icon: ArchiveIcon,
  },
  {
    name: "Komunitas",
    href: "https://t.me/joinchat/-FYL91EUszBmZGQ1",
    icon: UserGroupIcon,
  },
  {
    name: "Hubungi Kami",
    href: "/contactus",
    icon: PhoneIcon,
  },
];

export default function Navbar() {
  return (
    <header className="z-50 sticky top-0">
      <Popover className="relative bg-white border-b-2 border-gray-100 font-barlow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 px-10 lg:px-20 md:justify-between">
            <div className="flex justify-start">
              <a href="/">
                <span className="sr-only">Mongga</span>
                <img
                  alt="Mongga"
                  className="h-10 w-auto md:h-0 lg:h-10"
                  src="https://mongga.id/wp-content/uploads/2021/02/cropped-MONGGA-LOGO-P1.png"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-16 px-10">
              <a
                href="/aboutus"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Tentang Kami
              </a>
              <a
                href="/aktivitas"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Aktivitas
              </a>

              <Menu as="div" className="text-base font-medium text-gray-500 hover:text-gray-900">
                <Menu.Button className="inline-flex text-base font-medium text-gray-500 hover:text-gray-900">
                  Produk
                  <ChevronDownIcon
                    className="absolut w-5 h-5 ml-1 mt-0.5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items as='ul' className="absolute mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1">
                      <Menu.Item as='li'>
                        {({ active }) => (
                          <a
                            className={`${active && 'bg-green-500'} text-base font-medium group flex rounded-md items-center w-full px-2 py-2`}
                            href="/kompetisi"
                          >
                            Kompetisi
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item as='li'>
                        {({ active }) => (
                          <a
                            className={`${active && 'bg-green-500'} text-base font-medium group flex rounded-md items-center w-full px-2 py-2`}
                              href="https://mongga.id/tryout"
                          >
                            Try Out
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item as='li'>
                        {({ active }) => (
                          <a
                            className={`${active && 'bg-green-500'} text-base font-medium group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              href="https://mongga.id/mongga-belajar"
                          >
                            Open Class
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>

                </Transition>
              </Menu>

              <a
                href="https://t.me/joinchat/-FYL91EUszBmZGQ1"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Komunitas
              </a>

              <a
                href="/contactus"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Hubungi Kami
              </a>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <a href="/">
                      <img
                        alt="Mongga"
                        className="h-8 w-auto"
                        src="https://mongga.id/wp-content/uploads/2021/02/cropped-MONGGA-LOGO-P1.png"
                      />
                    </a>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
