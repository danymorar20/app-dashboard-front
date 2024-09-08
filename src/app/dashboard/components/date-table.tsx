import React, { Fragment } from 'react';
import { DateTableProps } from '../interfaces/data-table-props.interface';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { FiMoreVertical } from 'react-icons/fi';

type Action<T> = {
  label: string;
  icon: JSX.Element;
  onClick: (item: T) => void;
};

const DataTable = <T,>({
  headers,
  data,
  map,
  actions = [],
}: DateTableProps<T> & { actions?: Action<T>[] }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full text-gray-300">
        <thead>
          <tr className="bg-gray-700">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 text-left">{header}</th>
            ))}
            {actions.length > 0 && <th className="py-2 px-4 text-left">Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="bg-gray-800" key={index}>
              {headers.map((header, i) => (
                <td key={i} className="py-2 px-4">{String(item[map[header]])}</td>
              ))}
              {actions.length > 0 && (
                <td className="py-2 px-4">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-100 bg-gray-800 hover:bg-gray-700">
                        <FiMoreVertical />
                      </MenuButton>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        {actions.map((action, idx) => (
                          <MenuItem key={idx}>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-gray-700 text-white' : 'text-gray-300'
                                } group flex items-center px-4 py-2 text-sm w-full`}
                                onClick={() => action.onClick(item)}
                              >
                                {action.icon}
                                <span className="ml-3">{action.label}</span>
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
