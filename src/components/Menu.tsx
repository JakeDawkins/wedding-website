'use client';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'waku';
import {
  CalendarIcon,
  DressIcon,
  HeartIcon,
  HouseIcon,
  ListIcon,
  MapPinLineIcon,
  XIcon,
} from '@phosphor-icons/react/ssr';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="lg:hidden" onClick={() => setIsOpen(true)}>
        <ListIcon className="h-6 w-6" />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="w-full h-full space-y-4 bg-pink-50 py-4 px-6 flex flex-col">
            <button
              className="self-end inline text-end"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-6 w-6" aria-label="Close menu" />
            </button>
            <nav title="Menu" className="flex flex-col gap-4 mt-12">
              <Link
                to="/"
                className="w-full p-6 flex items-center justify-center border border-black rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <HouseIcon className="h-6 w-6 mr-2" /> Home
              </Link>
              <Link
                to="/our-story"
                className="w-full p-6 flex items-center justify-center border border-black rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <HeartIcon className="h-6 w-6 mr-2" /> Our story
              </Link>
              <Link
                to="/travel"
                className="w-full p-6 flex items-center justify-center border border-black rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <MapPinLineIcon className="h-6 w-6 mr-2" />
                Travel
              </Link>
              <Link
                to="/schedule"
                className="w-full p-6 flex items-center justify-center border border-black rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <CalendarIcon className="h-6 w-6 mr-2" />
                Schedule
              </Link>
              <Link
                to="/packing"
                className="w-full p-6 flex items-center justify-center border border-black rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <DressIcon className="h-6 w-6 mr-2" />
                What to Bring
              </Link>
            </nav>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
